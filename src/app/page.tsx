"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Lightbulb,
  Globe,
  BookOpen,
  ChevronDown,
  Network,
  Leaf,
  Smartphone,
  Factory,
  Sun,
  GraduationCap,
  Wifi,
  DollarSign,
  FlaskConical,
  Handshake,
  UsersRound,
  Github,
  ExternalLink,
  Blocks,
  Settings,
  Search,
  ArrowRight,
  Layers,
} from "lucide-react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import DisplayCards from "@/components/ui/display-cards";
import { BorderBeam } from "@/components/ui/border-beam";
import { RetroGrid } from "@/components/ui/retro-grid";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { cn } from "@/lib/utils";

/* ─── Shared styles ─── */
const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };

/* ─── Animation helpers ─── */
function AnimatedSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section ref={ref} id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={className}
    >{children}</motion.section>
  );
}

function StaggerChildren({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className={className}
    >{children}</motion.div>
  );
}

function FadeChild({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!isInView) return;
    const numericMatch = target.match(/\d+/);
    if (!numericMatch) { setTimeout(() => setDisplay(target), 0); return; }
    const end = parseInt(numericMatch[0]);
    const prefix = target.slice(0, target.indexOf(numericMatch[0]));
    const dur = 2200; const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(eased * end)}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, suffix]);
  return <span ref={ref}>{display}</span>;
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#definition", label: "Definition" },
    { href: "#concepts", label: "Concepts" },
    { href: "#theory", label: "Theory" },
    { href: "#examples", label: "Case Studies" },
    { href: "#stages", label: "Stages" },
    { href: "#policy", label: "Policy" },
  ];

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-[1100px] mx-auto px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <span style={playfair} className="font-semibold text-[16px] text-slate-800">Economic Diffusion</span>
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all">{l.label}</a>
          ))}
        </div>
        <a href="https://github.com/Nhughes09/reactcomponentshheuristics" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all">
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero with Globe (Card Demo Layout) ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background shaders */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[60%] h-[70%] rounded-full bg-gradient-to-bl from-sky-100/60 via-blue-50/30 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-violet-50/50 to-transparent blur-[60px] pointer-events-none" />
      <RetroGrid angle={65} />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative z-10 w-full max-w-[1100px]">

        <div className="relative rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/[0.04]">
          <BorderBeam size={300} duration={12} colorFrom="#0ea5e9" colorTo="#8b5cf6" />

          {/* Ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row min-h-[520px]">
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-center p-10 md:p-14 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-slate-50 px-3 py-1 text-xs text-slate-400 mb-6 w-fit">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Development Economics Research
              </div>

              <h1 style={{ ...playfair, fontSize: "clamp(2.4rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#1e3a8a" }} className="mb-4">
                Economic{" "}
                <span className="gradient-text">Diffusion</span>
              </h1>

              <p className="text-[14.5px] text-slate-500 max-w-md leading-relaxed mb-8">
                Understanding how innovations, technologies, and economic practices spread across economies, driving transformation and growth in developing nations. Drag the globe to explore.
              </p>

              <div className="flex items-center gap-6">
                <div>
                  <p style={playfair} className="text-2xl font-bold text-sky-600"><AnimatedCounter target="1962" /></p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Rogers&apos; Framework</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p style={playfair} className="text-2xl font-bold text-violet-600"><AnimatedCounter target="5" /></p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Diffusion Stages</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p style={playfair} className="text-2xl font-bold text-emerald-600">S-Curve</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Adoption Pattern</p>
                </div>
              </div>
            </div>

            {/* Right — Interactive Globe */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]">
              <InteractiveGlobe size={460} />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-300">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ChevronDown size={14} /></motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Section Header (no pill badges!) ─── */
function SectionHeader({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle: string; align?: string }) {
  return (
    <div className={cn("mb-14", align === "center" ? "text-center" : "text-left")}>
      <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-sky-500 mb-3">{eyebrow}</p>
      <h2 style={{ ...playfair, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.12, color: "#1e3a8a" }} className="mb-3">{title}</h2>
      <p className={cn("text-slate-400 text-[15px] leading-relaxed", align === "center" ? "max-w-lg mx-auto" : "max-w-xl")}>{subtitle}</p>
    </div>
  );
}

