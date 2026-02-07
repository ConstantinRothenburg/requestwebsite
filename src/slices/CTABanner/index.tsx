const CTABanner = ({ slice }: any) => (
  <section style={{ padding: '6rem 2.5rem', background: 'linear-gradient(135deg, #E50051 0%, #B0003A 100%)', textAlign: 'center', color: 'white' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>{slice?.primary?.headline || 'Ready to join?'}</h2>
    <div style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>{slice?.primary?.text}</div>
    <a href={slice?.primary?.cta_link?.url || '#'} style={{ background: '#B0003A', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
      {slice?.primary?.cta_text || 'Get started'}
    </a>
  </section>
);

export default CTABanner;
