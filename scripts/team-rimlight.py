import numpy as np, cv2, sys, json
from PIL import Image
P=dict(
  color=(255,104,22),      # amber, sampled from yash rim (~218,148,58 peak / 200,115,40)
  core_color=(255,184,48), # hot yellow-white core right at the edge (yash ~252,229,100)
  core_strength=0.9, core_width=7.0,  # plateau-ish core, px
  inner_strength=1.0, gain=4.0,     # peak screen strength at edge on key side
  inner_decay=13.0,         # px e-fold inward
  fill_ratio=0.35,         # back/right side strength relative to key (yash right/left ~0.35)
  top_weight=0.45,         # how much upward-facing edges (hair top) get
  outer_glow=0.18,         # max alpha of halo outside matte (key side)
  outer_sigma=2.5,
  grade=(1.06,0.98,0.85), # warm grade multipliers R,G,B on subject
  wash=0.06,               # soft warm key wash, strongest on viewer-left
  face_protect=0.55,       # reduce rim inside detected face boxes
)
def process(src,dst,p=P):
    im=np.array(Image.open(src).convert('RGBA')).astype(np.float32)/255
    rgb,A=im[...,:3],im[...,3]
    H,W=A.shape
    m=(A>0.5).astype(np.uint8)
    d=cv2.distanceTransform(m,cv2.DIST_L2,5)
    # outward normal from blurred alpha
    Ab=cv2.GaussianBlur(A,(0,0),10)
    gx=cv2.Sobel(Ab,cv2.CV_32F,1,0,ksize=5); gy=cv2.Sobel(Ab,cv2.CV_32F,0,1,ksize=5)
    nrm=np.sqrt(gx**2+gy**2)+1e-6
    nx,ny=-gx/nrm,-gy/nrm      # outward normal
    key=np.clip(-nx,0,1)**0.7  # facing viewer-left
    fill=np.clip(nx,0,1)*p['fill_ratio']
    top=np.clip(-ny,0,1)*p['top_weight']
    dirw=np.maximum(np.maximum(key,fill),top)
    dirw=np.maximum(dirw,0.15)
    dirw=cv2.GaussianBlur(dirw,(0,0),3)
    # face protection
    g=(np.clip(rgb*A[...,None]+ (1-A[...,None])*np.array([10,33,30])/255,0,1)*255).astype(np.uint8)
    gray=cv2.cvtColor(g,cv2.COLOR_RGB2GRAY)
    # protect face/neck skin in upper body: skin-ish (bright, warm) pixels above y=0.45H
    hsv=cv2.cvtColor((np.clip(rgb,0,1)*255).astype(np.uint8),cv2.COLOR_RGB2HSV).astype(np.float32)
    skin=((hsv[...,0]<25)&(hsv[...,1]>40)&(hsv[...,2]>70)).astype(np.float32)
    skin[int(H*0.45):]=0
    skin=cv2.GaussianBlur(skin,(0,0),8)
    fp=1-p['face_protect']*np.clip(skin*1.5,0,1)
    faces=[]
    col=np.array(p['color'],np.float32)/255
    I=p['inner_strength']*np.exp(-d/p['inner_decay'])*dirw*fp*(A>0)
    C=p['core_strength']*np.exp(-(d/p['core_width'])**3)*dirw**1.5*fp*(A>0)
    ccol=np.array(p['core_color'],np.float32)/255
    # local contrast boost under the rim so folds read like Yash's lit fabric
    blur=cv2.GaussianBlur(rgb,(0,0),4)
    rgb=np.clip(rgb+(rgb-blur)*(1.2*np.clip(I*1.5,0,1))[...,None],0,1)
    # multiplicative rim: lights the existing fabric/hair texture instead of painting flat colour
    lit=rgb*(1+p['gain']*col*I[...,None])
    lit=lit+0.10*col*I[...,None]                # tiny additive so near-black hair still catches light
    lit=1-(1-np.clip(lit,0,1))*(1-ccol*C[...,None])   # screen hot core at the edge
    lit=np.clip(lit,0,1)
    # warm grade + soft key wash from viewer-left
    lit=lit*np.array(p['grade'],np.float32)
    X=np.linspace(1,0,W,dtype=np.float32)[None,:]
    wash=p['wash']*X*np.ones((H,1),np.float32)
    lit=1-(1-lit)*(1-col*wash[...,None])
    lit=np.clip(lit,0,1)
    # outer halo
    outside=(1-m).astype(np.float32)
    dout=cv2.distanceTransform(1-m,cv2.DIST_L2,5)
    G=p['outer_glow']*np.exp(-(dout/p['outer_sigma'])**2*0.5)*dirw*outside*fp
    G=np.clip(G,0,1)
    A2=A+(1-A)*G
    rgb2=(lit*A[...,None]+col*(G*(1-A))[...,None])/np.maximum(A2,1e-6)[...,None]
    out=np.dstack([np.clip(rgb2,0,1),A2])
    Image.fromarray((out*255+0.5).astype(np.uint8),'RGBA').save(dst,'WEBP',quality=90,method=6)
    return len(faces)
if __name__=='__main__':
    for n in sys.argv[1:]:
        print(n,'faces',process(f'/workspace/manastej-team-tweak/originals/{n}.webp',f'/workspace/manastej-team-tweak/{n}.webp'))
