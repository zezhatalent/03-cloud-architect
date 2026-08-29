import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useTypewriter } from './hooks/useTypewriter';

function BlueprintGrid() {
  const { theme } = useTheme();
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-60"
      style={{
        backgroundImage: `linear-gradient(${theme.accent2}22 1px, transparent 1px), linear-gradient(90deg, ${theme.accent2}22 1px, transparent 1px)`,
        backgroundSize: '44px 44px',
      }}
    />
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
    <svg viewBox={`0 0 100 100`} className="w-full max-w-md" style={{ color: theme.accent2 }}>
      {/* connection lines draw in */}
      {[
        ['0,40', '40,3'],
        ['42,8', '75,18'],
        ['75,18', '60,55'],
        ['60,55', '25,70'],
        ['60,55', '82,70'],
        ['60,55', '50,88'],
      ].map(([from, to], i) => {
        const [x1, y1] = from.split(',').map(Number);
        const [x2, y2] = to.split(',').map(Number);
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 2 ? theme.accent2 : theme.accent}
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.25 }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <rect
            x={n.x - 9}
            y={n.y - 6}
            width="18"
            height="12"
            rx="2"
            fill="none"
            stroke={n.kind === 'db' ? theme.accent : theme.accent2}
            strokeWidth="0.8"
          />
          <text
            x={n.x}
            y={n.y}
            textAnchor="middle"
            fontSize="3.2"
            fill={theme.text}
            style={{ fontFamily: 'monospace' }}
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const { output } = useTypewriter('> Applying architecture best practices…', 45, 900);
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <BlueprintGrid />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${theme.bg}e6)` }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm"
            style={{ color: theme.accent }}
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            {content.role}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-5 font-mono text-sm"
            style={{ color: theme.muted }}
          >
            <span style={{ color: theme.accent }}>➜</span> {output}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg px-6 py-3 font-semibold"
              style={{ background: theme.accent, color: theme.bg }}
            >
              View architecture work
            </a>
            <a
              href="#contact"
              className="rounded-lg border px-6 py-3 font-semibold"
              style={{ borderColor: theme.accent2, color: theme.accent2 }}
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative"
        >
          <div
            className="absolute inset-0"
            style={{ boxShadow: `0 0 60px ${theme.accent2}33`, transform: 'translateY(10px)' }}
          />
          <InfraDiagram />
        </motion.div>
      </div>
    </section>
  );
}
