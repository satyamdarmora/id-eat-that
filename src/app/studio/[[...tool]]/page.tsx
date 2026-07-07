import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream p-8">
        <div className="max-w-md text-center bg-white border-2 border-deep-plum rounded-3xl p-8 shadow-[6px_6px_0_#1A1A1A]">
          <h1 className="font-heading font-bold text-3xl text-deep-plum mb-4">
            Studio not configured yet 👨‍🍳
          </h1>
          <p className="text-muted leading-relaxed mb-4">
            Add your Sanity <code className="bg-soft-yellow px-1 rounded">PROJECT_ID</code>{" "}
            to <code className="bg-soft-yellow px-1 rounded">.env.local</code> and
            restart the dev server.
          </p>
          <p className="text-sm text-muted">
            Once configured, this page will load the article editor.
          </p>
        </div>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
