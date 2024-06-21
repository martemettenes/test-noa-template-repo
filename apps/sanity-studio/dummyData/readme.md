# How to generate dummy book data and import it to Sanity

Note that following the steps below will import a bunch of books, categories and authors into your chosen dataset!

> To import data into Sanity you must be logged in locally and have a user with write access.

1. Generate some books by running `node dummyData/generate.mjs`
2. Update the dataset name in the «data:import» script in package.json
3. Import the data to Sanity by running `yarn data:import`
