import { test as base } from '@playwright/test';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';

// Declare the types of your fixtures.
type MyFixtures = {
  homepage: Homepage;
  loginpage: LoginPage;
};


// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homepage: async ({ page }, use) => {
    // Set up the fixture.
    await use(new Homepage(page));
  },

  loginpage: async ({ page }, use) => {

    await use(new LoginPage(page));
  },
});
export { expect } from '@playwright/test';