"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

const STEPS = ["Discover", "Define", "Ideate", "Design", "Deliver"] as const;
type Step = (typeof STEPS)[number];

export default function DesignProcess() {
  const [active, setActive] = useState<Step>("Discover");
  const panelRef = useRef<HTMLDivElement>(null);

  function goTo(step: Step) {
    setActive(step);
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-[#003F88] mb-6">Design Process</h2>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        {STEPS.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            <button
              onClick={() => goTo(step)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === step
                  ? "bg-[#5A77D8] text-white"
                  : "bg-[#C3DBFD]/40 text-[#003F88] hover:bg-[#C3DBFD]"
              }`}
            >
              {step}
            </button>
            {i < STEPS.length - 1 && (
              <span className="text-zinc-400 text-base select-none">→</span>
            )}
          </span>
        ))}
      </div>

      {/* Panel */}
      <div ref={panelRef} className="border-t border-zinc-200 pt-6 scroll-mt-24">


        {active === "Discover" && (
          <div>
            <h4 className="text-base font-semibold text-[#003F88] mb-2">Research</h4>
            <p className="text-zinc-800 leading-relaxed mb-4">
              My team first started by looking into other competitors of NPR which included both the traditional and non-traditional sources. Those included C-Span News, Twitter, The New York Times and PBS. We noticed that most were lacking personalization. Looking further online and reading reviews from previous users of these news sources, its users want to be able to have their customizations that suit their needs.
            </p>
            <p className="text-zinc-800 leading-relaxed mb-6">
              The next step we took was to go interview users to find out some pain points and frustrations before any design decisions were made.
            </p>

            <h4 className="text-base font-semibold text-[#003F88] mb-2">Interviews</h4>
            <p className="text-zinc-800 leading-relaxed mb-4">
              The target audience I decided to focus on for my part in the project was the Baby Boomers, those who are very interested in checking the news (checking it more than a few times a day).
            </p>

            <h4 className="text-base font-semibold text-[#003F88] mb-3">Discovery from Interviews</h4>
            <ul className="list-disc pl-6 text-zinc-800 space-y-2">
              <li>The majority of the people we interviewed found that the news doesn't seem to affect their daily life. However, they like to check it daily to stay up to date with current events.</li>
              <li>Professionals whose jobs are impacted by world events seem to check the news more often and are more likely to pay for a subscription.</li>
              <li>Most people do not know if the news they read is reliable. However, they check info sources if they find it interesting.</li>
              <li>Most people surveyed do not find the news trustworthy and they are aware of biases.</li>
              <li>Most people seem to assume reputable news channels deliver reliable information.</li>
            </ul>
          </div>
        )}

        {active === "Define" && (
          <div>
            <h4 className="text-base font-semibold text-[#003F88] mb-2">Affinity Map</h4>
            <p className="text-zinc-800 leading-relaxed mb-6">
              Then from the insights we gained from our interviews we continued onto the stage of Affinity Mapping. We did this in a couple of drafts to make sure we broken them down enough into key categories to make it more understandable.
            </p>
            <ImageCarousel
              slides={[
                { src: "/first_draft_npr_affinity.webp", alt: "Affinity map — first draft" },
                { src: "/second_draft_npr_affinity.webp", alt: "Affinity map — second draft" },
                { src: "/affinity_mapping_npr.webp", alt: "Affinity map — final" },
              ]}
            />

            <h4 className="text-base font-semibold text-[#003F88] mb-4">Persona</h4>
            <Image
              src="/person_npr.webp"
              alt="NPR News persona"
              width={800}
              height={500}
              className="rounded-lg shadow-sm w-full h-auto border border-zinc-100"
            />
          </div>
        )}

        {active === "Ideate" && (
          <div>
            <h4 className="text-base font-semibold text-[#003F88] mb-3">User Journey Map</h4>
            <Image
              src="/journey_map_npr.webp"
              alt="User journey map"
              width={800}
              height={500}
              className="rounded-lg shadow-sm w-full h-auto border border-zinc-100 mb-4"
            />
            <p className="text-zinc-800 leading-relaxed mb-3">
              After putting together both my persona and user journey map the next stage was to create the JTBD statement which is as follows:
            </p>
            <blockquote className="border-l-4 border-[#FF5DB6] pl-4 py-2 mb-8 text-zinc-800 italic">
              <strong>My Job To Be Done:</strong> When I want to share news that I read with my friends I want to be able to only share certain parts of the article and not the whole so I can make it easy for them to read and understand the main points.
            </blockquote>

            <h4 className="text-base font-semibold text-[#003F88] mb-3">MVP (Minimal Viable Product)</h4>
            <p className="text-zinc-800 leading-relaxed mb-4">
              Based on research and insights compiled up until this point which includes the JTBD and HMW statements I have organized my MVP for this project. These are the important pieces of information I need to keep in mind as I move onto the design stage.
            </p>
            <Image
              src="/mvp_npr.webp"
              alt="MVP outline"
              width={800}
              height={500}
              className="rounded-lg shadow-sm w-full h-auto border border-zinc-100 mb-8"
            />

            <h4 className="text-base font-semibold text-[#003F88] mb-3">Task Flow</h4>
            <p className="text-zinc-800 leading-relaxed mb-2">
              After much research I constructed my task flow for Alice Doe, the persona I created, based on her frustrations. The feature I designed allows Alice to join a community based on a topic she enjoys, bringing more relevance and connection to her news experience.
            </p>
            <p className="text-zinc-800 leading-relaxed mb-4">
              <strong>User scenario:</strong> Alice loves to read news multiple times throughout the day. She wants to be able to read news that was shared with people who share the same opinions and values. Therefore she is searching for a community that shares the same love of politics like she does.
            </p>
            <Image
              src="/task_flow_npr.webp"
              alt="Task flow"
              width={800}
              height={500}
              className="rounded-lg shadow-sm w-full h-auto border border-zinc-100"
            />
          </div>
        )}

        {active === "Design" && (
          <div>
            <h4 className="text-base font-semibold text-[#003F88] mb-3">Sketches / Sitemap</h4>
            <p className="text-zinc-800 leading-relaxed mb-4">
              Now that I created my task flow, I began to work on the sketches for the app. Since this app does not have a profile page, I had to create one myself. I researched what other applications that had profiles and customization pages to get a sense of where and how it was placed. I found that they placed their "profile" either on the top right of their app or as another tab. I found on research it would be easier to add a profile tab at the bottom.
            </p>
            <p className="text-zinc-800 leading-relaxed mb-4">
              This was still early in the design stage where I just placed my ideas on paper and would then have multiple revisions after.
            </p>
            <p className="text-zinc-800 leading-relaxed mb-4">
              I also created the first draft of how I imagined my sitemap would look like for adding this new feature within.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <Image src="/sitemap_npr.webp" alt="Sitemap" width={800} height={500} className="rounded-lg shadow-sm w-full h-auto border border-zinc-100" />
              <Image src="/sketches_npr.webp" alt="Sketches" width={800} height={500} className="rounded-lg shadow-sm w-full h-auto border border-zinc-100" />
            </div>

            <h4 className="text-base font-semibold text-[#003F88] mb-3">Wireframes</h4>
            <p className="text-zinc-800 leading-relaxed mb-4">
              Once the first sketches were up I started to put the sketches to the digital screen. These were my initial wireframes before I began to test them.
            </p>
            <p className="text-zinc-800 leading-relaxed mb-4">
              The challenge of creating these wireframes as a whole for the team was redesigning the homepage. We didn't want to change too much for the users who already have the app. So we did not want to focus too much on that. The design for my added feature took a few times before I received feedback from others that suited the needs best.
            </p>
            <ImageCarousel
              slides={[
                { src: "/wireframe2_npr.webp", alt: "Wireframe — second version" },
                { src: "/wireframe1_npr.webp", alt: "Wireframe — first version" },
              ]}
            />
          </div>
        )}

        {active === "Deliver" && (
          <div>
            <h4 className="text-base font-semibold text-[#003F88] mb-3">Testing</h4>
            <p className="text-zinc-800 leading-relaxed mb-4">
              After making some changes, I tested the tasks with a few users to ensure a variety of feedback. In conclusion, I found that users did not face significant challenges or confusion when completing their assigned tasks. They appreciated being asked about their interests first, as it made selecting a community easier for them. Overall, they enjoyed the new feature I added to the app and indicated they would use it more if it were theoretically implemented.
            </p>
            <Image
              src="/delivery_npr.webp"
              alt="Usability testing"
              width={800}
              height={500}
              className="rounded-lg shadow-sm w-full h-auto border border-zinc-100"
            />
          </div>
        )}

        {/* Prev / Next */}
        {(() => {
          const idx = STEPS.indexOf(active);
          const prev = STEPS[idx - 1];
          const next = STEPS[idx + 1];
          return (
            <div className="flex flex-wrap gap-3 justify-between mt-10 pt-6 border-t border-[#C3DBFD]">
              <button
                onClick={() => prev && goTo(prev)}
                disabled={!prev}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium border border-[#5A77D8] text-[#5A77D8] hover:bg-[#C3DBFD]/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span>←</span>
                {prev && <span>{prev}</span>}
              </button>
              <button
                onClick={() => next && goTo(next)}
                disabled={!next}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium border border-[#FF5DB6] text-[#FF5DB6] hover:bg-[#FFC0DB]/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {next && <span>{next}</span>}
                <span>→</span>
              </button>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
