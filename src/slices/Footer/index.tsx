import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicLink, type SliceComponentProps } from "@prismicio/react";
import { getSliceAppearanceStyles } from "@/lib/sliceAppearance";

/**
 * Props for `Footer`.
 */
type FooterProps = SliceComponentProps<Content.FooterSlice>;

type FooterLinkItem = Content.FooterSlice["primary"]["links"][number];

/**
 * Component for "Footer" Slices.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  const { sectionStyle, containerStyle } = getSliceAppearanceStyles(
    slice.primary,
  );

  return (
    <footer
      style={{
        background: "#1B263B",
        color: "white",
        padding: "3rem 2.5rem",
        textAlign: "center",
        ...sectionStyle,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", ...containerStyle }}>
        <p style={{ marginBottom: "1rem" }}>
          {slice.primary.copyrightText || "© 2026 Request"}
        </p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {(slice.primary.links || []).map((item: FooterLinkItem, i: number) => (
            <PrismicLink
              key={i}
              field={item.url}
              style={{ color: "#FF4D7F", textDecoration: "none" }}
            >
              {item.label}
            </PrismicLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

