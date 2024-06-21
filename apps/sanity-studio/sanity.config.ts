import { structure } from "./deskStructure";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

export default defineConfig({
	name: "default",
	title: "Bookstore Demo",

	projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || "",
	dataset: process.env.SANITY_STUDIO_API_DATASET || "",

	plugins: [structureTool({ structure }), visionTool(), media()],

	schema: {
		types: schemaTypes,
	},
});
