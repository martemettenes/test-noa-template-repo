import Image from "next/image";
import Link from "next/link";

/** Not-found page */
export default function NotFound() {
	return (
		<section className="flex w-full flex-col items-center justify-center px-4 pb-20 pt-10">
			<div className="prose flex flex-col items-center text-center">
				<Image
					src={"/error.gif"}
					alt="Error"
					width={500}
					height={500}
					className="m-0 h-80 object-contain mix-blend-multiply"
				/>
				<h1>We couldn&apos;t find what you&apos;re looking for! - 404</h1>
				<Link className="btn btn-primary btn-lg w-fit no-underline" href="/">
					Go back
				</Link>
			</div>
		</section>
	);
}
