import { test } from '@playwright/test';
const { SampleAppPage } = require('../models/sample-app.model');

test('log in success', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page)
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField("Percival Picklepants")
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Welcome, Percival Picklepants!")
});

test('Wrong password test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page) 
  await sampleAppPage.navigateToSampleApp() 
  await sampleAppPage.fillUsernameField("Gojo") 
  await sampleAppPage.fillPasswordField("WrongPass") 
  await sampleAppPage.clickLoginButton() 
  await sampleAppPage.expectedLoginTextToBe("Invalid username/password") 

});

test('No username test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page) 
  await sampleAppPage.navigateToSampleApp() 
  await sampleAppPage.fillUsernameField("") 
  await sampleAppPage.fillPasswordField("pwd") 
  await sampleAppPage.clickLoginButton() 
  await sampleAppPage.expectedLoginTextToBe("Invalid username/password") 

});

test('log out test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page) 
  await sampleAppPage.navigateToSampleApp() 
  await sampleAppPage.fillUsernameField("Gojo") 
  await sampleAppPage.fillPasswordField("pwd") 
  await sampleAppPage.clickLoginButton() 
  await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!") 
  await sampleAppPage.clickLogoutButton() 
  await sampleAppPage.expectedLoginTextToBe("User logged out.") 
});