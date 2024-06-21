## Testing

The template repo has examples of both unit testing and end-to-end testing.

### Unit testing with Jest

The common package (`/packages/common`) is set up using Jest for unit testing. See the test folder in this project for more information.

### End to end testing with Playwright

More info about Playwright here: [https://playwright.dev/](https://playwright.dev/)

The `/apps/next-website-app-dir` app is using end-to-end tests with Playwright.

All the tests are located in the `/tests` folder. This is also where the report from the tests will be generated. See the `playwright.config.ts` for changing these paths.

The test will automatically start a prod build (`yarn build`) followed by the local prod server (`yarn start`). This is why the tests takes some time to start.

> You can use the dev server when running tests, but it will probably time out on some of the bigger and slower tests. The execution time stuff is also not that useful if testing on the dev server.

:::admonition type="note"
To run the tests use `yarn test:pw` or use the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) (recommended).
:::

**Writing Playwright tests**

The best way to create tests is to start by generating them using the [PW codegen:](https://playwright.dev/docs/codegen-intro#running-codegen)

1. Start the server manually by using the VSCode launch config (Node) or running `yarn dev`.
2. Generate the tests
    1. Using the build in codegen, run `yarn pw:codegen`
    2. (recommended) Use the VSCode plugin -> Record new
3. Update the generated tests
    - You don't need the full url in `await page.goto("...");`, since the config is setup to use localhost as the base url. This means that you can use relative urls. `await page.goto("http://localhost:3000/articles");` -> `await page.goto("/articles");`
    - Add custom tests using `expect`. See the demos in the Next project (`/apps/next-website-app-dir/tests`).

For more info, see the [Playwright documentation.](https://playwright.dev/docs/writing-tests)
