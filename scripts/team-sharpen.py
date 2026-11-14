"""Subtle texture sharpen for team portraits (RGB only, alpha untouched)."""
import sys, numpy as np, cv2
from PIL import Image
P=dict(radius=1.2, amount=0.6, threshold=4/255,   # unsharp mask
       clarity_sigma=6.0, clarity=0.25,           # local contrast on dark shirt/hair
       face_protect=0.6, edge_erode=3)
def run(path,p=P):
    im=np.array(Image.open(path).convert('RGBA')).astype(np.float32)/255
    rgb,A=im[...,:3],im[...,3]; H,W=A.shape
    # interior mask: skip semi-transparent cutout edge so no halos appear there
    inner=cv2.erode((A>0.98).astype(np.uint8),np.ones((3,3)),iterations=p['edge_erode']).astype(np.float32)
    inner=cv2.GaussianBlur(inner,(0,0),1.5)
    # face/neck skin protection (upper 45%)
    hsv=cv2.cvtColor((rgb*255).astype(np.uint8),cv2.COLOR_RGB2HSV).astype(np.float32)
    skin=((hsv[...,0]<25)&(hsv[...,1]>40)&(hsv[...,2]>70)).astype(np.float32); skin[int(H*0.45):]=0
    skin=cv2.GaussianBlur(skin,(0,0),8); prot=1-p['face_protect']*np.clip(skin*1.5,0,1)
    # unsharp mask with threshold (soft knee)
    bl=cv2.GaussianBlur(rgb,(0,0),p['radius']); det=rgb-bl
    mag=np.abs(det).max(2,keepdims=True); knee=np.clip((mag-p['threshold'])/p['threshold'],0,1)
    out=rgb+p['amount']*det*knee*(inner*prot)[...,None]
    # clarity on dark regions (shirt, hair), not skin
    lum=out.mean(2); dark=np.clip((0.42-lum)/0.2,0,1)*(1-np.clip(skin*1.5,0,1))
    dark=cv2.GaussianBlur(dark,(0,0),3)*inner
    bl2=cv2.GaussianBlur(out,(0,0),p['clarity_sigma'])
    out=out+p['clarity']*(out-bl2)*dark[...,None]
    out=np.clip(out,0,1)
    Image.fromarray((np.dstack([out,A])*255+0.5).astype(np.uint8),'RGBA').save(path,'WEBP',quality=92,method=6)
for f in sys.argv[1:]: run(f); print('sharpened',f)
