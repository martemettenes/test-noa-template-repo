import { randBook, randPastDate, randTextRange, randUuid } from "@ngneat/falso";
import crypto from "crypto";
import slugify from "slugify";

function hashString(input) {
	return crypto.createHash("md5").update(input).digest("hex");
}

export function getRandomBooks(numBooks = 100) {
	const books = [];
	for (let index = 1; index <= numBooks; index++) {
		// Random book
		const book = randBook();

		// Handle author fields
		const authorId = hashString(book.author);
		const nameParts = book.author.split(" ");
		const firstName = nameParts[0];
		const lastName = nameParts[nameParts.length - 1];

		// Handle book
		const title = book.title;
		const date = new Date(randPastDate({ years: 50 }));
		const bookId = hashString(`${title}-${authorId}`);

		// Check if the book already exists
		const foundBook = books.find((book) => book.id === bookId);

		// If not, add it
		if (!foundBook) {
			const bookImgUrl =
				index <= 85
					? `https://picsum.photos/id/${index}/400/600`
					: `https://picsum.photos/400/600?random=${Math.random()}`;
			books.push({
				_id: bookId,
				_type: "book",
				category: {
					_id: hashString(book.category),
					_type: "bookCategory",
					title: book.category,
					slug: { current: slugify(book.category, { lower: true }) },
				},
				title,
				publishYear: date.getFullYear(),
				slug: { current: slugify(title, { lower: true }) },
				author: {
					_id: authorId,
					_type: "bookAuthor",
					firstName,
					lastName,
					slug: { current: slugify(book.author, { lower: true }) },
					description: randTextRange({ min: 100, max: 200 }),
					image: `https://i.pravatar.cc/600?random=${Math.random()}`,
				},
				synopsis: randTextRange({ min: 100, max: 500 }),
				coverImage: bookImgUrl,
			});
		}
	}
	return books;
}
