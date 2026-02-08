import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, type SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CTABanner`.
 */
type CTABannerProps = SliceComponentProps<Content.CtaBannerSlice>;

/**
 * Component for "CTABanner" Slices.
 */
const CTABanner: FC<CTABannerProps> = ({ slice }) => (
  <section
    style={{
      padding: "6rem 2.5rem",
      background: "linear-gradient(135deg, #E50051 0%, #B0003A 100%)",
      textAlign: "center",
      color: "white",
    }}
  >
    <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
      <PrismicRichText field={slice.primary.headline} />
    </div>

    <div style={{ maxWidth: "700px", margin: "0 auto 2rem" }}>
      <PrismicRichText field={slice.primary.description} />
    </div>

    <PrismicLink
      field={slice.primary.buttonLink}
      style={{
        background: "#B0003A",
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "0.5rem",
        fontWeight: 600,
        textDecoration: "none",
        display: "inline-block",
      }}
    >
      {slice.primary.buttonText || "Get started"}
    </PrismicLink>
  </section>
);

export default CTABanner;

