import { sanityConfigClient } from "@/lib/config/envVariables";
import type { Author } from "common/src/types/sanity/book";
import React from "react";
import { SanityImage } from "ui/react";

interface Props {
	authors: Array<Author>;
}

const AuthorList = ({ authors }: Props) => {
	return (
		<>
			<h2>{`Author${authors.length > 1 ? "s" : ""}`}</h2>
			<ul className="flex flex-col gap-4 pl-0">
				{authors.map((author) => (
					<li className="mt-0 list-none rounded-box bg-base-200 px-8 py-4" key={author._id}>
						<div className="mt-0 flex items-center gap-4">
							<div className="avatar h-20 w-20">
								<SanityImage
									className="m-0 rounded-full"
									config={sanityConfigClient}
									image={author.image}
									alt={author.image.alt ?? ""}
								/>
							</div>
							<div>
								<h3 className="m-0">
									{author.firstName} {author.lastName}
								</h3>
								<span>Author</span>
							</div>
						</div>
						<p className="mb-0 font-medium italic">{author.description}</p>
					</li>
				))}
			</ul>
		</>
	);
};
export default AuthorList;
