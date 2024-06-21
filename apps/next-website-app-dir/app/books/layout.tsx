export default async function BooksLayout({ children }: { children: React.ReactNode }) {
	return <section className="container prose mx-auto my-6 flex max-w-none flex-col items-center">{children}</section>;
}
