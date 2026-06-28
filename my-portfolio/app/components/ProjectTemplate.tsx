"use client";

import Link from "next/link";
import Nav from "./Nav";

export interface ProjectData {
  title: string;
  subtitle: string;
  duration: string;
  team: string;
  role: string;
  prototypeUrl?: string;
  about: string;
  goals: string[];
  discover: {
    research: string;
    interviews: string;
    discoveryFindings: string[];
  };
  define: {
    affinityMap: string;
    persona: string;
  };
  ideate: {
    journeyMap: string;
    jtbd: string;
    mvp: string;
    taskFlow: string;
  };
  design: {
    sketches: string;
    wireframes: string;
  };
  deliver: {
    testing: string;
  };
  reflection: string;
}

const PLACEHOLDER = "[ Content coming soon — check back for updates. ]";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-[#003F88] mb-3">{title}</h2>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base font-semibold text-[#003F88] mb-2">{children}</h4>;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-zinc-700 leading-relaxed ${className}`}>{children}</p>;
}

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="w-full rounded-lg border-2 border-dashed border-[#C3DBFD] bg-[#C3DBFD]/10 flex items-center justify-center py-16 mb-6 text-[#5A77D8] text-sm font-medium">
      [ {label} — image placeholder ]
    </div>
  );
}