/* ─── Definition ─── */
function DefinitionSection() {
  return (
    <AnimatedSection id="definition" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative bg-gradient-to-br from-sky-50/60 via-white to-violet-50/40 border border-gray-200/80 rounded-2xl p-8 md:p-14 shadow-lg shadow-black/[0.03]">
          <BorderBeam size={200} duration={15} colorFrom="#0ea5e9" colorTo="#8b5cf6" />

          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-4 h-4 text-sky-500" />
            <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-sky-500">Definition</p>
          </div>

          <h2 style={{ ...playfair, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, lineHeight: 1.12, color: "#1e3a8a" }} className="mb-5">
            What is Economic Diffusion?
          </h2>

          <blockquote className="text-slate-500 text-[15px] leading-relaxed italic border-l-3 border-sky-300 pl-5 mb-5">
            The mechanism by which new ideas, technologies, and practices spread through a society or economy over time.
          </blockquote>

          <p className="text-slate-600 text-[14.5px] leading-[1.75] mb-4">
            Economic diffusion refers to the process through which innovations—including technological advancements, managerial practices, financial instruments, and institutional reforms—spread from their origin point across different economic agents, sectors, and geographic regions. This spread is not automatic; it occurs through various channels including trade, investment, migration, communication, and imitation.
          </p>
          <p className="text-slate-600 text-[14.5px] leading-[1.75]">
            In the context of development economics, diffusion plays a crucial role in explaining how less developed economies can catch up with more advanced ones. The theory recognizes that development is not simply about creating new innovations but also about effectively adopting and adapting innovations that have proven successful elsewhere.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── Core Concepts (GlowingEffect cards) ─── */
function ConceptsSection() {
  const concepts = [
    { icon: <TrendingUp className="h-4 w-4 text-sky-500" />, title: "S-Curve Adoption", description: "Diffusion typically follows an S-curve pattern: slow initial adoption, rapid growth during takeoff, and eventual saturation." },
    { icon: <Users className="h-4 w-4 text-violet-500" />, title: "Adopter Categories", description: "Populations divide into innovators (2.5%), early adopters (13.5%), early majority (34%), late majority (34%), and laggards (16%)." },
    { icon: <Settings className="h-4 w-4 text-emerald-500" />, title: "Reinvention", description: "Innovations often get modified during diffusion as adopters adapt them to local contexts, enhancing or hindering adoption." },
    { icon: <Network className="h-4 w-4 text-amber-500" />, title: "Network Effects", description: "The value of an innovation increases with adopters, creating positive feedback loops that accelerate diffusion past critical mass." },
    { icon: <Lightbulb className="h-4 w-4 text-rose-500" />, title: "Knowledge Spillovers", description: "Diffusion generates external benefits as knowledge spreads between actors, creating social returns exceeding private returns." },
    { icon: <Globe className="h-4 w-4 text-blue-500" />, title: "Technology Transfer", description: "Intentional movement of technology across borders through FDI, licensing, technical assistance, and imitation." },
  ];

  return (
    <AnimatedSection id="concepts" className="relative py-24 px-6">
      {/* Background shader */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Core Theory" title="Core Concepts in Diffusion Theory" subtitle="Understanding the fundamental building blocks that explain how innovations spread through economies." />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map((c) => (
            <FadeChild key={c.title}>
              <div className="relative h-full rounded-2xl border border-gray-200/80 p-1.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="relative flex flex-col gap-3.5 rounded-xl bg-white p-6 h-full shadow-md shadow-slate-100/80 hover:shadow-lg hover:shadow-slate-200/60 transition-shadow duration-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-gray-100 flex items-center justify-center">{c.icon}</div>
                  <h3 style={playfair} className="text-lg font-bold text-slate-800">{c.title}</h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed">{c.description}</p>
                </div>
              </div>
            </FadeChild>
          ))}
        </StaggerChildren>
      </div>
    </AnimatedSection>
  );
}

