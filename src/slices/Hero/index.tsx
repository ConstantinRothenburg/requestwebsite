import { type FC } from "react";
import { type Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import { getSliceAppearanceStyles } from "@/lib/sliceAppearance";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

type HeroButton = Content.HeroSlice["primary"]["buttons"][number];
type HeroButtonWithMeta = HeroButton & {
  text?: string | null;
  variant?: "Primary" | "Secondary" | null;
};

const Hero: FC<HeroProps> = ({ slice }) => {
  const buttons = (slice.primary.buttons ?? []) as HeroButtonWithMeta[];
  const { sectionStyle, containerStyle } = getSliceAppearanceStyles(
    slice.primary,
  );
  
  return (
    <section
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #E50051 0%, #B0003A 100%)",
        color: "white",
        padding: "6rem 2.5rem",
        ...sectionStyle,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          ...containerStyle,
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

          <div
            style={{ fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}
          >
            <PrismicRichText field={slice.primary.subtitle} />
          </div>

          {buttons.length > 0 && (
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {buttons.map((btn, i) => (
                <PrismicLink
                  key={i}
                  field={btn}
                  style={{
                    background:
                        btn.variant === "Secondary" ? "transparent" : "#E50051",
                    border:
                      btn.variant === "Secondary"
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
      </div>
    </section>
  );
};

export default Hero;

