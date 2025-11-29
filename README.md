# SDET Internship Assignment - Accura Solutions

## Project Overview
This repository contains the **automation testing assignment** submitted for the SDET Intern position at **Accura Solutions**.  
The project demonstrates automated testing of the **SauceDemo website** using **Playwright with JavaScript**, following the **Page Object Model (POM)** design pattern.  

It also includes **API testing** for OpenWeather API to verify weather data for Islamabad.

---

## ✅ Features / Scenarios Automated

### **Scenario 1: User Login**
- Navigate to [SauceDemo](https://www.saucedemo.com/)
- Enter valid credentials:
  - Username: `standard_user`
  - Password: `secret_sauce`
- Verify successful login and navigation to the **Products Page**

---

### **Scenario 2: Add Product to Cart and Checkout**
- Add first product to cart
- Navigate to Cart and verify product is added
- Proceed to Checkout
- Fill in user information
- Complete the order
- Verify **“THANK YOU FOR YOUR ORDER”** message

---

### **Scenario 3: OpenWeather API Testing**
- Call OpenWeather API for **Islamabad**  
- Verify response code is `200`  
- Validate that temperature data exists in the response JSON  

---

## 🗂 Project Structure

.
├── pages/ # Page Object Model (POM) classes
│ ├── LoginPage.js
│ ├── ProductsPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
├── tests/ # Test scripts
│ ├── login.spec.js
│ ├── checkout.spec.js
│ └── weather_api.spec.js
├── utils/ # API helper
│ └── apiClient.js
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

yaml
Copy code

---

## ⚙ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Alihassan7693/SEDT-Assignment.git
cd SEDT-Assignment
Install dependencies:

bash
Copy code
npm install
Install Playwright browsers:

bash
Copy code
npx playwright install
Replace the OpenWeather API key in tests/weather_api.spec.js:

js
Copy code
const apiKey = 'YOUR_API_KEY';
🏃 Running Tests

Run all tests:

npx playwright test


Run a specific test file:

npx playwright test tests/login.spec.js


Open the Playwright Test Report:

npx playwright show-report


🛠 Tools & Technologies
Playwright (Automation testing)

JavaScript (Programming language)

Page Object Model (POM) (Design pattern)

Axios (API testing)

Git & GitHub (Version control)

💡 Notes
This project demonstrates automation testing best practices for web applications and APIs.

Follows modular and maintainable code structure using POM.

Ready to be extended for more test scenarios in the future.

🔗 Demo Links
SauceDemo Website: https://www.saucedemo.com/

OpenWeather API: https://openweathermap.org/api

