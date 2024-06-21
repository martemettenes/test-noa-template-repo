import ThemeSwitcher from "../ThemeSwitcher";
import MainMenuDrawer from "./components";
import { schemaTypes } from "common/src/sanity/SchemaType";
import type { MainMenu } from "common/src/types/sanity/allPages/mainMenu";
import Link from "next/link";

interface Props {
	mainMenuData: MainMenu;
	previewActive?: boolean;
}

export default function MainMenuComp({ mainMenuData, previewActive }: Props): JSX.Element {
	// Don't face plant if no data has been added in Sanity
	if (!mainMenuData)
		return (
			<div className="bg-orange-400 p-4">
				<p>⚠️ The main menu data could not be loaded</p>
			</div>
		);

	const items = (
		<>
			{mainMenuData.menuItems.map((item) => {
				if (item._type === schemaTypes.MAIN_MENU_ACTION_ITEM_OBJECT) {
					return (
						<li key={item._key}>
							<Link href={item.url}>{item.label}</Link>
						</li>
					);
				} else {
					return (
						<li className="dropdown" key={item._key} tabIndex={0}>
							<a>
								{item.label}
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul className="rounded-box lg:dropdown-content lg:z-[1] lg:mt-3 lg:w-full lg:bg-base-200 lg:p-2 lg:shadow-md lg:before:w-0">
								{item.subItems.map((subItem) => {
									if (subItem.url.startsWith("http")) {
										return (
											<li key={subItem._key}>
												<a href={subItem.url} target="_blank" rel="noreferrer">
													{subItem.label}
												</a>
											</li>
										);
									}
									return (
										<li key={subItem._key}>
											<Link href={subItem.url}>{subItem.label}</Link>
										</li>
									);
								})}
							</ul>
						</li>
					);
				}
			})}
			<ThemeSwitcher />
		</>
	);

	return (
		<header className="z-10 bg-base-200">
			{previewActive && (
				<div className="bg-orange-400 p-4">
					Preview is active {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
					<a href="/api/exit-preview" className="text-blue-400 underline">
						Disable preview mode
					</a>
				</div>
			)}
			<nav className="navbar mx-auto max-w-screen-2xl px-4">
				<div className="w-full justify-between">
					<Link className="font-bold" href="/">
						Template repo bookstore
					</Link>
					<ul className="menu menu-horizontal hidden items-center lg:flex">{items}</ul>
					<MainMenuDrawer>{items}</MainMenuDrawer>
				</div>
			</nav>
		</header>
	);
}
