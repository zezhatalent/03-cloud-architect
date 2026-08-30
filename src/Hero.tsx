import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useTypewriter } from './hooks/useTypewriter';

function CloudSVG() {
  const { theme } = useTheme();
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cloud-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={theme.accent} stopOpacity="0.4" />
          <stop offset="1" stopColor={theme.accent2} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {[
        'M120,200 Q120,160 160,160 Q180,120 220,120 Q260,120 280,160 Q320,160 320,200 Q320,240 280,240 L160,240 Q120,240 120,200Z',
        'M400,180 Q400,140 440,140 Q460,100 500,100 Q540,100 560,140 Q600,140 600,180 Q600,220 560,220 L440,220 Q400,220 400,180Z',
        'M250,300 Q250,260 290,260 Q310,220 350,220 Q390,220 410,260 Q450,260 450,300 Q450,340 410,340 L290,340 Q250,340 250,300Z',
      ].map((d, i) => (
        <motion.path
          key={i} d={d} fill="none" stroke="url(#cloud-grad)" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
      {[
        { x1: 320, y1: 200, x2: 400, y2: 180 },
        { x1: 600, y1: 180, x2: 650, y2: 250 },
        { x1: 280, y1: 240, x2: 250, y2: 300 },
      ].map((l, i) => (
        <motion.line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={theme.accent2} strokeWidth="0.8" strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1 + i * 0.3 }}
        />
      ))}
      {[
        { cx: 220, cy: 180, r: 4 },
        { cx: 500, cy: 160, r: 4 },
        { cx: 350, cy: 280, r: 4 },
        { cx: 650, cy: 250, r: 3 },
      ].map((n, i) => (
        <motion.circle key={i} cx={n.cx} cy={n.cy} r={n.r}
          fill={i % 2 === 0 ? theme.accent : theme.accent2}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.6, delay: 1.5 + i * 0.2 }}
        />
      ))}
    </svg>
  );
}

type Node = { x: number; y: number; label: string; kind: string };
const nodes: Node[] = [
  { x: 0, y: 40, label: 'Client', kind: 'web' },
  { x: 40, y: 3, label: 'CDN', kind: 'cloud' },
  { x: 75, y: 18, label: 'Load Balancer', kind: 'lb' },
  { x: 60, y: 55, label: 'API Servers', kind: 'server' },
  { x: 25, y: 70, label: 'Cache', kind: 'db' },
  { x: 82, y: 70, label: 'Database', kind: 'db' },
  { x: 50, y: 88, label: 'Queues', kind: 'queue' },
];

function InfraDiagram() {
  const { theme } = useTheme();
  return (
    <svg viewBox="0 0 100 100" className="w-full max-w-md" style={{ color: theme.accent2 }}>
      {[
        ['0,40', '40,3'], ['42,8', '75,18'], ['75,18', '60,55'],
        ['60,55', '25,70'], ['60,55', '82,70'], ['60,55', '50,88'],
      ].map(([from, to], i) => {
        const [x1, y1] = from.split(',').map(Number);
        const [x2, y2] = to.split(',').map(Number);
        return (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i % 2 ? theme.accent2 : theme.accent} strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.25 }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.g key={n.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <rect x={n.x - 9} y={n.y - 6} width="18" height="12" rx="2" fill="none"
            stroke={n.kind === 'db' ? theme.accent : theme.accent2} strokeWidth="0.8" />
          <text x={n.x} y={n.y} textAnchor="middle" fontSize="3.2" fill={theme.text}
            style={{ fontFamily: 'monospace' }}>{n.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}

function FloatingCloud({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  const { theme } = useTheme();
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y }}
      animate={{ y: [0, -18, 0], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M4 16Q4 12 8 12Q9 8 13 8Q17 8 18 12Q22 12 22 16Q22 20 18 20L6 20Q4 20 4 16Z"
          stroke={theme.accent} strokeWidth="0.5" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const { output } = useTypewriter('> Applying architecture best practices...', 45, 900);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, 1], [-10, 10]);
  const bgY = useTransform(mouseY, [0, 1], [-10, 10]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <div className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(${theme.accent2}22 1px, transparent 1px), linear-gradient(90deg, ${theme.accent2}22 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }} />
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: bgX, y: bgY }}>
        <CloudSVG />
      </motion.div>
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${theme.bg}e6)` }} />

      <FloatingCloud delay={0} x="5%" y="15%" size={35} />
      <FloatingCloud delay={2} x="90%" y="20%" size={28} />
      <FloatingCloud delay={1} x="80%" y="75%" size={32} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-sm" style={{ color: theme.accent }}>
            Hello, I&apos;m
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl" style={{ color: theme.text }}>
            {content.name.split('').map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.03 }}>{char}</motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-3 text-xl font-semibold" style={{ color: theme.accent }}>
            {content.role}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-5 font-mono text-sm" style={{ color: theme.muted }}>
            <span style={{ color: theme.accent }}>{'\u27A4'}</span> {output}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="mt-9 flex flex-wrap gap-4">
            <motion.a href="#projects" className="rounded-lg px-6 py-3 font-semibold" style={{ background: theme.accent, color: theme.bg }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}66` }} whileTap={{ scale: 0.95 }}>
              View architecture work
            </motion.a>
            <motion.a href="#contact" className="rounded-lg border px-6 py-3 font-semibold" style={{ borderColor: theme.accent2, color: theme.accent2 }}
              whileHover={{ scale: 1.05, backgroundColor: `${theme.accent2}15` }} whileTap={{ scale: 0.95 }}>
              Contact me
            </motion.a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="relative">
          <div className="absolute inset-0" style={{ boxShadow: `0 0 60px ${theme.accent2}33`, transform: 'translateY(10px)' }} />
          <InfraDiagram />
        </motion.div>
      </div>
    </section>
  );
}