/* ─── Theoretical Foundations (Scroll Animation) ─── */
function TheorySection() {
  return (
    <AnimatedSection id="theory" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white pointer-events-none" />

      <div className="relative pt-16 pb-0 px-6 max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Foundations" title="Theoretical Foundations" subtitle="Exploring the academic frameworks that define how innovations spread through economies." />
      </div>

      <div className="relative flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h2 style={playfair} className="text-3xl md:text-4xl font-bold text-slate-800">
              From Schumpeter to Rogers <br />
              <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none gradient-text">Diffusion Theory</span>
            </h2>
          }
        >
          <div className="w-full h-full bg-gradient-to-br from-sky-50 via-white to-violet-50 p-8 md:p-12 rounded-2xl overflow-y-auto border border-gray-200/60">
            <div className="max-w-2xl mx-auto space-y-8">
              <div>
                <h3 style={playfair} className="text-xl font-bold text-slate-800 mb-3">Schumpeterian Growth Theory</h3>
                <p className="text-[13.5px] text-slate-600 leading-[1.7]">
                  Joseph Schumpeter&apos;s theory of economic development (1912) established the foundation for understanding diffusion as a key driver of economic growth. He argued that economic development occurs through &quot;creative destruction&quot;—the continuous process by which new innovations replace existing technologies and practices.
                </p>
              </div>
              <div>
                <h3 style={playfair} className="text-xl font-bold text-slate-800 mb-3">Rogers&apos; Diffusion of Innovations</h3>
                <p className="text-[13.5px] text-slate-600 leading-[1.7]">
                  Everett Rogers&apos; seminal work (1962, 2003) systematized the study of diffusion across disciplines. His model identifies five stages: knowledge, persuasion, decision, implementation, and confirmation. This framework has been extensively applied to technology adoption in developing countries.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { label: "Key Theorists", value: "Schumpeter, Rogers, Lucas, Aghion & Howitt", color: "sky" },
                  { label: "Core Insight", value: "Diffusion requires active communication & trust", color: "violet" },
                  { label: "Development Link", value: "Effective diffusion drives faster growth", color: "emerald" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-white rounded-xl border border-gray-200/80 text-center">
                    <div className={`text-[10px] text-${item.color}-500 font-bold uppercase tracking-wider mb-1`}>{item.label}</div>
                    <div className="text-[12.5px] text-slate-600">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </AnimatedSection>
  );
}

