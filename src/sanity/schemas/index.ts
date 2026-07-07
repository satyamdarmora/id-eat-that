import type { SchemaTypeDefinition } from "sanity";
import { articleSchema } from "./article";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articleSchema],
};
