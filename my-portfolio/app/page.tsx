import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto flex max-md:flex-col flex-row gap-16 items-stretch">
          <div className="relative max-md:h-[300px] w-[300px] max-md:w-full shrink-0">
            <Image
              src="/Marcella+Web+Photo.webp"
              alt="Marcella Lehman - UX/UI Designer"
              fill
              priority
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold tracking-tight text-[#003F88] mb-6">
              UX/UI Designer
            </h1>
            <p className="text-xl text-zinc-700 mb-8 leading-relaxed">
              I design intuitive, beautiful digital experiences by combining user research,
              strategic thinking, and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-[#5A77D8] text-white font-medium hover:bg-[#003F88] transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-[#FF5DB6] text-[#FF5DB6] font-medium hover:bg-[#FFC0DB]/20 transition-colors"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#C3DBFD]/20 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#003F88] mb-8">About Me</h2>
          <p className="text-lg text-zinc-700 mb-4 leading-relaxed">
            I'm a passionate UX/UI designer focused on creating user-centered digital products.
            My approach combines research-driven insights, creative problem-solving, and modern
            design principles to deliver interfaces that are both beautiful and highly functional.
          </p>
          <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
            I believe great design starts with understanding users. Whether working on mobile apps,
            web platforms, or digital experiences, I prioritize usability, accessibility, and
            aesthetic excellence to craft solutions that truly resonate with users.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {["Figma", "UI Design", "User Research", "Prototyping", "Wireframing", "Design Systems"].map(
              (skill) => (
                <div
                  key={skill}
                  className="bg-white border border-[#C3DBFD] p-4 rounded-lg text-center font-medium text-[#5A77D8]"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#003F88] mb-12">Featured Projects</h2>
          <div className="grid gap-8">
            {[
              {
                slug: "npr-news",
                title: "NPR News — UX Case Study (8 weeks)",
                description:
                  "Student UX research and design project (team: Marcella, Emily, Kate, Shelly). I led research and design to prototype an MVP that connects users through interest-based communities, improving relevance and trust in news consumption.",
                tags: ["UX Research", "UX Design", "Prototyping", "JTBD", "School Project"],
              },
              {
                slug: "nasaa",
                title: "Nasaa — Travel Planning App (in progress)",
                description:
                  "A travel app aimed at simplifying trip planning by addressing common traveler pain points (itineraries, collaboration, recommendations). Project currently in progress — focused on research and ideation.",
                tags: ["UX Research", "Product Design", "Travel", "In Progress", "School Project"],
              },
              {
                slug: "loop-me-in",
                title: "Loop Me In — UX Case Study (4 weeks)",
                description:
                  "Solo UX research project evaluating ease of match-finding and usability on a friend-based dating app. Research focused on interviews, task flows, and usability testing to surface friction and improve trust and safety in matchmaking.",
                tags: ["UX Research", "Usability Testing", "Product Research", "Dating App", "School Project"],
              },
              {
                slug: "hr-nexus",
                title: "HR Nexus — HR Advisory Platform (in progress)",
                description:
                  "A technology platform that provides expert HR advice to employers dealing with workforce issues. The project is ongoing and focuses on research and product design to deliver practical employer-facing solutions.",
                tags: ["Product Design", "HR Tech", "UX Research", "In Progress", "School Project"],
              },
            ].map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
                <div className="border border-[#C3DBFD] rounded-lg p-6 hover:shadow-lg hover:border-[#5A77D8] transition-all">
                  <h3 className="text-2xl font-semibold text-[#003F88] mb-2">{project.title}</h3>
                  <p className="text-zinc-700 mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block px-3 py-1 bg-[#FFC0DB]/40 text-[#003F88] rounded-full text-sm font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#C3DBFD]/20 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#003F88] mb-8">Let's Connect</h2>
          <p className="text-lg text-zinc-700 mb-8">
            I'm actively looking to break into the product design world and would love to hear
            about any opportunities — whether that's a full-time role, internship, or just a conversation.
            If you're working on something exciting or know someone who is, I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:marcella.lehman81@gmail.com"
              className="px-8 py-3 rounded-full bg-[#5A77D8] text-white font-medium hover:bg-[#003F88] transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-[#5A77D8] text-[#5A77D8] font-medium hover:bg-[#C3DBFD]/30 transition-colors"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/marcella-lehman-14564a174/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-[#FF5DB6] text-[#FF5DB6] font-medium hover:bg-[#FFC0DB]/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C3DBFD] px-4 sm:px-6 lg:px-8 py-8 text-center text-[#5A77D8]">
        <p>&copy; {new Date().getFullYear()} Marcella Lehman. All rights reserved.</p>
      </footer>
    </div>
  );
}
