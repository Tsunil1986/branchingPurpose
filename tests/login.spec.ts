import {test} from '@playwright/test'

test('Login Page',async ({page})=>{
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(5000)
    console.log("Branching")

})