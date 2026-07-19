import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-[120px]">
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
              Aspiring product designer passionate about user research, strategic thinking,
              and creating experiences that are both beautiful and intuitive.
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
      <section id="about" className="bg-[#C3DBFD]/20 px-4 sm:px-6 lg:px-8 pt-[120px] pb-[120px]">
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
      <section id="projects" className="px-4 sm:px-6 lg:px-8 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#003F88] mb-12">Featured Projects</h2>
          <div className="grid gap-10">
            {[
              {
                slug: "npr-news",
                title: "NPR News — UX Case Study (8 weeks)",
                description:
                  "Student UX research and design project (team: Marcella, Emily, Kate, Shelly). I led research and design to prototype an MVP that connects users through interest-based communities, improving relevance and trust in news consumption.",
                category: "Product Design",
                image: "/Phone+Mockup.webp",
              },
              {
                slug: "nasaa",
                title: "Nasaa — Travel Planning App (in progress)",
                description:
                  "A travel app aimed at simplifying trip planning by addressing common traveler pain points (itineraries, collaboration, recommendations). Project currently in progress — focused on research and ideation.",
                category: "UX Research",
                image: "/nasaa-mockup.png.jpg",
              },
              {
                slug: "loop-me-in",
                title: "Loop Me In — UX Case Study (4 weeks)",
                description:
                  "Solo UX research project evaluating ease of match-finding and usability on a friend-based dating app. Research focused on interviews, task flows, and usability testing to surface friction and improve trust and safety in matchmaking.",
                category: "UX Research",
                image: "/loop-mockup.png",
              },
              {
                slug: "hr-nexus",
                title: "HR Nexus — HR Advisory Platform (in progress)",
                description:
                  "A technology platform that provides expert HR advice to employers dealing with workforce issues. The project is ongoing and focuses on research and product design to deliver practical employer-facing solutions.",
                category: "UX Research",
                image: null,
              },
            ].map((project, i) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
                <div
                  className={`flex ${i % 2 === 1 ? "max-lg:flex-col-reverse" : "max-lg:flex-col"} ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 bg-[#C3DBFD]/20 border border-[#C3DBFD] rounded-3xl p-10 group-hover:border-[#5A77D8] group-hover:shadow-lg transition-all`}
                >
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-2 flex-wrap">
                      <span className="inline-block px-3 py-1 bg-white text-[#5A77D8] rounded-full text-sm font-medium">{project.category}</span>
                      <span className="inline-block px-3 py-1 bg-[#FFC0DB]/40 text-[#FF5DB6] rounded-full text-sm font-medium">Student Project</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#003F88]">{project.title}</h3>
                    <p className="text-zinc-700 leading-relaxed">{project.description}</p>
                    <span className="inline-flex items-center gap-1 text-[#5A77D8] font-medium group-hover:text-[#003F88] transition-colors">
                      View case study
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  {project.image && (
                    <div className="relative w-full lg:w-[280px] h-[220px] shrink-0">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="rounded-2xl object-cover shadow-md"
                      />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#C3DBFD]/20 px-4 sm:px-6 lg:px-8 py-[120px]">
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
