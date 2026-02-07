import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

type AnyDocument = Record<string, any>;

type UrlResolution = {
  urlPath: string;
  isHomePage: boolean;
};

const PAGE_MODEL = "Page";
const LEGAL_MODEL = "LegalPage";
const SETTINGS_MODEL = "SiteSettings";

const PAGE_URLS: Record<string, UrlResolution> = {
  "index.html": { urlPath: "/", isHomePage: true },
  "imprint.html": { urlPath: "/pages/imprint.html", isHomePage: false },
  "privacy.html": { urlPath: "/pages/privacy.html", isHomePage: false },
};

const FILE_PATH_KEYS = [
  "filePath",
  "path",
  "srcPath",
  "sourcePath",
  "__metadata.filePath",
  "__metadata.path",
];

function getNestedValue(obj: AnyDocument, path: string): string | null {
  return path.split(".").reduce((value: any, key) => value?.[key], obj) ?? null;
}

function getDocumentFilePath(document: AnyDocument): string | null {
  if (!document) return null;

  for (const key of FILE_PATH_KEYS) {
    const value = key.includes(".")
      ? getNestedValue(document, key)
      : document[key];
    if (typeof value === "string" && value.length > 0) {
      return value;
    }
  }

  if (typeof document.srcObject?.path === "string") {
    return document.srcObject.path;
  }

  if (typeof document.srcObject?.filePath === "string") {
    return document.srcObject.filePath;
  }

  return null;
}

function resolveUrlFromFilePath(filePath: string): UrlResolution | null {
  const normalized = filePath.replace(/\\/g, "/");
  const match = normalized.split("/").pop();
  if (!match) return null;
  return PAGE_URLS[match] ?? null;
}

