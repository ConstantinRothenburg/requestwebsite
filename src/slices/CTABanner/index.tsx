import { type FC } from "react";
import { type Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import { getSliceAppearanceStyles } from "@/lib/sliceAppearance";

/**
 * Props for `CTABanner`.
 */
type CTABannerProps = SliceComponentProps<Content.CtaBannerSlice>;

/**
 * Component for "CTABanner" Slices.
 */
const CTABanner: FC<CTABannerProps> = ({ slice }) => {
  const { sectionStyle, containerStyle } = getSliceAppearanceStyles(
    slice.primary,
  );

  return (
    <section
      style={{
        padding: "6rem 2.5rem",
        background: "linear-gradient(135deg, #E50051 0%, #B0003A 100%)",
        textAlign: "center",
        color: "white",
        ...sectionStyle,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", ...containerStyle }}>
        <div
          style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}
        >
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
      </div>
    </section>
  );
};

export default CTABanner;

