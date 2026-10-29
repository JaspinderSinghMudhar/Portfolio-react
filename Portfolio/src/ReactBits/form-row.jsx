import { useRef } from 'react';
import LaserFlow from '../components/LaserFlow';

export default function Form() {
  const cardRef = useRef(null);

  return (
    <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
      <LaserFlow
        surfaceRef={cardRef}
        beamPosition={0.5}
        color="#2bc20e"
        intensity={0.5}
        flare={1.5}
        spread={2}
        spill={1.4}
        fog={0.45}
        dust={1.6}
        revealImage="/your-ui.png"
        revealRadius={350}
        revealOpacity={0.6}
  beamWidth={0.75}
  streaks={0.85}
  dots={1}
  pulse={0.8}
  speed={1.65}
  seed={4}
  mouseInteraction
  intro
/>

      <div
        ref={cardRef}
        style={{
          position: 'absolute',
          left: '18%',
          right: '28%',
          top: '52%',
          bottom: '-24px',
          borderRadius: '14px',
          background: '#0b0b0d'
        }}
      >
        <h1>Hellow Wiold</h1>
      </div>
    </div>
  );
}