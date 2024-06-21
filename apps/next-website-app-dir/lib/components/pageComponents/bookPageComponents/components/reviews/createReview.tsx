"use client";

import { useState } from "react";
import { Alert, Button } from "ui/react";

interface Props {
	bookSlug: string;
}

export default function BookReviewCreate({ bookSlug }: Props) {
	const [title, setTitle] = useState("");
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(5);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTitle(e.target.value);
	}

	function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setReview(e.target.value);
	}

	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();

		// Validate the input
		if (title.length < 5 || review.length < 10 || rating < 1 || rating > 5) {
			return setError("Title must be at least 5 characters and review must be at least 10 characters");
		}

		// Initiate the feedback fields
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			// Submit the review
			const res = await fetch(`/api/books/review`, {
				method: "POST",
				body: JSON.stringify({ bookSlug: bookSlug, title, review, rating }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (res.ok) {
				// Review submitted successfully
				setSuccess(true);

				// Reset the form
				setTitle("");
				setReview("");
				setRating(5);
			} else {
				// Something went wrong
				const data = await res.json();
				setError(data?.message ?? "Something went wrong submitting the review");
			}
		} catch (error: any) {
			// Something went wrong (the whole request failed)
			setError(error.message || "Something went wrong submitting the review");
		} finally {
			// Clear the loading state
			setLoading(false);
		}
	}

	// Create the rating input elements (radio buttons)
	const ratingComps = Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
		return (
			<input
				key={`rating-input-${i}`}
				type="radio"
				name="rating-input"
				value={i}
				checked={rating === i}
				className="mask mask-star"
				onClick={() => setRating(i)}
			/>
		);
	});

	return (
		<div className="prose mx-auto mt-10 max-w-none">
			<h2>Write a review</h2>
			<div className="flex max-w-md flex-col gap-4">
				{success && <Alert alertType="info">Review submitted successfully. Refresh the page to see it.</Alert>}
				{error && <Alert alertType="error">{error}</Alert>}
				<div className="flex items-center gap-4 rounded-md border p-4">
					<div className="rating flex">{ratingComps}</div>
					<span className="ml-2">Select the rating ({rating} of 5)</span>
				</div>
				<div className="form-control min-w-[400px]">
					<label className="label">
						<span className="label-text">Review title</span>
					</label>
					<input
						required
						minLength={5}
						type="text"
						placeholder="The review title"
						className="input input-bordered w-full invalid:border-red-600"
						value={title}
						onChange={handleTitleChange}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Review text</span>
					</label>
					<textarea
						required
						minLength={10}
						className="textarea textarea-bordered h-24 invalid:border-red-600"
						placeholder="Type your review"
						value={review}
						onChange={handleReviewChange}
					></textarea>
				</div>

				<Button
					ariaLabel="login button"
					className="mt-4"
					onClick={handleSubmit}
					loading={loading}
					disabled={loading}
				>
					Submit review
				</Button>
			</div>
		</div>
	);
}
