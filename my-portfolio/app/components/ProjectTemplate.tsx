"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export interface ProjectData {
  title: string;
  subtitle: string;
  duration: string;
  team: string;
  role: string;
  prototypeUrl?: string;
  heroImage?: string;
  problemStatements?: string[];
  intro?: string;
  researchNote?: string;
  methods?: string;
  tools?: string;
  whyReasons?: { label: string; description: string }[];
  about: string;
  goals: string[];
  discover: {
    problemStatement?: string;
    research: string;
    competitiveAnalysisImage?: string;
    competitiveInsights?: string[];
    competitors?: { name: string; strengths: string[]; weaknesses: string[] }[];
    interviews: string;
    userQuote?: string;
    userQuoteAuthor?: string;
    screeningQuestions?: string[];
    interviewStats?: string[];
    surveyStats?: string[];
    participants?: { name: string; age: number; gender: string; job: string; location: string; status: string }[];
    discoveryFindings: string[];
  };
  define: {
    affinityMap: string;
    persona: string;
    personaImage?: string;
    personaImage2?: string;
    firstImpressions?: string[];
    scenarios?: { title: string; description: string; tasks: string[]; results?: string[][]; taskTimes?: string[] }[];
    findings?: string[];
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
  steps?: ("Discover" | "Define" | "Ideate" | "Design" | "Deliver")[];
  deliver: {
    uiKit?: string;
    hifi?: string;
    testing: string;
    recommendations?: string[];
    takeaways?: string[];
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

const ALL_STEPS = ["Discover", "Define", "Ideate", "Design", "Deliver"] as const;
type Step = (typeof ALL_STEPS)[number];

function DesignProcessPlaceholder({ data }: { data: ProjectData }) {
  const STEPS = (data.steps ?? ALL_STEPS) as Step[];
  const [active, setActive] = useState<Step>(STEPS[0]);
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
            {data.discover.problemStatement && (
              <>
                <SubHeading>Problem Statement</SubHeading>
                <blockquote className="border-l-4 border-[#FF5DB6] pl-4 py-2 mb-8 text-zinc-700 italic">
                  {data.discover.problemStatement}
                </blockquote>
              </>
            )}

            <SubHeading>Research</SubHeading>
            <Body className="mb-4">{data.discover.research || PLACEHOLDER}</Body>

            {(data.discover.competitiveAnalysisImage || (data.discover.competitiveInsights && data.discover.competitiveInsights.length > 0)) && (
              <>
                {data.discover.competitiveAnalysisImage ? (
                  <Image src={data.discover.competitiveAnalysisImage} alt="Competitive analysis" width={900} height={600} className="rounded-xl shadow-md w-full object-contain mb-6" />
                ) : (
                  <PlaceholderImage label="Competitive analysis" />
                )}
                {data.discover.competitiveInsights && data.discover.competitiveInsights.length > 0 && (
                  <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-8">
                    {data.discover.competitiveInsights.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                )}
              </>
            )}

            {data.discover.competitors && data.discover.competitors.length > 0 && (
              <>
                <SubHeading>Competitor Breakdown</SubHeading>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {data.discover.competitors.map((c, i) => (
                    <div key={i} className="rounded-2xl bg-[#EEF4FF] border border-[#C3DBFD] p-5">
                      <p className="text-[#003F88] font-semibold text-base mb-3">{c.name}</p>
                      <p className="text-xs font-semibold text-green-700 uppercase mb-1">Strengths</p>
                      <ul className="list-disc pl-4 text-zinc-600 text-sm space-y-1 mb-3">
                        {c.strengths.map((s, si) => <li key={si}>{s}</li>)}
                      </ul>
                      <p className="text-xs font-semibold text-red-600 uppercase mb-1">Weaknesses</p>
                      <ul className="list-disc pl-4 text-zinc-600 text-sm space-y-1">
                        {c.weaknesses.map((w, wi) => <li key={wi}>{w}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            <SubHeading>Survey & User Interviews</SubHeading>
            <Body className="mb-4">{data.discover.interviews || PLACEHOLDER}</Body>

            {data.discover.screeningQuestions && data.discover.screeningQuestions.length > 0 && (
              <>
                <SubHeading>Screening Questions</SubHeading>
                <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-8">
                  {data.discover.screeningQuestions.map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </>
            )}

            {data.discover.participants && data.discover.participants.length > 0 && (
              <>
                <SubHeading>User Demographics</SubHeading>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {data.discover.participants.map((p, i) => (
                    <div key={i} className="rounded-2xl bg-[#EEF4FF] border border-[#C3DBFD] p-5">
                      <p className="text-[#003F88] font-semibold text-base mb-3">{p.name}</p>
                      <p className="text-zinc-600 text-sm mb-1"><span className="font-medium">Age:</span> {p.age}</p>
                      <p className="text-zinc-600 text-sm mb-1"><span className="font-medium">Gender:</span> {p.gender}</p>
                      <p className="text-zinc-600 text-sm mb-1"><span className="font-medium">Job:</span> {p.job}</p>
                      <p className="text-zinc-600 text-sm mb-1"><span className="font-medium">Location:</span> {p.location}</p>
                      <p className="text-zinc-600 text-sm"><span className="font-medium">Status:</span> {p.status}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {data.discover.userQuote && (
              <blockquote className="border-l-4 border-[#FF5DB6] pl-4 py-2 mb-8 text-zinc-700 italic">
                "{data.discover.userQuote}"
                {data.discover.userQuoteAuthor && <footer className="mt-1 text-sm font-semibold not-italic text-[#003F88]">— {data.discover.userQuoteAuthor}</footer>}
              </blockquote>
            )}

            {data.discover.interviewStats && data.discover.interviewStats.length > 0 && (
              <>
                <SubHeading>One-on-One User Interview Insights</SubHeading>
                <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-8">
                  {data.discover.interviewStats.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </>
            )}

            {data.discover.surveyStats && data.discover.surveyStats.length > 0 && (
              <>
                <SubHeading>Survey Insights</SubHeading>
                <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-8">
                  {data.discover.surveyStats.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </>
            )}

            {data.discover.discoveryFindings.length > 0 && (
              <>
                <SubHeading>Discovery from Interviews</SubHeading>
                <ul className="list-disc pl-6 text-zinc-700 space-y-2">
                  {data.discover.discoveryFindings.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </>
            )}
          </div>
        )}

        {active === "Define" && (
          <div>
            {data.define.firstImpressions ? (
              <>
                <SubHeading>First Impressions</SubHeading>
                <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-8">
                  {data.define.firstImpressions.map((f, i) => <li key={i}>{f}</li>)}
                </ul>

                {data.define.scenarios && data.define.scenarios.map((scenario, si) => (
                  <div key={si} className="mb-10">
                    <SubHeading>{scenario.title}</SubHeading>
                    <Body className="mb-4">{scenario.description}</Body>
                    <ul className="list-disc pl-6 text-zinc-700 space-y-1 mb-6">
                      {scenario.tasks.map((t, ti) => <li key={ti}>{t}</li>)}
                    </ul>

                    {scenario.results && (
                      <div className="mb-4 overflow-x-auto">
                        <table className="w-full text-sm text-center border-collapse">
                          <thead>
                            <tr className="bg-[#EEF4FF]">
                              <th className="border border-[#C3DBFD] px-4 py-2 text-left text-[#003F88]"></th>
                              {scenario.tasks.map((_, ti) => (
                                <th key={ti} className="border border-[#C3DBFD] px-4 py-2 text-[#003F88]">Task {ti + 1}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {scenario.results.map((row, ri) => (
                              <tr key={ri} className="even:bg-[#F8FAFF]">
                                <td className="border border-[#C3DBFD] px-4 py-2 text-left font-medium text-zinc-700">User {ri + 1}</td>
                                {row.map((cell, ci) => (
                                  <td key={ci} className={`border border-[#C3DBFD] px-4 py-2 font-semibold ${cell === "✓" ? "text-green-600" : "text-amber-500"}`}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {scenario.taskTimes && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                        {scenario.taskTimes.map((time, ti) => (
                          <div key={ti} className="rounded-2xl bg-[#EEF4FF] border border-[#C3DBFD] p-4 text-center">
                            <p className="text-[#003F88] font-semibold text-sm mb-1">Task {ti + 1}</p>
                            <p className="text-zinc-600 text-sm">{time}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {data.define.findings && data.define.findings.length > 0 && (
                  <>
                    <SubHeading>What I Learned</SubHeading>
                    <ul className="list-disc pl-6 text-zinc-700 space-y-2">
                      {data.define.findings.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <>
                <SubHeading>Affinity Map</SubHeading>
                <Body className="mb-6">{data.define.affinityMap || PLACEHOLDER}</Body>
                <PlaceholderImage label="Affinity map" />

                <SubHeading>Persona</SubHeading>
                {data.define.persona && <Body className="mb-4">{data.define.persona}</Body>}
                {data.define.personaImage ? (
                  <Image src={data.define.personaImage} alt="User persona" width={900} height={600} className="rounded-xl shadow-md w-full object-contain mb-4" />
                ) : (
                  <PlaceholderImage label="Persona" />
                )}
                {data.define.personaImage2 && (
                  <Image src={data.define.personaImage2} alt="User persona 2" width={900} height={600} className="rounded-xl shadow-md w-full object-contain" />
                )}
              </>
            )}
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
            {data.deliver.uiKit && (
              <>
                <SubHeading>UI Kit</SubHeading>
                <Body className="mb-4">{data.deliver.uiKit}</Body>
                <PlaceholderImage label="UI kit" />
              </>
            )}

            {data.deliver.hifi && (
              <>
                <SubHeading>Hi-Fi Prototype</SubHeading>
                <Body className="mb-4">{data.deliver.hifi}</Body>
                <PlaceholderImage label="Hi-fi screens" />
              </>
            )}

            {data.deliver.recommendations ? (
              <>
                <SubHeading>Recommendations</SubHeading>
                <ul className="list-disc pl-6 text-zinc-700 space-y-2 mb-8">
                  {data.deliver.recommendations.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
                {data.deliver.takeaways && (
                  <>
                    <SubHeading>Takeaways</SubHeading>
                    <ul className="list-disc pl-6 text-zinc-700 space-y-2">
                      {data.deliver.takeaways.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <>
                <SubHeading>Testing</SubHeading>
                <Body className="mb-4">{data.deliver.testing || PLACEHOLDER}</Body>
                <PlaceholderImage label="Testing / delivery" />
              </>
            )}
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
          <div className="shrink-0">
            {data.heroImage ? (
              <Image
                src={data.heroImage}
                alt={`${data.title} mockup`}
                width={200}
                height={400}
                className="rounded-xl shadow-lg object-contain"
              />
            ) : (
              <div className="w-[200px]"><PlaceholderImage label="Phone / hero mockup" /></div>
            )}
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
          {data.methods && <p className="text-zinc-700 mb-1"><strong>Methods:</strong> {data.methods}</p>}
          {data.tools && <p className="text-zinc-700 mb-4"><strong>Tools:</strong> {data.tools}</p>}
          {data.intro && <Body>{data.intro}</Body>}
          {data.researchNote && (
            <p className="mt-3 text-sm text-zinc-500 italic">{data.researchNote}</p>
          )}
        </Section>

        {/* About */}
        <Section title={`About ${data.title.split("—")[0].trim()}`}>
          <Body>{data.about || PLACEHOLDER}</Body>
        </Section>

        {/* Problem Statements */}
        {data.problemStatements && data.problemStatements.length > 0 && (
          <Section title="Problem Statements">
            <ul className="list-disc pl-6 text-zinc-700 space-y-2">
              {data.problemStatements.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </Section>
        )}

        {/* Why this project */}
        {data.whyReasons && data.whyReasons.length > 0 && (
          <Section title="Why Loop?">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.whyReasons.map((r, i) => (
                <div key={i} className="rounded-2xl bg-[#EEF4FF] border border-[#C3DBFD] p-5 text-center">
                  <p className="text-[#003F88] font-semibold text-base mb-1">{r.label}</p>
                  <p className="text-zinc-600 text-sm">{r.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

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
