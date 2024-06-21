export default function BooksLoading() {
	const fakeBooks = [];
	for (let i = 0; i < 10; i++) {
		fakeBooks.push(
			<div className="flex animate-pulse flex-col gap-4">
				<div key={i} className="h-96 w-60 rounded-box bg-slate-500"></div>
				<div className="w-full">
					<div className="mb-2.5 h-1 w-32 rounded-full bg-gray-200 dark:bg-gray-400"></div>
					<div className="mb-2.5 h-1 rounded-full bg-gray-200 dark:bg-gray-400"></div>
					<div className="mb-2.5 h-4 w-28 rounded-full bg-gray-200 dark:bg-gray-400"></div>
					<div className="mb-2.5 h-4 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-400"></div>
				</div>
			</div>
		);
	}

	return (
		<>
			<header>
				<h1>Our books</h1>
				<p>Where Stories Come to Life</p>
			</header>
			<div className="flex flex-wrap justify-center gap-4 gap-y-14">{fakeBooks}</div>
		</>
	);
}
