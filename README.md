# Take Home Project for Guild

UI Test Automation using [Cypress.io](https://cypress.io/)

## Project Setup

### Install npm and typescript

After cloning this repo, to get this project running, you'll need to install a few things.  If you don't have either dependency install, please follow these steps.

To install `npm` run the following command in your terminal:

```
npm install
```

Next, you need to get typescript installed by running:

```
npm install typescript --save-dev
```

### Environment Variables

You will need to get a valid email and password for `EMAIL` and `PASSWORD` from the repo owner to run locally.  These values can be provided to populate the `cypress/fixtures/users.json` file.

### Running locally in a browser

To run the test in a browser, navigate to the cypress directory in your terminal and run the following command `npx cypress run --headed`.  Similarly, the test will run 'headless' with `npx cypress run`.

To monitor the test run in the Cypress console, you can run `npx cypress open` to manually execute the test.