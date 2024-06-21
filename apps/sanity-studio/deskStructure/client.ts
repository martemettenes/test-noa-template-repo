import { StructureResolverContext } from "sanity/structure";

export function getClientFromContext(context: StructureResolverContext) {
	const client = context.getClient({ apiVersion: "2021-06-07" });
	return client;
}