/* ─── Case Studies ─── */
function CaseStudiesSection() {
  const cases = [
    { icon: <Leaf className="w-5 h-5 text-emerald-500" />, title: "Green Revolution", desc: "High-yield wheat and rice varieties diffused across Asia, transforming agricultural productivity via CIMMYT and IRRI research centers.", bg: "from-emerald-50 to-white" },
    { icon: <Smartphone className="w-5 h-5 text-sky-500" />, title: "Mobile Money in East Africa", desc: "M-Pesa's success in Kenya demonstrated how mobile money could diffuse rapidly in economies with limited banking infrastructure.", bg: "from-sky-50 to-white" },
    { icon: <Factory className="w-5 h-5 text-violet-500" />, title: "Industrial Cluster Diffusion", desc: "Japanese lean manufacturing diffused to South Korea, Taiwan, and China through FDI, supply chains, and managerial imitation.", bg: "from-violet-50 to-white" },
    { icon: <Sun className="w-5 h-5 text-amber-500" />, title: "Solar PV Diffusion", desc: "Solar technology diffused from Germany and Japan globally through learning-by-doing effects, government incentives, and falling costs.", bg: "from-amber-50 to-white" },
  ];

  return (
    <AnimatedSection id="examples" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Real World" title="Case Studies in Economic Diffusion" subtitle="Historical and contemporary examples demonstrating how diffusion has shaped economic development." />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {cases.map((cs) => (
            <FadeChild key={cs.title}>
              <div className={`p-6 rounded-2xl border border-gray-200/80 bg-gradient-to-br ${cs.bg} shadow-md shadow-slate-100/60 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300`}>
                <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 shadow-sm">{cs.icon}</div>
                <h3 style={playfair} className="text-[17px] font-bold text-slate-800 mb-2">{cs.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">{cs.desc}</p>
              </div>
            </FadeChild>
          ))}
        </StaggerChildren>

        {/* Spline 3D Innovation showcase */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <Card className="w-full h-[400px] bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden border-0 rounded-2xl">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="flex h-full">
              <div className="flex-1 p-8 md:p-10 relative z-10 flex flex-col justify-center">
                <h3 style={playfair} className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                  Innovation in Action
                </h3>
                <p className="text-neutral-400 max-w-md leading-relaxed text-[13.5px]">
                  Technology diffusion transforms economies through creative destruction. Interactive 3D visualization demonstrates the dynamic nature of innovation spread across global networks.
                </p>
              </div>
              <div className="flex-1 relative">
                <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ─── Five Stages (Glowing cards in a row) ─── */
function StagesSection() {
  const stages = [
    { num: "01", title: "Knowledge", desc: "Awareness of innovation exists; potential adopters learn about its existence and benefits.", icon: <Search className="h-4 w-4 text-sky-500" /> },
    { num: "02", title: "Persuasion", desc: "Potential adopters develop favorable or unfavorable attitudes toward the innovation.", icon: <Lightbulb className="h-4 w-4 text-violet-500" /> },
    { num: "03", title: "Decision", desc: "Actors choose to adopt or reject the innovation based on evaluation.", icon: <BarChart3 className="h-4 w-4 text-emerald-500" /> },
    { num: "04", title: "Implementation", desc: "Adopters put the innovation to use; practical challenges emerge.", icon: <Settings className="h-4 w-4 text-amber-500" /> },
    { num: "05", title: "Confirmation", desc: "Adopters seek reinforcement for their decision; may reverse if negative.", icon: <Zap className="h-4 w-4 text-rose-500" /> },
  ];

  return (
    <AnimatedSection id="stages" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/20 to-white pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Process" title="The Five Stages of Diffusion" subtitle="How innovations spread through an economic system over time." />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {stages.map((s) => (
            <FadeChild key={s.num}>
              <div className="relative h-full rounded-2xl border border-gray-200/80 p-1.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="relative flex flex-col gap-2.5 rounded-xl bg-white p-5 h-full text-center shadow-md shadow-slate-100/60 hover:shadow-lg transition-shadow duration-300">
                  <div style={playfair} className="text-4xl font-bold text-sky-400">{s.num}</div>
                  <div className="w-fit mx-auto rounded-lg bg-slate-50 border border-gray-100 p-2">{s.icon}</div>
                  <h3 style={playfair} className="text-[15px] font-bold text-slate-800">{s.title}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeChild>
          ))}
        </StaggerChildren>
      </div>
    </AnimatedSection>
  );
}