function resolveUrlFromDocument(document: AnyDocument): UrlResolution | null {
  const filePath = getDocumentFilePath(document);
  if (filePath) {
    const resolved = resolveUrlFromFilePath(filePath);
    if (resolved) return resolved;
  }

  const slug =
    document?.data?.slug ||
    document?.fields?.slug ||
    document?.slug ||
    document?.data?.title;

  if (typeof slug === "string" && slug.length > 0) {
    const safeSlug = slug
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    return {
      urlPath: `/pages/${safeSlug}.html`,
      isHomePage: safeSlug === "index" || safeSlug === "home",
    };
  }

  return null;
}

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  devCommand: "python3 -m http.server 5501 --directory src",
  
  experimental: {
    ssg: {
      name: "custom",
      logPatterns: {
        up: ["Serving HTTP"]
      },
      directoryChangePattern: "src"
    }
  },

  // Git CMS Content Source
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/pages", "src/config"],
      models: [PAGE_MODEL, LEGAL_MODEL, SETTINGS_MODEL],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/assets",
        uploadDir: "src/assets/images/uploads",
        publicPath: "/assets"
      }
    })
  ],

  modelExtensions: [
    { name: PAGE_MODEL, type: "page" },
    { name: LEGAL_MODEL, type: "page" },
  ],
  
  models: [
    {
      name: PAGE_MODEL,
      type: "page",
      label: "Homepage",
      filePath: "src/pages/index.html",
      fields: [
        { name: "title", type: "string", default: "Home" },
        {
          name: "hero",
          type: "object",
          label: "Hero Section",
          fields: [
            {
              name: "subtitle",
              type: "text",
              label: "Hero Subtitle",
              default: "Connect with projects that cut emissions. Get matched in days, not months."
            },
            {
              name: "ctas",
              type: "list",
              label: "Hero Call-to-Actions",
              items: {
                type: "object",
                fields: [
                  { name: "text", type: "string", label: "Button Text" },
                  { name: "url", type: "string", label: "Button URL" },
                  {
                    name: "style",
                    type: "enum",
                    label: "Style",
                    options: ["primary", "secondary", "outline", "white"]
                  },
                ],
              },
            },
          ],
        },
        {
          name: "section1",
          type: "object",
          label: "Section 1: Deep Dive",
          fields: [
            { 
              name: "headline", 
              type: "string",
              default: "YOUR DEEP DIVE INTO CLIMATE CHANGE SOLUTIONS"
            },
            { name: "description", type: "text" },
            { name: "backgroundVideo", type: "file", label: "Background Video" },
            { name: "poster", type: "image", label: "Video Poster" },
          ],
        },
        {
          name: "section2",
          type: "object",
          label: "Section 2: Global Innovations",
          fields: [
            { 
              name: "headline", 
              type: "string",
              default: "EXPLORE GLOBAL INNOVATIONS"
            },
            { name: "description", type: "text" },
            { name: "backgroundVideo", type: "file", label: "Background Video" },
            { name: "poster", type: "image", label: "Video Poster" },
          ],
        },
        {
          name: "section3",
          type: "object",
          label: "Section 3: Network",
          fields: [
            { 
              name: "headline", 
              type: "string",
              default: "NETWORK WITH GAMECHANGERS AND PROJECTS"
            },
            { name: "description", type: "text" },
            { name: "backgroundVideo", type: "file", label: "Background Video" },
            { name: "poster", type: "image", label: "Video Poster" },
          ],
        },
        {
          name: "section4",
          type: "object",
          label: "Section 4: Register",
          fields: [
            { 
              name: "headline", 
              type: "string",
              default: "REGISTER AND SHOWCASE YOUR VISION"
            },
            { name: "description", type: "text" },
            { name: "backgroundVideo", type: "file", label: "Background Video" },
            { name: "poster", type: "image", label: "Video Poster" },
          ],
        },
        {
          name: "section5",
          type: "object",
          label: "Section 5: Join Movement",
          fields: [
            { name: "headline", type: "string" },
            { name: "description", type: "text" },
            { name: "backgroundVideo", type: "file", label: "Background Video" },
            { name: "poster", type: "image", label: "Video Poster" },
          ],
        },
        {
          name: "section6",
          type: "object",
          label: "Section 6: Save Planet",
          fields: [
            { name: "headline", type: "string" },
            { name: "description", type: "text" },
            { name: "backgroundImage", type: "image", label: "Background Image" },
          ],
        },
        {
          name: "section7",
          type: "object",
          label: "Section 7: Impact 2025",
          fields: [
            { name: "headline", type: "string" },
            { name: "description", type: "text" },
            { name: "backgroundColor", type: "color", default: "#208380" },
          ],
        },
        {
          name: "section8",
          type: "object",
          label: "Section 8",
          fields: [
            { name: "headline", type: "string" },
            { name: "description", type: "text" },
          ],
        },
        {
          name: "section9",
          type: "object",
          label: "Section 9: Climate Action Network",
          fields: [
            { 
              name: "headline", 
              type: "string",
              default: "CLIMATE ACTION NETWORK"
            },
            { name: "description", type: "text" },
          ],
        },
        {
          name: "form",
          type: "object",
          label: "Registration Form",
          fields: [
            { 
              name: "title", 
              type: "string",
              default: "Join 100+ organizations"
            },
            { 
              name: "description", 
              type: "text",
              default: "Get matched with climate projects in your area."
            },
            { 
              name: "successMessage", 
              type: "text",
              default: "Thank you for registering!"
            },
          ],
        },
      ],
    },
    {
      name: LEGAL_MODEL,
      type: "page",
      label: "Legal Page",
      fields: [
        { name: "title", type: "string" },
        { name: "slug", type: "string" },
        { name: "body", type: "richText" },
        { name: "lastUpdated", type: "string" },
      ],
    },
    {
      name: SETTINGS_MODEL,
      type: "data",
      label: "Site Settings",
      filePath: "src/config/site-config.yaml",
      fields: [
        { name: "siteTitle", type: "string", default: "Request - Climate Action Platform" },
        { name: "siteDescription", type: "text" },
        { name: "siteUrl", type: "string", default: "https://fascinating-hummingbird-07da62.netlify.app" },
        {
          name: "seo",
          type: "object",
          label: "SEO Settings",
          fields: [
            { name: "metaDescription", type: "text" },
            { 
              name: "keywords", 
              type: "list", 
              label: "Keywords",
              items: { type: "string" } 
            },
            { name: "socialImage", type: "image", label: "Social Media Image" },
          ],
        },
        {
          name: "colors",
          type: "object",
          label: "Theme Colors",
          fields: [
            { name: "primary", type: "color", default: "#208380" },
            { name: "secondary", type: "color", default: "#5E5240" },
            { name: "accent", type: "color", default: "#ff005a" },
            { name: "background", type: "color", default: "#0a0a0a" },
            { name: "text", type: "color", default: "#ffffff" },
          ],
        },
      ],
    },
  ],
  
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((model) => model.type === "page");

    return documents
      .filter((document) =>
        pageModels.some((model) => model.name === document.modelName)
      )
      .map((document) => {
        const resolved = resolveUrlFromDocument(document as AnyDocument);
        if (!resolved) {
          return null;
        }

        const stableId =
          document.id || getDocumentFilePath(document as AnyDocument) || document.modelName;

        return {
          stableId,
          urlPath: resolved.urlPath,
          document,
          isHomePage: resolved.isHomePage,
        } as SiteMapEntry;
      })
      .filter(Boolean) as SiteMapEntry[];
  },
});
