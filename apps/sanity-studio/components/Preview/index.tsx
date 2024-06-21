import { Card, Flex, Spinner, Stack, Text } from "@sanity/ui";
import { sanitizeId } from "common/src/utils/sanity";
import { useValidationStatus } from "sanity";
import { SanityDocumentLike } from "sanity";
import { Iframe } from "sanity-plugin-iframe-pane";

/**
 * Component used to display a preview for certain documents
 * This component will also check if the document is valid before displaying the preview.
 */
export const PreviewComp = ({ document, options }: any) => {
	const currentDoc = document.displayed as SanityDocumentLike;
	const id = sanitizeId(currentDoc._id);
	const { validation, isValidating } = useValidationStatus(id, currentDoc._type);

	// Show a spinner while validating the document
	if (isValidating) {
		return (
			<Card padding={4}>
				<Flex justify="center">
					<Spinner muted />
				</Flex>
			</Card>
		);
	}

	// If there are no validation errors, display the preview
	if (validation.length < 1) {
		return <Iframe document={document} options={{ url: options.url, reload: { button: true } }} />;
	}

	// If there are validation errors, display a message
	return (
		<Stack padding={4} space={4}>
			<Card padding={4} tone="caution">
				<Text size={4} align="center">
					The document is not valid.
				</Text>
			</Card>
			<Card padding={4}>
				<Text size={2} align="center">
					Please fix any validation errors and try again
				</Text>
			</Card>
		</Stack>
	);
};