/* ─── Policy Tools (DisplayCards + list) ─── */
function PolicySection() {
  const cardData = [
    { icon: <GraduationCap className="size-4 text-sky-400" />, title: "Extension Services", description: "Technical assistance & training", date: "Government", titleClassName: "text-sky-600" },
    { icon: <Wifi className="size-4 text-violet-400" />, title: "Digital Infrastructure", description: "Connectivity reduces diffusion costs", date: "Investment", titleClassName: "text-violet-600" },
    { icon: <DollarSign className="size-4 text-emerald-400" />, title: "Subsidies & Incentives", description: "Reduce adoption costs for key tech", date: "Financial", titleClassName: "text-emerald-600" },
  ];

  const policiesRight = [
    { icon: <FlaskConical className="w-5 h-5 text-amber-500" />, title: "Demonstration Projects", desc: "Pilot programs that showcase innovations, creating visible proof of benefits and reducing uncertainty for potential adopters." },
    { icon: <Handshake className="w-5 h-5 text-sky-500" />, title: "Trade & Investment Policy", desc: "Opening markets to FDI and imported technologies creates channels for technology transfer and knowledge spillovers." },
    { icon: <UsersRound className="w-5 h-5 text-violet-500" />, title: "Network Formation", desc: "Supporting cooperatives, business associations, and peer learning networks that facilitate horizontal diffusion of innovations." },
  ];

  return (
    <AnimatedSection id="policy" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="Intervention" title="Policy Tools for Accelerating Diffusion" subtitle="How governments and institutions can facilitate the spread of beneficial innovations." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex min-h-[340px] items-center justify-center">
            <DisplayCards cards={cardData.map((p, i) => ({
              ...p,
              className: i === 0
                ? "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
                : i === 1
                  ? "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
                  : "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
            }))} />
          </div>

          <StaggerChildren className="space-y-3.5">
            {policiesRight.map((p) => (
              <FadeChild key={p.title}>
                <div className="flex gap-4 p-5 rounded-xl border border-gray-200/80 bg-white shadow-md shadow-slate-100/50 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-slate-50 border border-gray-100 flex items-center justify-center shrink-0">{p.icon}</div>
                  <div>
                    <h3 style={playfair} className="text-[15px] font-bold text-slate-800 mb-1">{p.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeChild>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── Path Forward + PulseBeams CTA ─── */
const pulseBeamConfig = [
  { path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5", gradientConfig: { initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" }, animate: { x1: ["0%","0%","200%"], x2: ["0%","0%","180%"], y1: ["80%","0%","0%"], y2: ["100%","20%","20%"] }, transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.2 } }, connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 },{ cx: 269, cy: 220.5, r: 6 }] },
  { path: "M568 200H841C846.523 200 851 195.523 851 190V40", gradientConfig: { initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" }, animate: { x1: ["20%","100%","100%"], x2: ["0%","90%","90%"], y1: ["80%","80%","-20%"], y2: ["100%","100%","0%"] }, transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.8 } }, connectionPoints: [{ cx: 851, cy: 34, r: 6.5 },{ cx: 568, cy: 200, r: 6 }] },
  { path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5", gradientConfig: { initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" }, animate: { x1: ["20%","100%","100%"], x2: ["0%","90%","90%"], y1: ["80%","80%","-20%"], y2: ["100%","100%","0%"] }, transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1.4 } }, connectionPoints: [{ cx: 142, cy: 427, r: 6.5 },{ cx: 425.5, cy: 274, r: 6 }] },
  { path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427", gradientConfig: { initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" }, animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" }, transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.5 } }, connectionPoints: [{ cx: 770, cy: 427, r: 6.5 },{ cx: 493, cy: 274, r: 6 }] },
  { path: "M380 168V17C380 11.4772 384.477 7 390 7H414", gradientConfig: { initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" }, animate: { x1: ["40%","0%","0%"], x2: ["10%","0%","0%"], y1: ["0%","0%","180%"], y2: ["20%","20%","200%"] }, transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1.0 } }, connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 },{ cx: 380, cy: 168, r: 6 }] },
];

function PathForwardSection() {
  return (
    <AnimatedSection className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <PulseBeams beams={pulseBeamConfig} gradientColors={{ start: "#0ea5e9", middle: "#6366f1", end: "#8b5cf6" }}
          className="bg-white min-h-[480px] !h-auto py-20 rounded-2xl border border-gray-200/80 shadow-xl shadow-slate-100/60"
          baseColor="rgba(30,58,138,0.12)" accentColor="rgba(30,58,138,0.25)">
          <div className="flex flex-col items-center gap-5 z-40 relative text-center px-6">
            <h2 style={playfair} className="text-3xl md:text-5xl font-bold text-blue-900">
              The Path Forward
            </h2>
            <p className="text-slate-400 max-w-lg text-[14px] leading-relaxed">
              Economic diffusion remains one of the most powerful mechanisms for accelerating development in low-income economies. Understanding how innovations spread is essential for policymakers seeking inclusive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 mt-3">
              <a href="https://github.com/Nhughes09/reactcomponentshheuristics" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-slate-50 hover:shadow-md transition-all text-slate-600 hover:text-slate-800 text-[13px] font-medium shadow-sm">
                <Github className="w-4 h-4" /> View on GitHub <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />
              </a>
              <a href="https://hheuristics.com" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 transition-all text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 text-[13px] font-medium">
                <Blocks className="w-4 h-4" /> HHeuristics <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </PulseBeams>
      </div>
    </AnimatedSection>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[13px] text-slate-400">Economic Diffusion — <a href="https://github.com/Nhughes09" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors">@Nhughes09</a></span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://hheuristics.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-slate-400 hover:text-slate-800 transition-colors">HHeuristics</a>
          <a href="https://github.com/Nhughes09/reactcomponentshheuristics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-slate-800 transition-colors">
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DefinitionSection />
      <ConceptsSection />
      <TheorySection />
      <CaseStudiesSection />
      <StagesSection />
      <PolicySection />
      <PathForwardSection />
      <Footer />
    </div>
  );
}
