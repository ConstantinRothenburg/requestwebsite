from __future__ import annotations

from pathlib import Path
import json
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.rstrip() + "\n", encoding="utf-8")


def write_json(path: Path,  dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def ensure_custom_type(type_id: str, label: str, placeholders: dict[str, str]) -> None:
    ct_dir = ROOT / "customtypes" / type_id
    ct_dir.mkdir(parents=True, exist_ok=True)

    idx = ct_dir / "index.json"
    if idx.exists() and idx.is_dir():
        shutil.rmtree(idx)

    model = {
        "id": type_id,
        "label": label,
        "format": "custom",
        "repeatable": False,
        "status": True,
        "json": {
            "Main": {
                "title": {
                    "type": "StructuredText",
                    "config": {
                        "label": "Title",
                        "placeholder": placeholders.get("title", ""),
                        "single": "heading1",
                    },
                },
                "content": {
                    "type": "StructuredText",
                    "config": {
                        "label": "Content",
                        "placeholder": placeholders.get("content", ""),
                        "multi": "paragraph,strong,em,hyperlink,list-item,o-list-item",
                    },
                },
            },
            "SEO & Metadata": {
                "meta_title": {
                    "type": "Text",
                    "config": {
                        "label": "Meta Title",
                        "placeholder": placeholders.get("meta_title", ""),
                    },
                },
                "meta_description": {
                    "type": "Text",
                    "config": {
                        "label": "Meta Description",
                        "placeholder": placeholders.get("meta_description", ""),
                    },
                },
            },
        },
    }

    write_json(idx, model)


def patch_prismicio_routes() -> None:
    p = ROOT / "src" / "prismicio.ts"
    if not p.exists():
        return

    t = p.read_text(encoding="utf-8")

    imprint_line = '  { type: "imprint", path: "/imprint" },'
    privacy_line = '  { type: "privacy_policy", path: "/privacy" },'

    if imprint_line in t and privacy_line in t:
        return

    m = re.search(r"const routes: Route\[] = \[(?P<body>[\s\S]*?)\n\];", t)
    if not m:
        return

    body = m.group("body")

    if imprint_line not in body:
        body = body.rstrip() + "\n" + imprint_line
    if privacy_line not in body:
        body = body.rstrip() + "\n" + privacy_line

    t = t[: m.start("body")] + body + t[m.end("body") :]
    p.write_text(t, encoding="utf-8")


def ensure_app_pages() -> None:
    write_text(
        ROOT / "src" / "app" / "imprint" / "page.tsx",
        """import type { Metadata } from \"next\";
import { notFound } from \"next/navigation\";
import { PrismicRichText } from \"@prismicio/react\";
import { createClient } from \"@/prismicio\";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const doc = await client.getSingle(\"imprint\").catch(() => null);
  if (!doc) return {};

  return {
    title: doc.data.meta_title || \"Imprint\",
    description: doc.data.meta_description || undefined,
  };
}

export default async function ImprintPage() {
  const client = createClient();
  const doc = await client.getSingle(\"imprint\").catch(() => null);
  if (!doc) notFound();

  return (
    <main style={{ maxWidth: 900, margin: \"0 auto\", padding: \"5rem 1.5rem\" }}>
      <PrismicRichText field={doc.data.title} />
      <PrismicRichText field={doc.data.content} />
    </main>
  );
}
""",
    )

    write_text(
        ROOT / "src" / "app" / "privacy" / "page.tsx",
        """import type { Metadata } from \"next\";
import { notFound } from \"next/navigation\";
import { PrismicRichText } from \"@prismicio/react\";
import { createClient } from \"@/prismicio\";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const doc = await client.getSingle(\"privacy_policy\").catch(() => null);
  if (!doc) return {};

  return {
    title: doc.data.meta_title || \"Privacy Policy\",
    description: doc.data.meta_description || undefined,
  };
}

export default async function PrivacyPage() {
  const client = createClient();
  const doc = await client.getSingle(\"privacy_policy\").catch(() => null);
  if (!doc) notFound();

  return (
    <main style={{ maxWidth: 900, margin: \"0 auto\", padding: \"5rem 1.5rem\" }}>
      <PrismicRichText field={doc.data.title} />
      <PrismicRichText field={doc.data.content} />
    </main>
  );
}
""",
    )

    write_text(
        ROOT / "src" / "app" / "datenschutz" / "page.tsx",
        "export { default, generateMetadata } from \"../privacy/page\";\n",
    )


def patch_eslint_config() -> None:
    p = ROOT / "eslint.config.mjs"
    if not p.exists():
        return

    t = p.read_text(encoding="utf-8")
    if "__dirname" not in t and "fileURLToPath" not in t and "__filename" not in t:
        return

    filtered = [
        ln
        for ln in t.splitlines()
        if all(x not in ln for x in ("__dirname", "__filename", "fileURLToPath", "dirname"))
    ]

    p.write_text("\n".join(filtered).strip() + "\n", encoding="utf-8")


def patch_legacy_js() -> None:
    p = ROOT / "src" / "js" / "index.js"
    if not p.exists():
        return

    t = p.read_text(encoding="utf-8")
    t = t.replace("form.addEventListener('submit', (e) => {", "form.addEventListener('submit', () => {")
    t = t.replace("  const name = field.name;\n", "")
    p.write_text(t, encoding="utf-8")


def main() -> None:
    ensure_custom_type(
        "imprint",
        "Imprint",
        {
            "title": "Imprint / Impressum",
            "content": "Legal imprint content...",
            "meta_title": "Imprint - Request Website",
            "meta_description": "Legal imprint information",
        },
    )

    ensure_custom_type(
        "privacy_policy",
        "Privacy Policy",
        {
            "title": "Privacy Policy / Datenschutz",
            "content": "Privacy policy content...",
            "meta_title": "Privacy Policy - Request Website",
            "meta_description": "Privacy policy information",
        },
    )

    patch_prismicio_routes()
    ensure_app_pages()
    patch_eslint_config()
    patch_legacy_js()


if __name__ == "__main__":
    main()
    print("OK")
