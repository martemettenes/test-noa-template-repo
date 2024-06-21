import getYouTubeId from "get-youtube-id";
import React from "react";
import { ImYoutube2 } from "react-icons/im";
import YouTube from "react-youtube";
import { StringRule, defineField, defineType } from "sanity";

const Preview = (props: any) => {
	const id = getYouTubeId(props.url);
	return <YouTube videoId={id || ""} />;
};

export default defineType({
	type: "object",
	title: "YouTube",
	name: "youtube",
	icon: ImYoutube2,
	fields: [
		defineField({
			name: "title",
			title: "Video title",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "url",
			title: "YouTube video url",
			type: "string",
			description:
				"Paste the url from the youtube video you want to embed (https://www.youtube.com/watch?v=XXXXXXXXXXX)",
			validation: (Rule: StringRule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			url: "url",
		},
	},
	components: {
		preview: Preview,
	},
});
