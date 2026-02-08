import { type FC } from "react";
import { type Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import { getSliceAppearanceStyles } from "@/lib/sliceAppearance";

/**
 * Props for `FeaturesGrid`.
 */
type FeaturesGridProps = SliceComponentProps<Content.FeaturesGridSlice>;

type FeatureItem = Content.FeaturesGridSlice["primary"]["features"][number];

/**
 * Component for "FeaturesGrid" Slices.
 */
const FeaturesGrid: FC<FeaturesGridProps> = ({ slice }) => {
  const { sectionStyle, containerStyle } = getSliceAppearanceStyles(
    slice.primary,
  );

  return (
    <section style={{ padding: "6rem 2.5rem", background: "#F8F9FA", ...sectionStyle }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", ...containerStyle }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {(slice.primary.features || []).map((feature: FeatureItem, i: number) => (
            <div
              key={i}
              style={{
                background: "white",
                border: "1px solid #E0E1DD",
                borderRadius: "1rem",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#1B263B",
                  marginBottom: "1rem",
                }}
              >
                {feature.title}
              </h4>

              <div style={{ color: "#415A77", lineHeight: 1.6 }}>
                <PrismicRichText field={feature.description} />
              </div>

              {feature.link ? (
                <div style={{ marginTop: "1rem" }}>
                  <PrismicLink
                    field={feature.link}
                    style={{ color: "#E50051", fontWeight: 500 }}
                  >
                    {feature.link.text || "Learn more →"}
                  </PrismicLink>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

