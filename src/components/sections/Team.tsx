"use client";
import { useRef } from "react";
import Image from "next/image";
import { team } from "@/lib/content";
import { useScene, MQ, riseIn } from "@/lib/motion";

export default function Team() {
  const root = useRef<HTMLElement>(null);
  useScene(root, (mm, el) => {
    mm.add(MQ.motion, () => riseIn(el));
  });
  return (
    <section id="team" ref={root} aria-labelledby="team-title" className="relative bg-deep py-28 text-foam md:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <p data-rise className="eyebrow mb-5 text-center text-mint">{team.label}</p>
        <h2 id="team-title" data-rise className="mx-auto max-w-3xl text-center font-serif text-4xl leading-[0.98] sm:text-5xl lg:text-7xl">{team.title}</h2>
        <div className="mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
          {team.members.map((m, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={m.name}
                data-rise
                className={`grid min-w-0 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Cutout portraits — transparent bg sits directly on deep green */}
                <div className="relative aspect-[4/5] w-full max-w-[22rem] justify-self-center lg:max-w-none">
                  <Image
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className={flip ? "lg:text-right" : ""}>
                  <h3 className="break-words font-serif text-3xl leading-tight text-foam sm:text-4xl lg:text-5xl">{m.name}</h3>
                  {m.role && <p className="eyebrow mt-4 text-mint">{m.role}</p>}
                  {m.bio && (
                    <p className={`mt-5 max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-mist sm:text-base lg:text-[17px] ${flip ? "lg:ml-auto" : ""}`}>
                      {m.bio}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
