import type { CSSProperties } from "react";

type AppearanceFields = {
  appearance_background_color?: string | null;
  appearance_background_gradient?: string | null;
  appearance_background_image?: { url?: string | null } | null;
  appearance_text_color?: string | null;
  appearance_align?: "Left" | "Center" | "Right" | null;
  appearance_padding?: "S" | "M" | "L" | null;
  appearance_container_width?: "Narrow" | "Normal" | "Wide" | null;
};

const paddingMap: Record<NonNullable<AppearanceFields["appearance_padding"]>, string> = {
  S: "3rem 1.5rem",
  M: "5rem 2.5rem",
  L: "7rem 2.5rem",
};

const containerWidthMap: Record<
  NonNullable<AppearanceFields["appearance_container_width"]>,
  string
> = {
  Narrow: "720px",
  Normal: "1100px",
  Wide: "1400px",
};

export function getSliceAppearanceStyles(fields: AppearanceFields) {
  const sectionStyle: CSSProperties = {};
  const containerStyle: CSSProperties = {};

  if (fields.appearance_padding) {
    sectionStyle.padding = paddingMap[fields.appearance_padding];
  }

  if (fields.appearance_text_color) {
    sectionStyle.color = fields.appearance_text_color;
  }

  if (fields.appearance_align) {
    sectionStyle.textAlign = fields.appearance_align.toLowerCase() as CSSProperties["textAlign"];
  }

  if (fields.appearance_background_gradient) {
    sectionStyle.backgroundImage = fields.appearance_background_gradient;
  } else if (fields.appearance_background_image?.url) {
    sectionStyle.backgroundImage = `url(${fields.appearance_background_image.url})`;
    sectionStyle.backgroundSize = "cover";
    sectionStyle.backgroundPosition = "center";
    sectionStyle.backgroundRepeat = "no-repeat";
  }

  if (fields.appearance_background_color) {
    sectionStyle.backgroundColor = fields.appearance_background_color;
  }

  if (fields.appearance_container_width) {
    containerStyle.maxWidth = containerWidthMap[fields.appearance_container_width];
    containerStyle.margin = "0 auto";
    containerStyle.width = "100%";
  }

  return { sectionStyle, containerStyle };
}
