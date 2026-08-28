import './AmbientDots.css';

const DOTS = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7) % 100,
  size: 2 + (i % 4),
  delay: -(i % 10) * 1.7,
  duration: 14 + (i % 8) * 2.4,
  moveX: ((i % 5) - 2) * 38,
  moveY: ((i % 7) - 3) * 28,
}));

export default function AmbientDots({ intro = false }) {
  return (
    <div
      className={`ambient-dots ${
        intro ? 'ambient-dots--intro' : 'ambient-dots--site'
      }`}
      aria-hidden="true"
    >
      <div className="ambient-dots__glow ambient-dots__glow--one" />
      <div className="ambient-dots__glow ambient-dots__glow--two" />

      {DOTS.map((dot) => (
        <span
          key={dot.id}
          className="ambient-dots__dot"
          style={{
            '--x': `${dot.x}%`,
            '--y': `${dot.y}%`,
            '--size': `${dot.size}px`,
            '--delay': `${dot.delay}s`,
            '--duration': `${dot.duration}s`,
            '--move-x': `${dot.moveX}px`,
            '--move-y': `${dot.moveY}px`,
          }}
        />
      ))}
    </div>
  );
}