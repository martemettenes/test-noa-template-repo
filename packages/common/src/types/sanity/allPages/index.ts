import { z } from "zod";

import { FooterSchema } from "./footer";
import { MainMenuSchema } from "./mainMenu";

export const MainMenuAndFooterSchema = z.object({
	mainMenu: MainMenuSchema,
	footer: FooterSchema,
});
export type MainMenuAndFooter = z.infer<typeof MainMenuAndFooterSchema>;
