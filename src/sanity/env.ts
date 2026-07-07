export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "production",
);

// Public Sanity project ID for "Id Eat That". These NEXT_PUBLIC_* values are
// safe to expose (they ship in the client bundle); hardcoding them as defaults
// means the live site reads the CMS even if the host has no env vars set.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xt28yg9v";

export const isSanityConfigured = projectId.length > 0;

function assertValue<T>(v: T | undefined, fallback: T): T {
  return v ?? fallback;
}
