# Sauce Demo - E2E Test Automation with Playwright

## Overview

This project is an end-to-end (E2E) test automation suite built with **Playwright** and **TypeScript**.

The goal is to validate critical user journeys of an e-commerce application by simulating real user interactions such as browsing products, adding items to the cart, checkout flow, and authentication.

The project uses the **Page Object Model (POM)** architecture to create maintainable, scalable, and reusable test components.

---

## Objectives

The main objectives of this project are:

- Automate critical user flows of an e-commerce platform
- Validate core business scenarios from a user's perspective
- Build a maintainable test architecture using industry best practices
- Improve confidence in product quality through automated regression testing

---

## Tech Stack

- **Playwright** - End-to-end testing framework
- **TypeScript** - Programming language
- **Node.js** - Runtime environment
- **Page Object Model (POM)** - Test architecture pattern

---

## Project Structure

saucedemo-playwright/
│
├── pages/
│ ├── HomePage.ts
│ ├── ProductPage.ts
│ ├── CartPage.ts
│ ├── CheckoutPage.ts
│ ├── LoginPage.ts
│ └── components/
│ └── CartComponent.ts
│
├── tests/
│ ├── cart/
│ │ ├── add-to-cart.spec.ts
│ │ └── remove-product.spec.ts
│ │
│ └── auth/
│ ├── login.spec.ts
│ └── login-negative.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md

---

                 Test Scenarios
                       |
                       ↓
              Page Object Model
                       |
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
   HomePage       ProductPage     CartPage
        ↓              ↓              ↓
             Playwright Locators
                       |
                       ↓
             Browser Automation
                       |
                       ↓
              Test Results Report

---

flowchart TD
    A[Test Scenarios] --> B[Page Object Model]

    B --> C[HomePage]
    B --> D[ProductPage]
    B --> E[CartPage]
    B --> F[CheckoutPage]
    B --> G[LoginPage]

    C --> H[Playwright Locators]
    D --> H
    E --> H
    F --> H
    G --> H

    H --> I[Browser Automation]
    I --> J[Test Results]

## Automated Test Scenarios

### Cart

✅ Add a product to cart  
- Navigate to a product page
- Add the product to the cart
- Verify cart count update

✅ Remove a product from cart
- Open cart page
- Remove a product
- Verify cart update

### Checkout

✅ Start checkout process
- Access cart
- Proceed to checkout
- Verify checkout page loading

### Authentication

✅ Login with valid credentials
- Enter user credentials
- Submit login form
- Verify successful authentication flow

✅ Login with invalid credentials
- Submit incorrect credentials
- Verify authentication failure behavior

---

## Testing Approach

### Page Object Model

The project follows the Page Object Model pattern by separating:

- **Page objects**: UI selectors and page actions
- **Tests**: Business scenarios and expected behaviors
- **Components**: Reusable interface elements

Example:
Test → Page Object → UI Interaction


This approach improves:

- Code maintainability
- Test readability
- Selector reusability
- Scalability when adding new tests

---

## Running Tests

Install dependencies:

```bash
npm install

Run all Tests:

npx playwright test

Run tests with browser UI:

npx playwright test --headed

Run a specific test:

npx playwright test tests/cart/add-to-cart.spec.ts

Generate test report:

npx playwright show-report

## Key Learnings

Through this project, I explored:
End-to-end testing workflows
Test automation strategy
Reliable locator selection
Handling dynamic UI behavior
Structuring scalable automation projects
Applying software engineering practices to quality assurance


## Future Improvements
Possible improvements:

Add CI/CD integration with GitHub Actions
Add test coverage for product search
Add account creation scenarios
Add visual regression testing
Add environment-based configuration

## Application Under Test
Demo application:

https://sauce-demo.myshopify.com/
