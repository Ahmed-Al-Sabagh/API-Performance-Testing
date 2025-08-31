# 🚀 Automated API Booking & Performance Test Script
> ✨ A **Node.js performance testing project** designed to interact with the **RESTful Booker API**.  
> It automates booking creation using `POST` requests and outputs results in a **clean, professional console table**.  
> This script can be used as a foundation for **API functional testing** and extended into **performance/load testing**.

---

## 📸 Example Outputs
│ Status │ Booking ID │ First Name │  Last Name │ Total Price │    Checkin │   Checkout │
├────────┼────────────┼────────────┼────────────┼─────────────┼────────────┼────────────┤
│    200 │       1322 │      Ahmed │ Al Sabbagh │         111 │ 2018-01-01 │ 2019-01-01 │


## ✨ Features
- ⚡ **Automated API Testing** – Easily send `POST` requests to RESTful Booker.
- 🧩 **Dynamic Booking Data** – Customizable payload for flexible testing.
- 📊 **Beautiful Console Output** – Tabular results via `console-table-printer`.
- 🛡️ **Error Handling** – Handles API/network issues gracefully.
- 🔥 **Performance Testing Ready** – Extendable for load and stress testing scenarios.
- 📂 **Organized Structure** – Easy to maintain and expand.

---

## 🧰 Requirements
- **Node.js** ≥ 18  
- **npm** ≥ 9  

Check installed versions:
```bash
node -v
npm -v
```

---

## ⚙️ Getting Started

1️⃣ Clone the repository:
```bash
git clone <your-repo-url>.git
cd <your-repo-folder>
```

2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ Run the script:
```bash
node test.js
```

---
## 📂 Project Structure
```text
performance-testing/
├─ assets/
│  ├─ booking-table.png   # Console output screenshot
│  └─ api-test.png        # API test execution screenshot
├─ test.js                # Main script for API testing
├─ package.json
├─ .gitignore
└─ README.md
```

---

## 🧪 Performance Testing Notes
- Integrate with tools like **Artillery** or **Autocannon** for load testing.  
- Use **Promise.all** or loops to simulate concurrent API requests.  
- Measure **response times, throughput, and error rates**.  

---

## 🗂️ .gitignore
```gitignore
node_modules/
.env
.DS_Store
dist/
coverage/
```

---

## 🤝 Contributing
- Contributions are welcome!  
- Open **Issues** or submit **Pull Requests** for improvements or new features.

---

## 🙏 Credits
- [RESTful Booker API](https://restful-booker.herokuapp.com/)  
- [console-table-printer](https://www.npmjs.com/package/console-table-printer)  

---

> 💡 Pro Tip: Add a **logo** to `assets/logo.png` and reference it at the top of this README for branding.







