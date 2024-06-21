import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface MainMenuDrawerProps {
	children: React.ReactNode;
}

/** Navigation drawer for mobile screens */
const MainMenuDrawer = ({ children }: MainMenuDrawerProps) => {
	return (
		<div className="lg:hidden">
			<div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* Drawer toggle */}
					<label htmlFor="my-drawer" className="btn btn-square">
						<AiOutlineMenu className="text-xl" />
					</label>
				</div>
				{/* Drawer content */}
				<div className="drawer-side">
					<label htmlFor="my-drawer" className="drawer-overlay"></label>
					<ul className="menu menu-lg h-full w-1/2 bg-base-200 p-4 text-base-content">{children}</ul>
				</div>
			</div>
		</div>
	);
};
export default MainMenuDrawer;
