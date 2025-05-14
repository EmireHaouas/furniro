# 🛍️ Furniro

**Furniro** is a responsive e-commerce web application that simulates an online furniture store.  
It features a fully functional shopping cart system, allowing users to browse products, manage quantities, and experience a checkout flow enhanced with **Stripe secure payments integration.**

---
🔗 [Live Demo](https://emire-haouas.dev/furniro/)

## 📱 Fully Responsive – Mobile to Desktop

Furniro ensures a smooth shopping experience across all devices, from mobile phones to desktops.

---

## 🔍 Key Features

- ✅ Browse a catalog of 16 furniture products.
- ✅ Dynamic product pages with images, descriptions, and prices.
- ✅ Shopping cart with live quantity adjustments.
- ✅ Persistent cart data with `localStorage`.
- ✅ Seamless checkout experience.
- ✅ **Secure Stripe payment flow (Test mode).**
- ✅ Fully responsive design (CSS Grid, Flexbox).

---

## 🛡 Stripe Integration (New)

> This project integrates **Stripe payment flow via a dedicated backend API built with Node.js Express and hosted on Render.com.**

| Frontend (React) | ➡️ | Backend API (Render) | ➡️ | Stripe (Secure Payments) |
|-------------------|----|----------------------|----|--------------------------|
| Sends payment request (`create-payment-intent`) |  | Creates PaymentIntent via Stripe Secret Key (secured) |  | Returns `clientSecret` |
| Uses `clientSecret` with `confirmCardPayment` | | | | Stripe handles the secure card UI and confirmation |
| Shows success or failure in frontend UI | | | | |

- **Backend deployed on Render.com** (Node.js Express API).
- **Frontend communicates securely via Render public URL.**
- **All sensitive data (like Stripe Secret Key) managed via environment variables on server side.**

---

## ⚙ Tech Stack

| Frontend            | Backend                    | Deployment                 |
|---------------------|----------------------------|----------------------------|
| React ⚛️            | Node.js Express 🟢         | Infomaniak (Frontend)      |
| Vite ⚡️             | Stripe SDK (Test Mode)     | Render.com (Backend API)   |
| React Router 🧭      | CORS, Express JSON         | GitHub (CI/CD integration) |
| Custom CSS 🎨       |                            |                            |
| LocalStorage 💾      |                            |                            |
| ESLint 📏 Prettier  |                            |                            |

---

## 🛡 Security Notes

- Stripe **Secret Key** is **never exposed in frontend code**.
- Backend API is hosted on Render, using secure environment variables.
- **All payments are processed in Stripe Test Mode.**

---

## 💳 Test Payments

Use **Stripe test card** on the payment page:
4242 4242 4242 4242
MM/YY: any future date
CVC: any 3 digits
ZIP: any 5 digits


---

## 🚀 Setup (Local)

1. Clone the repo.
2. `cd furniro`
3. `npm install`
4. `npm run dev`
5. To run backend:
    - `cd furniro-backend`
    - Create `.env` with:
      ```
      STRIPE_SECRET_KEY=sk_test_...
      ```
    - `npm install`
    - `node server.js`

---


## 💡 For Recruiters

This project demonstrates :
- Frontend UI logic and state management with React.
- Integration of a real-world payment API (Stripe).
- Setup of a secure backend API in Node.js Express.
- Respect of best practices for code splitting, security, and environment configuration.
- Clean, maintainable code using ESLint & Prettier.
- Professional deployment practices separating Frontend & Backend.

---

## 🗺️ Stripe Integration Diagram

![Stripe Integration Flow](./docs/stripe-flow-diagram.png)
