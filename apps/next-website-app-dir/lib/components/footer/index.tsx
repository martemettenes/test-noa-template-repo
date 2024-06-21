import { Footer } from "common/src/types/sanity/allPages/footer";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface Props {
	footerData: Footer;
}

export default function FooterComp({ footerData }: Props): JSX.Element {
	// Don't face plant if no data has been added in Sanity
	if (!footerData) {
		return (
			<div className="bg-orange-400 p-4">
				<p>⚠️ The footer data could not be loaded</p>
			</div>
		);
	}

	return (
		<footer className="bg-base-200 py-10 text-base-content">
			<div className="flex flex-col items-center gap-8">
				<div className="prose">
					<p className="font-bold">{footerData.footerText}</p>
				</div>
				<div className="flex flex-col items-center gap-2">
					<span className="footer-title">Links</span>
					<ul className="flex flex-col items-center gap-2">
						{footerData.footerLinks.map((link) => {
							if (link.footerLink.startsWith("http")) {
								return (
									<li key={link._key}>
										<a href={link.footerLink} target="_blank" rel="noreferrer">
											{link.footerLinkTitle}
										</a>
										<FiExternalLink />
									</li>
								);
							}
							return (
								<div key={link._key} className="flex gap-1">
									<Link key={link._key} href={link.footerLink} className="link-hover link">
										{link.footerLinkTitle}
									</Link>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		</footer>
	);
}
