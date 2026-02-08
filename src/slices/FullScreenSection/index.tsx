import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getSliceAppearanceStyles } from "@/lib/sliceAppearance";

/**
 * Props for `FullScreenSection`.
 */
export type FullScreenSectionProps =
  SliceComponentProps<Content.FullScreenSectionSlice>;

/**
 * Component for "FullScreenSection" Slices.
 */
const FullScreenSection: FC<FullScreenSectionProps> = ({ slice }) => {
  const { sectionStyle, containerStyle } = getSliceAppearanceStyles(
    slice.primary,
  );
  const videoUrl = slice.primary.video_url || "";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        ...sectionStyle,
      }}
    >
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={videoUrl} />
        </video>
      ) : null}

      <div style={{ position: "relative", zIndex: 1, ...containerStyle }}>
        <strong>Full screen section content goes here.</strong>
      </div>
    </section>
  );
};

export default FullScreenSection;
