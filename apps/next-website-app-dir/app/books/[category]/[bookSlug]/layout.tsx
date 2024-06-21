export default async function BooksSlugLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="mx-auto grid max-w-screen-lg grid-cols-5 gap-8 px-4 py-10 max-lg:flex max-lg:flex-col">
			{children}
		</section>
	);
}