function StepTabs({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const steps = ["Discover", "Define", "Ideate", "Design", "Deliver"];
  return (
    <div className="flex flex-wrap gap-2 mb-8 items-center">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <button
            onClick={() => setActive(step)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === step
                ? "bg-[#5A77D8] text-white"
                : "bg-[#C3DBFD]/40 text-[#003F88] hover:bg-[#C3DBFD]"
            }`}
          >
            {step}
          </button>
          {i < steps.length - 1 && <span className="text-zinc-400 select-none">→</span>}
        </span>
      ))}
    </div>
  );
}

import { useState, useRef } from "react";

const STEPS = ["Discover", "Define", "Ideate", "Design", "Deliver"] as const;
type Step = (typeof STEPS)[number];

function DesignProcessPlaceholder({ data }: { data: ProjectData }) {
  const [active, setActive] = useState<Step>("Discover");
  const panelRef = useRef<HTMLDivElement>(null);

  function goTo(step: Step) {
    setActive(step);
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  const idx = STEPS.indexOf(active);
  const prev = STEPS[idx - 1];
  const next = STEPS[idx + 1];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-[#003F88] mb-6">Design Process</h2>

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
            {i < STEPS.length - 1 && <span className="text-zinc-400 select-none">→</span>}
          </span>
        ))}
      </div>

      <div ref={panelRef} className="border-t border-[#C3DBFD] pt-6 scroll-mt-24">

        {active === "Discover" && (
          <div>
            <SubHeading>Research</SubHeading>
            <Body className="mb-6">{data.discover.research || PLACEHOLDER}</Body>

            <SubHeading>Interviews</SubHeading>
            <Body className="mb-4">{data.discover.interviews || PLACEHOLDER}</Body>

            <SubHeading>Discovery from Interviews</SubHeading>
            {data.discover.discoveryFindings.length > 0 ? (
              <ul className="list-disc pl-6 text-zinc-700 space-y-2">
                {data.discover.discoveryFindings.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            ) : (
              <Body>{PLACEHOLDER}</Body>
            )}
          </div>
        )}

        {active === "Define" && (
          <div>
            <SubHeading>Affinity Map</SubHeading>
            <Body className="mb-6">{data.define.affinityMap || PLACEHOLDER}</Body>
            <PlaceholderImage label="Affinity map" />

            <SubHeading>Persona</SubHeading>
            <Body className="mb-4">{data.define.persona || PLACEHOLDER}</Body>
            <PlaceholderImage label="Persona" />
          </div>
        )}

        {active === "Ideate" && (
          <div>
            <SubHeading>User Journey Map</SubHeading>
            <PlaceholderImage label="User journey map" />
            <Body className="mb-4">{data.ideate.journeyMap || PLACEHOLDER}</Body>
            {data.ideate.jtbd && (
              <blockquote className="border-l-4 border-[#FF5DB6] pl-4 py-2 mb-8 text-zinc-700 italic">
                <strong>My Job To Be Done:</strong> {data.ideate.jtbd}
              </blockquote>
            )}

            <SubHeading>MVP (Minimal Viable Product)</SubHeading>
            <Body className="mb-4">{data.ideate.mvp || PLACEHOLDER}</Body>
            <PlaceholderImage label="MVP" />

            <SubHeading>Task Flow</SubHeading>
            <Body className="mb-4">{data.ideate.taskFlow || PLACEHOLDER}</Body>
            <PlaceholderImage label="Task flow" />
          </div>
        )}

        {active === "Design" && (
          <div>
            <SubHeading>Sketches / Sitemap</SubHeading>
            <Body className="mb-4">{data.design.sketches || PLACEHOLDER}</Body>
            <PlaceholderImage label="Sitemap" />
            <PlaceholderImage label="Sketches" />

            <SubHeading>Wireframes</SubHeading>
            <Body className="mb-4">{data.design.wireframes || PLACEHOLDER}</Body>
            <PlaceholderImage label="Wireframes" />
          </div>
        )}

        {active === "Deliver" && (
          <div>
            <SubHeading>Testing</SubHeading>
            <Body className="mb-4">{data.deliver.testing || PLACEHOLDER}</Body>
            <PlaceholderImage label="Testing / delivery" />
          </div>
        )}

        {/* Prev / Next */}
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
      </div>
    </section>
  );
}

export default function ProjectTemplate({ data }: { data: ProjectData }) {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-[#5A77D8] hover:text-[#003F88] transition-colors font-medium">← Back</Link>

        <h1 className="text-4xl font-bold text-[#003F88] mt-6 mb-8">{data.title}</h1>

        {/* Hero card */}
        <div className="flex max-md:flex-col flex-row items-center gap-10 mb-12 bg-[#C3DBFD]/20 border border-[#C3DBFD] rounded-2xl p-8">
          <div className="shrink-0 w-[200px] max-md:w-full">
            <PlaceholderImage label="Phone / hero mockup" />
          </div>
          <div className="flex flex-col gap-4 max-md:items-center items-start max-md:text-center text-left">
            <p className="text-lg text-zinc-700 leading-relaxed">{data.subtitle}</p>
            {data.prototypeUrl ? (
              <a
                href={data.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full bg-[#5A77D8] text-white font-medium hover:bg-[#003F88] transition-colors text-center"
              >
                View the Prototype
              </a>
            ) : (
              <span className="inline-block px-7 py-3 rounded-full bg-[#C3DBFD]/50 text-[#5A77D8] font-medium text-center text-sm">
                Prototype coming soon
              </span>
            )}
          </div>
        </div>

        {/* Project Details */}
        <Section title="Project Details">
          <p className="text-zinc-700 mb-1"><strong>{data.subtitle}</strong></p>
          <p className="text-zinc-700 mb-1"><strong>My Team:</strong> {data.team}</p>
          <p className="text-zinc-700 mb-4"><strong>My Role:</strong> {data.role}</p>
        </Section>

        {/* About */}
        <Section title={`About ${data.title.split("—")[0].trim()}`}>
          <Body>{data.about || PLACEHOLDER}</Body>
        </Section>

        {/* Goals */}
        <Section title="Goals">
          <ul className="list-disc pl-6 text-zinc-700 space-y-2">
            {data.goals.length > 0
              ? data.goals.map((g, i) => <li key={i}>{g}</li>)
              : <li>{PLACEHOLDER}</li>}
          </ul>
        </Section>

        {/* Design Process */}
        <DesignProcessPlaceholder data={data} />

        {/* Reflection */}
        <Section title="Outcome & Reflection">
          <Body>{data.reflection || PLACEHOLDER}</Body>
        </Section>

        {/* Bottom prototype link */}
        <div className="mt-10 pt-8 border-t border-[#C3DBFD]">
          {data.prototypeUrl ? (
            <a
              href={data.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full bg-[#5A77D8] text-white font-medium hover:bg-[#003F88] transition-colors text-center"
            >
              View the Prototype
            </a>
          ) : (
            <span className="inline-block px-7 py-3 rounded-full bg-[#C3DBFD]/50 text-[#5A77D8] font-medium text-center text-sm">
              Prototype coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
