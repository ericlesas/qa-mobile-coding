# QA Mobile Coding - SwagLabs

## 📱 Project Overview

This project is an automated testing framework for the SwagLabs Mobile App using **WebdriverIO + Appium**.

It implements core mobile automation principles such as **Page Object Model (POM)**, clean test data separation, and reusable components to validate critical app flows like **login**, **product purchase**, and **form validations**.

---

## 🗂 Project Structure

```
qa-mobile-coding/
├── data/
│   ├── checkout.data.js         # Test data (form values, success messages)
│   ├── home.data.js             # Test data (list of products)
│   └── login.data.js            # Test data (error messages, credentials)
├── node_modules/                # Project dependencies
├── screens/                     # Page Objects (screens)
│   ├── base.screen.js
│   ├── cart.screen.js
│   ├── checkout.screen.js
│   ├── home.screen.js
│   └── login.screen.js
├── tests/
│   ├── login/                   # Login related tests
│   ├── checkout/                # Checkout related tests
│   └── product/                 # Product related tests
├── wdio.browserstack.android.js # WebdriverIO configuration for device farm run
├── wdio.local.conf.js           # WebdriverIO configuration for local run
├── package.json
└── README.md                    # Project documentation (this file)
```

---

## 🚀 How to Run the Tests

### 1. Install Dependencies

```bash
npm install
```

### 2. Ensure Appium is Running

```bash
appium
```

### 3. Run the Tests

```bash
npx wdio run wdio.conf.js
```

---

## ✅ Covered Test Scenarios

| Test Case                                             | File                             |
| ----------------------------------------------------- | -------------------------------- |
| Validates login in the app with a locked user         | validateLoginWithErrors.test.js  |
| Validates login in the app with invalid credentials   | validateLoginWithErrors.test.js  |
| Validates login in the app with username field empty  | validateLoginWithErrors.test.js  |
| Validates login in the app with password field empty  | validateLoginWithErrors.test.js  |
| Logs into the app with valid credentials              | validateLoginWithSuccess.test.js |
| Add Product to Cart and Navigate to Cart              | validateProductPurchase.test.js  |

---

### Points for Improvement:

   *  Create a screen actions file to abstract user interactions from the base screen;
   *  Add more reusable wait methods for screen transitions.
   *  Add timeout handling with messages for elements that are not displayed.
   *  Add a test report like Allure Report.
   *  Run tests on a device farm.
