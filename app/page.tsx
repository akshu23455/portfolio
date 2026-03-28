"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "Brand Strategy",
  "Content Strategy",
  "Website Copywriting",
  "Social Media Management",
  "Personal Branding",
  "Web Design",
  "Script Writing",
  "UI/UX Planning",
  "Instagram Content",
  "LinkedIn Content",
];

const projects = [
  {
    title: "Ausdauer Groups",
    description:
      "Built branding, content systems, outreach strategy, and internal workflows for a student-run agency.",
    tags: ["Branding", "Content", "Startup"],
    image: "/ausdauer_groups_logo.jpg",
  },
  {
    title: "Lofty Learn",
    description:
      "Worked on website content, messaging, tagline, and brand positioning.",
    tags: ["Web Content", "Branding"],
    image: "/projects/lofty.jpg",
  },
  {
    title: "SV Little Leapsters Therapy Center",
    description:
      "Built a content calendar, competitive analysis, and personal brand strategy for a therapy clinic.",
    tags: ["Content Strategy", "Branding", "Healthcare"],
    image: "/projects/therapy.jpg",
  },
];

const experience = [
  {
    side: "left",
    icon: "🎓",
    title: "B.E. Engineering Student",
    subtitle: "Graduating 2027",
    date: "2023 – 2027",
    details:
      "Balancing engineering academics with entrepreneurship, branding work, and startup growth.",
  },
  {
    side: "right",
    icon: "💼",
    title: "Director",
    subtitle: "Ausdauer Groups",
    date: "March 2025 – Present",
    details:
      "Helped establish and build a student-run digital agency in Chennai with real clients, real revenue, and a real team.",
  },
  {
    side: "left",
    icon: "💼",
    title: "PR Lead / Content Team Leader",
    subtitle: "Ausdauer Groups",
    date: "2025 – Present",
    details:
      "Led outreach, content planning, script writing, and internal systems for brand and client operations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] text-black">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto flex w-full max-w-4xl items-center justify-center rounded-full bg-[#efefef] px-8 py-5 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base text-[#6b7280] md:text-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#111111]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>

        <section
          id="home"
          className="grid min-h-[78vh] items-center gap-12 pt-16 md:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="h-[260px] w-[260px] overflow-hidden rounded-full border-[8px] border-white bg-[#ececec] shadow-md md:h-[300px] md:w-[300px]">
                <img
                  src="/profile.jpg"
                  alt="Philip Joel"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 text-4xl">👋</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-semibold leading-tight text-[#111111] md:text-5xl">
              Welcome! I am Philip
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              I work with branding, web design, content strategy and personal
              branding. Student entrepreneur from Chennai building brands and
              helping businesses grow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition hover:opacity-90"
              >
                Contact Me →
              </a>

              <a
                href="https://linkedin.com/in/s-philipjoel-73b0a5290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:scale-105"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="pt-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-3xl text-base leading-8 tracking-wide text-[#374151]"
          >
            <p>
              Hey there, I&apos;m Philip Joel, a student entrepreneur and
              engineering student from Chennai. I began with a strong belief
              that students can build real businesses, not just study business
              ideas in theory.
            </p>
            <p className="mt-4">
              In March 2025, I helped establish Ausdauer Groups, a digital
              agency run entirely by students. Within a short period, we built
              a real client base, generated revenue, and grew into a committed
              team of 20.
            </p>
            <p className="mt-4">
              My work spans brand strategy, content systems, cold outreach,
              website development, Instagram content planning, reel scripting,
              personal branding, and startup operations.
            </p>
            <p className="mt-4">
              I believe strong branding creates clarity, content builds trust,
              and consistency matters more than motivation. My goal is to keep
              learning, build in public, and help brands present themselves
              with confidence and purpose.
            </p>
          </motion.div>
        </section>

        <section id="projects" className="pt-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl"
          >
            My Projects
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 space-y-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title + index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="grid gap-8 rounded-[28px] bg-[#ececec] p-6 md:grid-cols-[1fr_1fr] md:p-8"
              >
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    {project.title === "Ausdauer Groups" && (
                      <img
                        src="/ausdauer_groups_logo.jpg"
                        alt="Ausdauer logo"
                        className="h-12 w-12 object-contain"
                      />
                    )}
                    <h3 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b5563] md:text-xl">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag + tagIndex}
                        className="rounded-full bg-[#4b4b4b] px-4 py-2 text-base font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[320px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[320px] items-center justify-center text-lg text-[#6b7280]">
                      Add project screenshot here
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="pt-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl"
          >
            My Skills
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill + index}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-full border border-[#bfc4cc] bg-[#f6f6f6] px-5 py-3 text-lg text-[#1f2937]"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="experience" className="pt-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl"
          >
            My Experience
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto mt-14 max-w-5xl"
          >
            <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-[#8c8c8c] md:block" />

            <div className="space-y-14">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  variants={fadeUp}
                  className="grid items-center gap-6 md:grid-cols-[1fr_120px_1fr]"
                >
                  {item.side === "left" ? (
                    <>
                      <div className="rounded-[22px] border border-[#e2e2e2] bg-[#f8f8f8] p-7 shadow-sm">
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-xl text-[#1f2937]">
                          {item.subtitle}
                        </p>
                        <p className="mt-4 text-lg leading-8 text-[#4b5563]">
                          {item.details}
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-3xl shadow-sm">
                          {item.icon}
                        </div>
                        <p className="mt-3 text-lg text-[#4b5563]">
                          {item.date}
                        </p>
                      </div>

                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-3xl shadow-sm">
                          {item.icon}
                        </div>
                        <p className="mt-3 text-lg text-[#4b5563]">
                          {item.date}
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-[#e2e2e2] bg-[#f8f8f8] p-7 shadow-sm">
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-xl text-[#1f2937]">
                          {item.subtitle}
                        </p>
                        <p className="mt-4 text-lg leading-8 text-[#4b5563]">
                          {item.details}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="resume" className="pt-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl"
          >
            Resume
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#e2e2e2] bg-[#f8f8f8] p-8 text-center shadow-sm"
          >
            <p className="text-lg leading-8 text-[#4b5563] md:text-xl">
              Want to know more about my experience, work, and background? You
              can download my resume below.
            </p>

            <a
              href="/philipresume/S.Philip%20Joel%20New%20Resume.pdf"
              download
              className="mt-8 inline-block rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition hover:opacity-90"
            >
              Download Resume ↓
            </a>
          </motion.div>
        </section>

        <section id="contact" className="pt-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl"
          >
            Contact
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-3xl text-center"
          >
            <p className="text-lg leading-8 text-[#4b5563] md:text-xl">
              Whether you need a website, brand strategy, content support, or
              just want to say hello — feel free to reach out.
            </p>

            <div className="mt-8 space-y-4 text-lg text-[#1f2937]">
              <div className="flex items-center justify-center gap-3">
                <span>📧</span>
                <span>philipjoel1969@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span>📞</span>
                <span>+91 75980 22972</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span>🌐</span>
                <span>ausdauergroups.in</span>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-24 pb-10 text-center"
        >
          <p className="text-lg text-[#6b7280]">© 2025 S. Philip Joel</p>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-base text-[#4b5563] md:text-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#111111]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/s-philipjoel-73b0a5290"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6d6d6] bg-white text-[#111111]"
            >
              in
            </a>
            <a
              href="https://ausdauergroups.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6d6d6] bg-white text-[#111111]"
            >
              🌐
            </a>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}