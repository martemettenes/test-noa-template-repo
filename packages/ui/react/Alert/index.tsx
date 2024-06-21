import { cn } from "common/src/utils/cn";
import { ReactNode } from "react";
import {
	HiOutlineCheckCircle,
	HiOutlineExclamation,
	HiOutlineExclamationCircle,
	HiOutlineInformationCircle,
} from "react-icons/hi";

interface Props {
	/** Specify alert type */
	alertType?: "error" | "info" | "warn" | "success";
	/** Specify component children */
	children?: ReactNode;
	/** Add an optional class */
	className?: string;
	/** Add alert title */
	title?: string;
}

const Alert: React.FC<Props> = ({ alertType, children, className, title }) => {
	const iconClass = cn("w-8 h-8");

	// render icon based on alert type
	const icon =
		alertType === "error" ? (
			<HiOutlineExclamationCircle className={iconClass} />
		) : alertType === "info" ? (
			<HiOutlineInformationCircle className={iconClass} />
		) : alertType === "warn" ? (
			<HiOutlineExclamation className={iconClass} />
		) : (
			<HiOutlineCheckCircle className={iconClass} />
		);

	const componentClass = cn(
		"alert",
		{
			"alert-error": alertType === "error",
			"alert-info": alertType === "info",
			"alert-warning": alertType === "warn",
			"alert-success": alertType === "success",
		},
		className
	);

	return (
		<div className={componentClass}>
			{icon}
			<div>
				{title && <p className="font-bold">{title}</p>}
				{children}
			</div>
		</div>
	);
};
export default Alert;
