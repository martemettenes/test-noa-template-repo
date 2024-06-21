# API Documentation

Documentation for API routes for this Next project.

## Books

```
/api/books/review
```

This route creates a review in Sanity if it does not already exist. It is used by the review page (app/books/[category]/[bookSlug]/review)

## Login

```
/api/login
```

This is a login route for testing a login flow. This route is just a demo that uses one password stored as an env variable. It has some code for creating a JWT and storing it as a cookie.

## Sanity preview

```
/preview
/exit-preview
```

These routes are used by Sanity Studio to preview content and should not be used in any other way.
