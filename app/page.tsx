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

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    desc: "Clean, fast, mobile-friendly websites built to convert. From portfolio sites to business landing pages.",
    items: [
      "UI/UX planning & wireframe",
      "Content writing for all pages",
      "SEO-ready structure",
      "Domain & hosting guidance",
      "Post-launch support",
    ],
  },
  {
    number: "02",
    title: "Brand Strategy & Identity",
    desc: "Your brand is more than a logo. I help you find your voice, define your positioning, and show up consistently.",
    items: [
      "Brand audit & competitor analysis",
      "Tagline & messaging framework",
      "Logo direction & visual identity guidance",
      "Brand guidelines document",
    ],
  },
  {
    number: "03",
    title: "Content Strategy & Writing",
    desc: "From Instagram captions to full website copy — content that sounds like you but better.",
    items: [
      "Website copywriting",
      "Instagram content calendars",
      "Reel & video script writing",
      "LinkedIn content planning",
      "Blog writing",
    ],
  },
  {
    number: "04",
    title: "Social Media Management",
    desc: "Consistent, on-brand social presence that builds trust and attracts the right audience.",
    items: [
      "Platform strategy (Instagram / LinkedIn)",
      "Content calendar creation",
      "Caption writing & hashtag research",
      "Performance tracking & monthly report",
    ],
  },
  {
    number: "05",
    title: "Personal Branding",
    desc: "For founders, professionals, and students who want to build a credible online presence.",
    items: [
      "LinkedIn profile overhaul",
      "Personal brand strategy document",
      "Content pillars & posting plan",
      "Bio & headline writing",
    ],
  },
];

const stats = [
  "10+ clients served",
  "20-member student team",
  "1.5+ years running a real agency",
  "2 Shark Tank competition wins",
  "B.E. Engineering student — graduating 2027",
];

const projects = [
  {
    title: "SV Little Leapsters Therapy Center",
    type: "Instagram Content Strategy · Personal Brand Strategy",
    image: "/projects/therapy.jpg",
    points: [
      "Built a full Instagram content calendar for a pediatric therapy clinic in Chennai",
      "Competitive analysis of therapy clinics in the region",
      "Developed a personal brand strategy for the founder",
    ],
    tags: ["Content Strategy", "Branding", "Healthcare"],
  },
  {
    title: "Lofty Learn (ECE Academy)",
    type: "Website Content · Branding",
    image: "/projects/lofty.jpg",
    points: [
      "Content intake and information architecture for the website",
      "Tagline development and brand messaging",
      "Logo direction and website copy",
    ],
    tags: ["Web Content", "Branding", "Ed-Tech"],
  },
  {
    title: "Ausdauer Groups (Own Brand)",
    type: "Full Agency Brand Build",
    image: "/projects/ausdauer.jpg",
    points: [
      "Built the agency brand from scratch — name, identity, tone of voice",
      "Developed Instagram and LinkedIn presence",
      "Created internal systems: service agreements, MoUs, onboarding templates",
      "Led content team producing Tanglish reels using AIDA framework",
    ],
    tags: ["Branding", "Content", "Startup Operations"],
  },
  {
    title: "Coming Soon",
    type: "Future Case Study",
    image: "",
    points: [
      "Reserved for upcoming approved client project with screenshots and outcomes.",
    ],
    tags: ["Coming Soon"],
  },
  {
    title: "Coming Soon",
    type: "Future Case Study",
    image: "",
    points: ["Reserved for another upcoming project slot."],
    tags: ["Coming Soon"],
  },
];

const skills = [
  "Brand Strategy",
  "Content Strategy",
  "Website Copywriting",
  "Social Media Management",
  "Personal Branding",
  "Web Design",
  "Cold Outreach",
  "Script Writing",
  "UI/UX Planning",
  "Instagram Content",
  "LinkedIn Content",
  "Startup Operations",
  "Messaging Framework",
  "Content Calendars",
  "Founder Branding",
];

const experience = [
  {
    role: "Director",
    org: "Ausdauer Groups",
    period: "March 2025 - Present",
    details:
      "Helped establish Ausdauer Groups, a student-run digital agency in Chennai, building brand systems, client workflows, internal documents, and growth operations.",
  },
  {
    role: "PR Lead / Content Team Leader",
    org: "Ausdauer Groups",
    period: "2025 - Present",
    details:
      "Led outreach systems, messaging, content planning, script writing, and brand consistency across internal and client-facing work.",
  },
  {
    role: "B.E. Engineering Student",
    org: "Graduating 2027",
    period: "Current",
    details:
      "Balancing engineering academics with agency leadership, startup competitions, networking, and practical client work.",
  },
];

const testimonials = [
  {
    quote:
      "Philip brought clarity to our brand that we didn't know we needed. The content strategy he built for us was practical, on-point, and delivered results.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "Working with Ausdauer felt different — they genuinely understood our audience and translated it into content that worked. Philip led the process end to end.",
    name: "Client Name",
    role: "Role, Company",
  },
  {
    quote:
      "What impressed me most was his consistency. Every deadline met, every brief understood. Rare to find that in a student-run team.",
    name: "Client Name",
    role: "Role, Company",
  },
];

