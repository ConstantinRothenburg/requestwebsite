const FeaturesGrid = ({ slice }: any) => (
  <section style={{ padding: '6rem 2.5rem', background: '#F8F9FA' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 700, marginBottom: '4rem', color: '#1B263B' }}>
      {slice?.primary?.title || 'Network & Connect'}
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {(slice?.items || []).map((feature: any, i: number) => (
        <div key={i} style={{ background: 'white', border: '1px solid #E0E1DD', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1B263B', marginBottom: '1rem' }}>{feature?.title}</h4>
          <p style={{ color: '#415A77', lineHeight: 1.6 }}>{feature?.description}</p>
          {feature?.link?.url ? (
            <a href={feature.link.url} style={{ color: '#E50051', fontWeight: 500 }}>
              Learn more -&gt;
            </a>
          ) : null}
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesGrid;
