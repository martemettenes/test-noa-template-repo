/**
 * This script imports the dummy data in books.json and creates a NDJSON file.
 * This file can be imported to Sanity Studio using the Sanity CLI (command line).
 * PS: You will need write access to Sanity to run this the import cli function.
 * @example
 * Run: «node dummyData/generate.mjs»
 * Update the dataset name in the «data:import» script in package.json
 * Run «yarn data:import»
 */
import { getRandomBooks } from "./helpers/generateData.mjs";
import arrayToNdjson from "array-to-ndjson";
import crypto from "crypto";
import fs from "fs";
import path from "path";

/**
 * Main import function
 */
async function createImportFile() {
	const books = getRandomBooks(100);
	const booksOutput = [];
	const authorsOutput = [];
	const categoriesOutput = [];
	for (const book of books) {
		// Categories
		const categoryExists = categoriesOutput.find((category) => category._id === book.category._id);
		if (!categoryExists) {
			categoriesOutput.push({
				...book.category,
			});
		}
		// Authors
		const authorExists = authorsOutput.find((author) => author._id === book.author._id);
		if (!authorExists) {
			authorsOutput.push({
				...book.author,
				image: {
					_type: "accessibleImage",
					alt: `${book.author.firstName} ${book.author.lastName}`,
					caption: `${book.author.firstName} ${book.author.lastName}`,
					_sanityAsset: `image@${book.author.image}`,
				},
			});
		}
		// Books
		const bookExists = booksOutput.find((b) => b._id === book._id);
		if (!bookExists) {
			booksOutput.push({
				...book,
				author: undefined,
				category: {
					_ref: book.category._id,
					_type: "reference",
				},
				authors: [
					{
						_key: crypto.randomUUID(),
						_ref: book.author._id,
						_type: "reference",
					},
				],
				coverImage: {
					_type: "accessibleImage",
					alt: `${book.title}`,
					caption: `${book.title}`,
					_sanityAsset: `image@${book.coverImage}`,
				},
			});
		}
	}

	// Transform to NDJSON
	const output = [...booksOutput, ...authorsOutput, ...categoriesOutput];
	arrayToNdjson(output).pipe(fs.createWriteStream(path.join("./", "dummyData", "books.ndjson")));
}

createImportFile();
