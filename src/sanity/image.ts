import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId, isSanityConfigured } from "./env";

type SanityImageSource = Parameters<
  ReturnType<typeof createImageUrlBuilder>["image"]
>[0];

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}
