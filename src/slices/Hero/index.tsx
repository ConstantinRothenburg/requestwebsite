import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, type SliceComponentProps } from "@prismicio/react";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

// Safe typing for repeatable buttons (Link with text/variant)
type ButtonItem = {
  key?: string;
  text?: string;
  variant?: "Primary" | "Secondary";
  // Link fields (inferred from Prismic Link type)
  link?: {
    id?: string;
    type?: string;
    uid?: string;
    url?: string;
    target?: string;
  };
};

const Hero: FC<HeroProps> = ({ slice }) => {
  const buttons = (slice.primary.buttons ?? []) as ButtonItem[];
  
  return (
    <section
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #E50051 0%, #B0003A 100%)",
        color: "white",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "6rem 2.5rem",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ color: "#FF4D7F", fontWeight: 500 }}>
          {slice.primary.tagline}
        </div>

        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            lineHeight: 1.2,
            margin: "1rem 0",
          }}
        >
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
          <PrismicRichText field={slice.primary.subtitle} />
        </div>

        {buttons.length > 0 && (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {buttons.map((btn, i) => (
              <PrismicLink
                key={btn.key ?? i}
                field={btn.link ?? undefined}
                style={{
                  background: btn.variant === "Secondary" ? "transparent" : "#E50051",
                  border: btn.variant === "Secondary" 
                    ? "1px solid rgba(255,255,255,0.7)" 
                    : "1px solid #E50051",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                {btn.text ?? "Learn more"}
              </PrismicLink>
            ))}
          </div>
        )}
      </div>

      <div style={{ background: "rgba(255,255,255,0.1)" }} />
    </section>
  );
};

export default Hero;

