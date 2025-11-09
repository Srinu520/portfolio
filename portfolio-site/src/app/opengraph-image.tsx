import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  const name = 'Srinu Duggempudi';
  const tagline = 'Full Stack Developer · React · Next.js · Django';
  const domain = 'srinud.com';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1220 0%, #15223a 50%, #0b1220 100%)',
          color: '#e6ecff',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(1000px 600px at -10% -20%, rgba(93, 76, 255, 0.25), transparent 60%), radial-gradient(900px 500px at 120% 120%, rgba(0, 224, 255, 0.2), transparent 60%)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}> {name} </div>
          <div style={{ fontSize: 34, marginTop: 14, color: '#a8b2d1' }}>{tagline}</div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: 60,
            bottom: 40,
            fontSize: 26,
            color: '#8ea0c8',
            letterSpacing: 0.5,
          }}
        >
          {domain}
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}