const blogPosts = [
  "What running an agency in college actually taught me about business",
  "Why your brand's tone of voice matters more than your logo",
  "How I use AI tools to do the work of a 5-person content team",
  "Cold outreach that doesn't feel cold — what worked for us",
  "Winning a Shark Tank competition as a student: what nobody tells you",
];

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-3xl"
    >
      <p className="text-sm uppercase tracking-[0.24em] text-yellow-500">
        {label}
      </p>
      <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-xl leading-9 text-gray-600 md:text-2xl">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf4] text-[#111111]">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-[260px] w-[260px] rounded-full bg-yellow-200/30 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] h-[260px] w-[260px] rounded-full bg-yellow-100/30 blur-3xl"
        />
      </div>

      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#fffdf4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            Philip
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#home" className="transition hover:opacity-60">Home</a>
            <a href="#about" className="transition hover:opacity-60">About</a>
            <a href="#services" className="transition hover:opacity-60">Services</a>
            <a href="#projects" className="transition hover:opacity-60">Projects</a>
            <a href="#skills" className="transition hover:opacity-60">Skills</a>
            <a href="#experience" className="transition hover:opacity-60">Experience</a>
            <a href="#testimonials" className="transition hover:opacity-60">Testimonials</a>
            <a href="#blog" className="transition hover:opacity-60">Blog</a>
            <a href="#contact" className="transition hover:opacity-60">Contact</a>
          </div>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/PhilipJoel_Resume.pdf"
            download
            className="rounded-full bg-gradient-to-r from-yellow-300 to-amber-200 px-5 py-2.5 text-sm font-medium text-black shadow-sm"
          >
            Download Resume ↓
          </motion.a>
        </div>
      </nav>

      <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-600"
            >
              Director at Ausdauer Groups · Student Entrepreneur · Chennai
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="text-6xl font-semibold leading-[1.04] tracking-tight md:text-8xl"
            >
              I Build Brands,
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="block text-yellow-500"
              >
                Tell Stories &
              </motion.span>
              Help Businesses Grow.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="mt-6 max-w-3xl text-2xl leading-10 text-gray-600 md:text-3xl"
            >
              Student entrepreneur from Chennai — turning ideas into brands,
              content into clients, and ambition into action.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65 }}
              className="mt-4 text-lg leading-9 text-gray-500 md:text-xl"
            >
              Web Design · Branding · Content Strategy · Script Writing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="rounded-full bg-yellow-400 px-7 py-3.5 text-lg font-medium text-black transition hover:bg-yellow-500"
              >
                Let&apos;s Work Together
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-lg transition hover:bg-black hover:text-white"
              >
                See My Work ↓
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] bg-[#fef9c3] px-6 text-center text-gray-500">
                Add your portrait image here
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading label="About Me" title="Hey, I'm Philip." />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-6 text-xl leading-10 text-gray-600 md:text-2xl">
            {[
              "I didn&apos;t start with a perfect plan. I started with a belief that students could build real businesses — not just participate in case studies. In March 2025, I helped establish Ausdauer Groups, a digital agency run entirely by students, out of Chennai. Within months, we had real clients, real revenue, and a real team of 20.",
              "I wear multiple hats — Director, PR lead, content team leader, and sometimes the guy writing website copy at midnight. I&apos;ve worked on brand strategy, cold outreach systems, website builds, Instagram content calendars, script writing for reels, and the legal backbone of a bootstrapped startup. All while sitting in engineering lectures.",
              "I believe branding is clarity, content creates long-term trust, and consistency beats motivation every single time. I&apos;m not here to look impressive. I&apos;m here to grow, build in public, and help brands show up the way they deserve to.",
              "When I&apos;m not running the agency, I&apos;m pitching at startup competitions (won a couple 😄), networking at BNI, or figuring out how AI tools can make our work 10x faster. Big fan of learning by doing — always have been.",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>

          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat + index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-xl font-medium md:text-2xl">{stat}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading
          label="Services Offered"
          title="What I can help you with."
          subtitle="Starting from ₹5,000 — customised based on scope. DM or fill the contact form to get a quote."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title + index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-black/10 bg-white p-7 shadow-sm transition"
            >
              <p className="text-sm tracking-[0.25em] text-yellow-500">
                {service.number}
              </p>
              <h3 className="mt-3 text-4xl font-semibold md:text-5xl">
                {service.title}
              </h3>
              <p className="mt-4 text-xl leading-9 text-gray-600 md:text-2xl">
                {service.desc}
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gray-500">
                What&apos;s included
              </p>

              <ul className="mt-4 space-y-2 text-lg leading-9 text-gray-700 md:text-xl">
                {service.items.map((item, itemIndex) => (
                  <li key={item + itemIndex}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading
          label="Projects / Work Samples"
          title="Selected work."
          subtitle="A mix of branding, web content, content strategy, and startup operations."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title + project.type + index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="grid items-start gap-6 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]"
            >
              <div>
                <p className="text-base text-yellow-500 md:text-lg">
                  {project.type}
                </p>
                <h3 className="mt-2 text-4xl font-semibold md:text-5xl">
                  {project.title}
                </h3>

                <ul className="mt-4 space-y-2 text-xl leading-9 text-gray-600 md:text-2xl">
                  {project.points.map((point, pointIndex) => (
                    <li key={point + pointIndex}>• {point}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag + tagIndex}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-black/10 bg-[#fffdf4] px-3 py-1 text-base text-gray-600"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="overflow-hidden rounded-3xl border border-black/10 bg-[#fef9c3]"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[260px] w-full object-cover"
                  />
                ) : (
                  <div className="flex h-[260px] items-center justify-center text-base text-gray-500">
                    Project image
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading
          label="Skills"
          title="What I work with."
          subtitle="The areas I use most often across client work, branding, outreach and agency operations."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill + index}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-lg shadow-sm md:text-xl"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading label="Experience" title="What I've been building." />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 space-y-10"
        >
          {experience.map((item, index) => (
            <motion.div
              key={item.role + item.org + index}
              variants={fadeUp}
              className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <h3 className="text-4xl font-semibold md:text-5xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-xl text-gray-500 md:text-2xl">
                  {item.org}
                </p>
                <p className="mt-4 text-xl leading-9 text-gray-600 md:text-2xl">
                  {item.details}
                </p>
              </div>
              <div className="text-lg text-gray-500 md:text-right md:text-xl">
                {item.period}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading
          label="Testimonials"
          title="What clients say."
          subtitle="Placeholders for now — replace with real reviews and photos when available."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name + item.role + index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-xl leading-9 text-gray-600 md:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-xl font-medium md:text-2xl">{item.name}</p>
                <p className="text-base text-gray-500 md:text-lg">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 text-lg leading-9 text-gray-500 md:text-xl"
        >
          Reach out to SV Little Leapsters and Lofty Learn clients for a 2–3
          line review. Even a WhatsApp message screenshot works as social proof.
        </motion.p>
      </section>

      <section id="blog" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <SectionHeading
          label="Blog / Thoughts"
          title="Things I'm thinking about."
          subtitle="Student startup realities, branding lessons, AI tools, and the occasional life update — written honestly, not perfectly."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post + index}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-2xl leading-9">{post}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 text-lg leading-9 text-gray-500 md:text-xl"
        >
          Posting frequency suggestion: once every 2 weeks to start. Repurpose
          LinkedIn posts into blog entries to save time.
        </motion.p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl border-y border-black/10 px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              label="Contact"
              title="Got a project in mind? Let's talk."
              subtitle="Whether you need a website, a brand strategy, or just want to say hello — my inbox is always open."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-3 text-xl leading-9 text-gray-600 md:text-2xl"
            >
              {[
                "Email — philipjoel1969@gmail.com",
                "Phone / WhatsApp — +91 75980 22972",
                "LinkedIn — linkedin.com/in/s-philipjoel-73b0a5290",
                "Website — ausdauergroups.in",
              ].map((line, index) => (
                <motion.p key={index} variants={fadeUp}>
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm"
          >
            <input
              className="w-full rounded-2xl border border-black/10 bg-[#fffef7] px-4 py-3 text-lg outline-none"
              placeholder="Name"
            />
            <input
              className="w-full rounded-2xl border border-black/10 bg-[#fffef7] px-4 py-3 text-lg outline-none"
              placeholder="Email"
            />
            <input
              className="w-full rounded-2xl border border-black/10 bg-[#fffef7] px-4 py-3 text-lg outline-none"
              placeholder="Phone (optional)"
            />
            <select className="w-full rounded-2xl border border-black/10 bg-[#fffef7] px-4 py-3 text-lg outline-none">
              <option>What do you need help with?</option>
              <option>Website</option>
              <option>Branding</option>
              <option>Content</option>
              <option>Social Media</option>
              <option>Other</option>
            </select>
            <textarea
              className="min-h-36 w-full rounded-2xl border border-black/10 bg-[#fffef7] px-4 py-3 text-lg outline-none"
              placeholder="Tell me about your project"
            />
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="rounded-full bg-gradient-to-r from-yellow-300 to-amber-200 px-7 py-3.5 text-lg font-medium text-black"
            >
              Send Message →
            </motion.button>
            <p className="text-base text-gray-500">
              Thanks for reaching out! I&apos;ll get back to you within 24
              hours.
            </p>
          </motion.form>
        </div>
      </section>

      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6 py-10"
      >
        <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 S. Philip Joel. All rights reserved.</p>
          <p>
            philipjoel1969@gmail.com · +91 75980 22972 · Chennai, Tamil Nadu
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/s-philipjoel-73b0a5290">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="https://ausdauergroups.in">Ausdauer</a>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Built with purpose. Growing in public.
        </p>
      </motion.footer>
    </main>
  );
}