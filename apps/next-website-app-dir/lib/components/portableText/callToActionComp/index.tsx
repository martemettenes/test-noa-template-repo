import { callToActionSerializer } from "./internalSerializer";
import { PortableText } from "@portabletext/react";
import { CallToActionBlockComp } from "common/src/types/sanity/callToAction";
import Link from "next/link";

interface Props {
	fields: CallToActionBlockComp;
}

/**
 * Handles the Call to Action (portable text) component from Sanity
 */
export default function CallToActionComp({ fields }: Props): JSX.Element {
	return (
		<div className="card m-0 flex flex-col gap-4 rounded-xl bg-secondary bg-opacity-20 p-8 text-left">
			<h2 className="mt-0">{fields.title}</h2>
			<PortableText value={fields.bodyBlock} components={callToActionSerializer} />
			<Link className="btn btn-secondary w-fit text-white no-underline" href={fields.callToActionButton.url}>
				{fields.callToActionButton.label}
			</Link>
		</div>
	);
}
