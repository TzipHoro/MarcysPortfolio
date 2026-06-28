import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";
import ImageCarousel from "../../components/ImageCarousel";
import DesignProcess from "../../components/DesignProcess";
import ProjectTemplate, { type ProjectData } from "../../components/ProjectTemplate";

const OTHER_PROJECTS: Record<string, ProjectData> = {
  nasaa: {
    title: "Nasaa — Travel Planning App",
    subtitle: "UX Research & Product Design | In Progress",
    duration: "In progress",
    team: "[ Placeholder ]",
    role: "Product/UX Research & Design",
    about: "[ Placeholder — describe what Nasaa is and what problem it solves. ]",
    goals: [
      "[ Placeholder — goal 1 ]",
      "[ Placeholder — goal 2 ]",
      "[ Placeholder — goal 3 ]",
    ],
    discover: {
      research: "[ Placeholder — describe competitor research and secondary research. ]",
      interviews: "[ Placeholder — describe target audience and interview approach. ]",
      discoveryFindings: [
        "[ Placeholder — key finding 1 ]",
        "[ Placeholder — key finding 2 ]",
        "[ Placeholder — key finding 3 ]",
      ],
    },
    define: {
      affinityMap: "[ Placeholder — describe affinity mapping process. ]",
      persona: "[ Placeholder — describe the primary persona. ]",
    },
    ideate: {
      journeyMap: "[ Placeholder — describe the user journey map. ]",
      jtbd: "",
      mvp: "[ Placeholder — describe MVP scope and priorities. ]",
      taskFlow: "[ Placeholder — describe the task flow. ]",
    },
    design: {
      sketches: "[ Placeholder — describe sketching and sitemap process. ]",
      wireframes: "[ Placeholder — describe wireframe iterations. ]",
    },
    deliver: {
      testing: "[ Placeholder — describe usability testing and findings. ]",
    },
    reflection: "[ Placeholder — describe outcome and lessons learned. ]",
  },

  "loop-me-in": {
    title: "Loop Me In — UX Case Study",
    subtitle: "UX Research | 4 Weeks | Solo",
    duration: "4 weeks",
    team: "Solo",
    role: "UX Researcher",
    about: "[ Placeholder — describe the Loop Me In app and research goals. ]",
    goals: [
      "[ Placeholder — goal 1 ]",
      "[ Placeholder — goal 2 ]",
    ],
    discover: {
      research: "[ Placeholder — describe secondary research and competitor analysis. ]",
      interviews: "[ Placeholder — describe target audience and interview approach. ]",
      discoveryFindings: [
        "[ Placeholder — key finding 1 ]",
        "[ Placeholder — key finding 2 ]",
        "[ Placeholder — key finding 3 ]",
      ],
    },
    define: {
      affinityMap: "[ Placeholder — describe affinity mapping process. ]",
      persona: "[ Placeholder — describe the primary persona. ]",
    },
    ideate: {
      journeyMap: "[ Placeholder — describe the user journey map. ]",
      jtbd: "",
      mvp: "[ Placeholder — describe MVP scope. ]",
      taskFlow: "[ Placeholder — describe the task flow. ]",
    },
    design: {
      sketches: "[ Placeholder — describe sketches and sitemap. ]",
      wireframes: "[ Placeholder — describe wireframe iterations. ]",
    },
    deliver: {
      testing: "[ Placeholder — describe usability testing and results. ]",
    },
    reflection: "[ Placeholder — describe outcome and lessons learned. ]",
  },

  "hr-nexus": {
    title: "HR Nexus — HR Advisory Platform",
    subtitle: "Product Design & UX Research | In Progress",
    duration: "In progress",
    team: "[ Placeholder ]",
    role: "Product Design / UX Research",
    about: "[ Placeholder — describe what HR Nexus is and what problem it solves. ]",
    goals: [
      "[ Placeholder — goal 1 ]",
      "[ Placeholder — goal 2 ]",
    ],
    discover: {
      research: "[ Placeholder — describe research approach. ]",
      interviews: "[ Placeholder — describe target audience and interviews. ]",
      discoveryFindings: [
        "[ Placeholder — key finding 1 ]",
        "[ Placeholder — key finding 2 ]",
      ],
    },
    define: {
      affinityMap: "[ Placeholder — describe affinity mapping. ]",
      persona: "[ Placeholder — describe the primary persona. ]",
    },
    ideate: {
      journeyMap: "[ Placeholder — describe the journey map. ]",
      jtbd: "",
      mvp: "[ Placeholder — describe MVP scope. ]",
      taskFlow: "[ Placeholder — describe the task flow. ]",
    },
    design: {
      sketches: "[ Placeholder — describe sketches and sitemap. ]",
      wireframes: "[ Placeholder — describe wireframes. ]",
    },
    deliver: {
      testing: "[ Placeholder — describe testing and findings. ]",
    },
    reflection: "[ Placeholder — describe outcome and next steps. ]",
  },
};

function NprPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-[#5A77D8] hover:text-[#003F88] transition-colors font-medium">← Back</Link>

        <h1 className="text-4xl font-bold text-[#003F88] mt-6 mb-8">NPR News — UX Case Study</h1>

        {/* Hero: mockup + prototype button */}
        <div className="flex max-md:flex-col flex-row items-center gap-10 mb-12 bg-[#C3DBFD]/20 border border-[#C3DBFD] rounded-2xl p-8">
          <div className="shrink-0">
            <Image
              src="/Phone+Mockup.webp"
              alt="NPR News prototype phone mockup"
              width={200}
              height={400}
              className="rounded-xl shadow-lg object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 max-md:items-center items-start max-md:text-center text-left">
            <p className="text-lg text-zinc-700 leading-relaxed">
              See the interactive prototype for this NPR News community feature — built in Figma after 8 weeks of research, testing, and iteration.
            </p>
            <a
              href="https://figma.com/proto/KNA9xH2bFs2w2XhHi7D3jb/Untitled?mode=design&node-id=6-7764&page-id=0%3A1&scaling=min-zoom&show-proto-sidebar=1&starting-point-node-id=6%3A7764&t=BYg5oXA3TMiaZmr5-1&type=design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full bg-[#5A77D8] text-white font-medium hover:bg-[#003F88] transition-colors text-center"
            >
              View the Prototype
            </a>
          </div>
        </div>

        {/* Project Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#003F88] mb-4">Project Details</h2>
          <p className="text-zinc-700 mb-1"><strong>UX Case Study | 8 Weeks</strong></p>
          <p className="text-zinc-700 mb-1"><strong>My Team:</strong> Marcella, Emily, Kate, Shelly</p>
          <p className="text-zinc-700 mb-4"><strong>My Role:</strong> UX Researcher and Designer</p>
          <p className="text-zinc-700 leading-relaxed">
            This was a student project I completed for school and is not a current feature for NPR News, but maybe one day it can be. The objective of this project was to find out <em>How might we provide users with news relevant to their wants and gain their trust?</em> My team wanted to uncover what users were lacking and what they wanted more out of their news applications. Once I discovered through research and insights, I designed a new feature that allowed the users to join a community that followed their common interests.
          </p>
        </section>

        {/* About NPR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#003F88] mb-3">About NPR News</h2>
          <p className="text-zinc-700 leading-relaxed">
            NPR is an independent, nonprofit media organization that focuses on making local stories national, national stories local, and global stories personal.
          </p>
        </section>

        {/* Goals */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#003F88] mb-3">Goals</h2>
          <ul className="list-disc pl-6 text-zinc-800 space-y-2">
            <li>Create a new feature that would make users want to visit NPR News as their daily source</li>
            <li>Design in a way that would not be difficult to do given any demographic</li>
          </ul>
        </section>

        <DesignProcess />

        {/* Outcome / Reflection */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#003F88] mb-3">Outcome &amp; Reflection</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Overall, I'm very pleased with the outcome of this project. It's gratifying to know that users enjoyed the features and expressed interest in having them integrated into this app and potentially others. This feedback indicates that my research and understanding of user needs were on target. Working on a widely-used app has been a valuable experience, teaching me how to enhance the user experience for both new and existing users.
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            However, the focus on "personalization" presented a challenge. I had to carefully develop ideas that would resonate with users while also addressing the core question: "How can we deliver news that meets users' interests and builds their trust?"
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Ultimately, creating user communities enabled individuals to trust articles shared by others with similar interests. Additionally, allowing users to select preferred topics before presenting a wide range of group options made the news more relevant and engaging.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            There is still more I'd like to explore, such as refining the UI design, which I didn't have time to complete during this project.
          </p>
        </section>

        {/* Bottom prototype link */}
        <div className="mt-10 pt-8 border-t border-zinc-200">
          <a
            href="https://figma.com/proto/KNA9xH2bFs2w2XhHi7D3jb/Untitled?mode=design&node-id=6-7764&page-id=0%3A1&scaling=min-zoom&show-proto-sidebar=1&starting-point-node-id=6%3A7764&t=BYg5oXA3TMiaZmr5-1&type=design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full bg-[#5A77D8] text-white font-medium hover:bg-[#003F88] transition-colors text-center"
          >
            View the Prototype
          </a>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "npr-news") {
    return <NprPage />;
  }

  const project = OTHER_PROJECTS[slug];

  if (project) {
    return <ProjectTemplate data={project} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
        <p className="text-zinc-700 mb-6">No project matches the requested page.</p>
        <Link href="/" className="text-[#5A77D8] hover:text-[#003F88]">← Back to home</Link>
        </div>
      </div>
    );
}
