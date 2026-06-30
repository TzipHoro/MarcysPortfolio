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
    subtitle: "UX Case Study | 2 Weeks",
    duration: "2 weeks",
    team: "Myself",
    role: "UX Researcher and UI Designer",
    methods: "Usability Testing, Prototyping, Heuristic Evaluation, Competitive Analysis",
    tools: "Figma, Miro, Airtable",
    heroImage: "/nasaa-mockup.png.jpg",
    about: "Nasaa is a travel assistant app that helps users alleviate the pains and frustrations that come along with planning a trip.",
    intro: "As a remote worker myself I like to travel with friends, but it isn't always so easy to do so. It takes a lot of time to do the research about where to go. The next stage of planning an itinerary can be even more daunting since we all work full time. The idea of the app is to help reduce the frustrations and pain remote workers have while planning a trip. It is user friendly, shareable, and easy to navigate.",
    problemStatements: [
      "How might we make planning more enjoyable?",
      "How might we remove the time-consuming planning?",
      "How might we get remote workers to figure out where to go?",
      "How might we make it shareable amongst friends?",
      "How might we remove the multiple steps to plan?",
      "How might we increase the interest of travel planning?",
      "How might we change the way people plan their trips?",
      "How might we fix the problem of remote working in a different time zone?",
      "How might we organize all of our travel information?",
    ],
    goals: [
      "Understand the pain points of travelers and their needs when planning trips — identify the challenges and frustrations users face when booking travel, navigating destinations, and managing itineraries.",
      "Assess the usability and user experience of the travel app — evaluate how easy it is for users to search for flights, accommodations, and activities, as well as how intuitive the app is in guiding them through the travel planning process.",
    ],
    discover: {
      problemStatement: "How might we help users efficiently plan their trips while saving time and reducing the stress of research, making our app the go-to tool for seamless travel planning?",
      research: "To better understand the travel app market, I conducted a competitive analysis of both established and emerging platforms. I focused on their features, user experiences, and design strategies to identify opportunities for improvement. The goal was to understand how these apps tackle trip planning challenges and uncover users' pain points, which informed the development of my own app.",
      competitors: [
        {
          name: "TripIt",
          strengths: ["Multiple languages", "Consolidates confirmations into one itinerary", "Recommends places nearby"],
          weaknesses: ["Costly to access more features", "Lots of unnecessary emails and alerts"],
        },
        {
          name: "Wanderlog",
          strengths: ["Has lots of users", "UI is clean and easy to use", "Shows suggestions based on things you've reviewed"],
          weaknesses: ["Not offered in multiple languages"],
        },
        {
          name: "Rome2rio",
          strengths: ["Multiple languages", "No sign in required", "Free to use"],
          weaknesses: ["Not an all-inclusive app — requires another app to finish processing your trip", "Does not allow a multiple destination option"],
        },
      ],
      interviews: "I conducted 3 in-depth user interviews ranging in age and gender, and distributed a survey that received 16 responses. My goal was to uncover specific pain points, preferences, and overall approaches to travel planning among both frequent and occasional travelers.",
      userQuote: "The Caribbean was nice because it was planned more carefully. Time was not being wasted.",
      userQuoteAuthor: "Samantha Spector, Interview Participant",
      interviewStats: [
        "100% of users felt that trip planning takes too long.",
        "100% of users like when others help plan their trips.",
        "50% of users like having a jam-packed day.",
        "33% of users use a travel app to organize their trips.",
        "33% of users book trips themselves or through a travel agent.",
      ],
      surveyStats: [
        "Surveyed 16 users ranging in age and gender.",
        "50% travel every few months.",
        "50% don't like planning the itinerary.",
        "63% do not use an app and rely on general search.",
        "75% say the biggest challenge is the time consumed planning the trip.",
      ],
      discoveryFindings: [
        "Most people travel for pleasure with either friends or family.",
        "Results show mixed reviews regarding their interests and enjoyment of the planning process.",
        "Uncovered frustrations with planning due to time zone differences, it being time-consuming, budgeting with others, need for a working area, and deciding where to go.",
      ],
    },
    define: {
      personaImage: "/nasaa-persona.png",
      personaImage2: "/nasaa-persona-2.png",
      affinityMap: "After gathering insights from the interviews, I moved on to affinity mapping. I worked through a couple of drafts to break everything down into key categories, making the findings clearer and more actionable. This process helped identify the main themes and guided the next steps.",
      persona: "",
    },
    ideate: {
      journeyMap: "",
      jtbd: "When travelers are planning a trip, they want to collaborate easily with a travel agent through the app, so they can save time and reduce the stress of managing all the trip details themselves.",
      mvp: "Based on the feedback received, the MVP for the travel app will focus on helping travelers work with a travel agent to plan their trips. The app will make it easy to talk to agents, get personalized travel ideas, and book everything in one place. It will also let users choose their preferences for things like destination, budget, and activities to make planning easier.",
      taskFlow: "",
    },
    design: {
      sketches: "The challenge is to design an app that includes a feature for travelers to collaborate with a travel agent, ensuring it's easy to use and intuitive. I've created a basic sitemap to outline the structure, with new screens (highlighted in red) for this feature.\n\nI also made a few quick sketches to capture some initial ideas and notes. These sketches were more about getting the concept down quickly rather than focusing on details. They help visualize my thoughts and serve as a foundation for refining the design later.",
      wireframes: "[ Placeholder ]",
    },
    deliver: {
      uiKit: "For the creation of my new app, I developed a UI kit, carefully selecting the typography and colors based on insights and research related to travel. I also ensured that the design aligns with the brand image I want to project — an app that feels classy and refined.",
      hifi: "After finalizing the initial design elements, I focused on completing the screens necessary for my app's core feature — connecting users with a travel agent. I made sure the key screens were intuitive and aligned with the brand's aesthetic. Once the design was in place, I created an interactive prototype of a user task to test its usability and identify areas that could be improved.\n\nTask: Login and choose an agent to your liking.",
      testing: "I conducted user testing with a small group of users, and the majority were able to complete the task without any issues. They found the process of connecting with a travel agent intuitive and straightforward. However, one user suggested adding a button on the homepage to more prominently showcase the option to connect with an agent. Based on this feedback, I made the adjustment and added a clear button on the homepage. This change highlighted the importance of user testing and how valuable real-time feedback is in refining the design to meet user expectations.",
    },
    reflection: "Going through my notes from the interviews and the surveys I conducted, I found several common problems encountered by would-be travelers. I am convinced that this is a worthwhile concept and this app will make it become a reality with a fair amount of further research and time.",
  },

  "loop-me-in": {
    title: "Loop Me In — UX Case Study",
    subtitle: "UX Case Study | 4 Weeks",
    duration: "4 weeks",
    team: "Myself",
    role: "UX Researcher",
    heroImage: "/loop-mockup.png",
    researchNote: "Note: This research was conducted approximately two years ago. The app has continued to evolve since then, so some findings may not reflect its current state.",
    intro:
      "This project was undertaken as part of my coursework. Although the app is still actively in use, the research for this project is based on feedback from current users. The primary objective was to evaluate the ease with which users can find a match and identify any difficulties they may encounter.",
    whyReasons: [
      { label: "Less Known", description: "A lesser-known app with room to make a real impact on its user experience." },
      { label: "Room to Improve", description: "Just because dating is stressful does not mean the application should be as well." },
      { label: "Fresh Idea", description: "A unique concept built around trusted connections that stands out from traditional dating apps." },
    ],
    about:
      "Loop is a relatively new dating app that launched in May of last year. It offers users the option to either be matched by friends or to set up their own friends. The app's goal is to enhance user safety by facilitating introductions through trusted connections, addressing issues such as deceit and catfishing common on other dating platforms. Additionally, it leverages the enjoyment people find in matchmaking, whether they are being set up by friends or setting up friends themselves. Unlike many dating apps with narrow target audiences, Loop is inclusive, allowing both singles and individuals in relationships to participate. This approach adds an element of fun and excitement, as single users benefit from the matchmaking efforts of their friends who are in relationships.",
    goals: [
      "Test how easy and smooth it is for single users to navigate the dating app's current system.",
      "Check user satisfaction and their performance level.",
    ],
    discover: {
      research: "Loop was selected for this study because it is a lesser-known app with genuine room to improve, built around a fresh concept that stands out from traditional dating platforms. Rather than testing a well-established app, I wanted to evaluate an emerging product where research findings could have a real impact on the user experience.",
      interviews: "Participants were current users of the Loop app, ages 22–35, who were tech savvy, actively working, and single.",
      screeningQuestions: [
        "How old are you?",
        "What is your current relationship status?",
        "Are you interested in dating now?",
        "Have you used dating apps or websites before?",
        "Do you know how to use a smartphone?",
        "Are you comfortable using iOS?",
        "How long do you spend on your phone per week?",
      ],
      participants: [
        { name: "User 1", age: 24, gender: "Female", job: "Software Engineer", location: "New York, NY", status: "Single" },
        { name: "User 2", age: 25, gender: "Female", job: "Software Engineer", location: "New York, NY", status: "Single" },
        { name: "User 3", age: 30, gender: "Male", job: "Chemical Engineer", location: "New York, NY", status: "Single" },
      ],
      discoveryFindings: [
        "All users found viewing profiles to be clear.",
        "⅔ users did not use filter options when looking for a match.",
        "Users found saving updated pictures took some time and wanted a progress status indicator.",
        "Adding information to a profile was easy with no issues.",
        "⅔ users were unsure whether to ask for an introduction through already listed contacts or new people.",
        "All users trust matches sent by people they know.",
        "1 user used the homepage to look for a profile instead of the network tab.",
        "All users added people from their contacts list on Loop.",
        "⅔ users added people who had requested them.",
        "Users were frustrated they couldn't see pending approvals without searching individual profiles.",
        "Adding people by mutual friends was confusing but users eventually figured it out themselves.",
        "Only some actions had confirmation messages, not all.",
        "Some users used the featured button from the profile view, others from the homepage.",
        "Users found it helpful to have an example bio when featuring someone.",
        "Users had no issues featuring someone but needed time to decide what to write.",
      ],
    },
    steps: ["Discover", "Define", "Deliver"],
    define: {
      affinityMap: "",
      persona: "",
      firstImpressions: [
        "Overall, all three users agreed the UI could be worked on more — they felt it was too basic.",
        "Users understood it was a dating social app but not from the homepage alone.",
        "All felt the homepage was unclear on its purpose.",
        "They all liked the onboarding instructions shown at the beginning.",
        "The featured button was a source of confusion.",
        "The app takes time to get used to.",
      ],
      scenarios: [
        {
          title: "Scenario 1 — Finding a Match",
          description: "You are someone currently single and looking to get into the dating world again. You already downloaded Loop and are ready to look through profiles.",
          tasks: [
            "Task 1: Look at some profiles and describe what you see.",
            "Task 2: Find a profile you like and ask for an introduction.",
            "Task 3: Upload three new pictures to your current profile.",
          ],
          results: [
            ["✓", "✓", "~"],
            ["✓", "~", "~"],
            ["✓", "~", "✓"],
          ],
          taskTimes: ["46 seconds", "206 seconds", "67 seconds"],
        },
        {
          title: "Scenario 2 — Growing Your Network",
          description: "You have a few friends on your network and would like to have some more. You specifically want to grow your network to discover new matches for yourself and friends.",
          tasks: [
            "Task 1: Add four new friends to your network.",
            "Task 2: Pick a friend and add them as a featured single to be shown on the app.",
          ],
          results: [
            ["~", "✓"],
            ["~", "✓"],
            ["✓", "~"],
          ],
          taskTimes: ["65 seconds", "49 seconds"],
        },
      ],
      findings: [
        "All users found viewing profiles to be clear.",
        "⅔ users did not use filter options when looking for a match.",
        "Users found saving updated pictures took some time and wanted a progress status indicator.",
        "Adding information to a profile was easy with no issues.",
        "⅔ users were unsure whether to ask for an introduction through already listed contacts or new people.",
        "All users trust matches sent by people they know.",
        "1 user used the homepage to look for a profile instead of the network tab.",
        "All users added people from their contacts list on Loop.",
        "⅔ users added people who had requested them.",
        "Users were frustrated they couldn't see pending approvals without searching individual profiles.",
        "Adding people by mutual friends was confusing but users eventually figured it out themselves.",
        "Only some actions had confirmation messages, not all.",
        "Some users used the featured button from the profile view, others from the homepage.",
        "Users found it helpful to have an example bio when featuring someone.",
        "Users had no issues featuring someone but needed time to decide what to write.",
      ],
    },
    ideate: {
      journeyMap: "",
      jtbd: "",
      mvp: "",
      taskFlow: "",
    },
    design: {
      sketches: "",
      wireframes: "",
    },
    deliver: {
      testing: "",
      recommendations: [
        "The homepage needs to be cleaned up and reorganized around the app's main priority.",
        "The network tab should become the homepage since that is where users naturally navigated first.",
        "Onboarding instructions do not need to be added — the app's purpose is clear once users get started.",
        "A unified first profile picture standard should be introduced to avoid confusion (e.g. users uploading group photos).",
        "A progress bar or confirmation notification should appear when saving profile changes so users aren't left guessing.",
      ],
      takeaways: [
        "The app has a lot of potential — it is a great concept that users like and trust.",
        "Many additional ideas surfaced during testing that are worth pursuing beyond this study.",
      ],
    },
    reflection: "This project reinforced how much potential Loop has as a concept — users genuinely liked the idea of being set up by people they trust. The research made clear that the app's core value is strong, but the interface needs work to match it. Navigating between finding a match and growing a network was not always intuitive, and small friction points like missing confirmation messages and unclear pending approvals added up quickly. The feedback gave me many ideas I'd like to continue exploring beyond this study, particularly around homepage structure and profile management.",
  },

  "hr-nexus": {
    title: "HR Nexus — HR Advisory Platform",
    subtitle: "UX Research | In Progress",
    duration: "In progress",
    team: "Myself",
    role: "UX Researcher",
    intro: "This is a school project currently in progress. More details and research findings will be added as the project develops.",
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
