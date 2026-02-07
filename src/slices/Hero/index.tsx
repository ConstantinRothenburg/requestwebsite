import React from 'react';

const Hero = ({ slice }: any) => {
  return (
    <section
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #E50051 0%, #B0003A 100%)',
        color: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        padding: '6rem 2.5rem',
        gap: '4rem',
        alignItems: 'center',
      }}
    >
      <div>
        <div style={{ color: '#FF4D7F', fontWeight: 500 }}>{slice?.primary?.tagline}</div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, margin: '1rem 0' }}>
          {slice?.primary?.headline}
        </h1>
        <div style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          {slice?.primary?.subheadline}
        </div>
        <a
          href={slice?.primary?.primary_cta_link?.url || '#'}
          style={{
            background: '#E50051',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          {slice?.primary?.primary_cta_text || 'Get started'}
        </a>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.1)' }} />
    </section>
  );
};

export default Hero;
