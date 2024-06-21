import { accessibleImageValidator } from "../../objects/accessibleImage";
import { schemaTypes } from "common/src/sanity/SchemaType";
import { BsFillPersonFill } from "react-icons/bs";
import { SlugRule, StringRule, TextRule, defineField, defineType } from "sanity";

export default defineType({
	name: schemaTypes.BOOK_AUTHOR,
	title: "Book Review Author",
	type: "document",
	icon: BsFillPersonFill,
	fields: [
		defineField({
			name: "firstName",
			title: "First name",
			description: "The first name of the author",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "lastName",
			title: "Last name",
			description: "The last name of the author",
			type: "string",
			validation: (Rule: StringRule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			description: "The slug of the author (not displayed)",
			type: "slug",
			validation: (Rule: SlugRule) => Rule.required(),
			options: {
				source: (obj) => {
					return `${obj.firstName}-${obj.lastName}`;
				},
			},
		}),
		defineField({
			name: "description",
			title: "Description",
			description: "A short description of the author",
			type: "text",
			validation: (Rule: TextRule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			description: "The image of the author",
			type: schemaTypes.ACCESSIBLE_IMAGE,
			validation: accessibleImageValidator,
		}),
	],
	preview: {
		select: {
			firstName: "firstName",
			lastName: "lastName",
			image: "image",
		},
		prepare(selection: any) {
			const { firstName, lastName, image } = selection;

			return {
				title: `${firstName} ${lastName}`,
				media: image,
			};
		},
	},
});
