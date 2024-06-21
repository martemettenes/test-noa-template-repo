import { portableTextArticleComponents } from "@/lib/components/portableText";
import { sanityConfigClient } from "@/lib/config/envVariables";
import { PortableText } from "@portabletext/react";
import { Article as ArticlePageType } from "common/src/types/sanity/article";
import { Badge, SanityImage } from "ui/react";

interface Props {
	articlePageDocument: ArticlePageType;
}

/**
 * This component is responsible for rendering an article page
 * Most of the work here is performed by the <PortableText> Sanity module.
 * The «portableTextArticleComponents» serializer rules are passed in to <PortableText>
 * to inform the module how it should render each component or mark
 */
export default function ArticleComponent({ articlePageDocument }: Props): JSX.Element {
	return (
		<div className="container prose mx-auto px-4 py-20">
			<div>
				<SanityImage
					className="m-0 mb-4 aspect-video rounded-box object-cover"
					config={sanityConfigClient}
					image={articlePageDocument.articlePreviewImage}
					alt={articlePageDocument.articlePreviewImage.alt ?? ""}
				/>
				<Badge size="lg" variant="primary">
					{articlePageDocument.collection.name}
				</Badge>
			</div>
			<h1 className="mt-8">{articlePageDocument.title}</h1>
			<div>
				<p className="text-lg font-medium">{articlePageDocument.summary}</p>
			</div>
			<PortableText value={articlePageDocument.blocks.body} components={portableTextArticleComponents} />
		</div>
	);
}
