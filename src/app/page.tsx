import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krisol Infosoft-KTask",
  description: `Prepress task management software,
    Printing project workflow management,
    Print production task automation,
    Prepress job scheduling tools,
    Digital prepress workflow optimization,
    Prepress job tracking system,
    Task management for printing companies,
    Printing process workflow automation,
    Print shop task management system,
    Prepress task tracking solutions,
    Automated prepress workflow solutions,
    Prepress job management software,
    Print production task tracking,
    Prepress process automation,
    Digital print workflow software,
    Prepress task monitoring tools,
    Online prepress job tracking,
    Print workflow optimization tools,
    Printing workflow automation software,
    Customizable prepress workflow`
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
    </main>
  );
}
