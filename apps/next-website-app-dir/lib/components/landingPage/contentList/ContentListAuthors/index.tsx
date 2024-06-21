import ResponsiveList from "../../../ResponsiveList";
import ContentListContainer from "../components/ContentListContainer";
import { sanityConfigClient } from "@/lib/config/envVariables";
import type { PageItemContentListAuthors } from "common/src/types/sanity/landingPage/pageItemContentList";
import { SanityImage } from "ui/react";

interface Props {
	data: PageItemContentListAuthors;
}

const ContentListAuthors: React.FC<Props> = ({ data }) => {
	const { title, items } = data;

	const authors = items.map((author) => (
		<li className="m-0 h-full list-none pl-0" key={author._id}>
			<div className="card glass bordered m-0 h-full rounded-xl bg-base-300 bg-opacity-20 p-8 @container">
				<div className="m-0 flex items-center gap-4">
					<div className="avatar m-0 aspect-square h-20">
						<SanityImage
							className="m-0 rounded-full"
							config={sanityConfigClient}
							image={author.image}
							alt={author.image.alt ?? ""}
						/>
					</div>
					<h3 className="m-0">
						{author.firstName} {author.lastName}
					</h3>
				</div>
			</div>
		</li>
	));

	return (
		<ContentListContainer>
			<h2>{title}</h2>
			<ResponsiveList>{authors}</ResponsiveList>
		</ContentListContainer>
	);
};
export default ContentListAuthors;
