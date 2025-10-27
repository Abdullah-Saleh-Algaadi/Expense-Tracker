const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// register route
const register = require("./routes/user/register");
const login = require("./routes/user/login");
const expense = require("./routes/expense");
const incomes = require("./routes/incomes");
const transactions = require("./routes/transactions");
const categories = require("./routes/categories");
const recentTransactions = require("./routes/recentTransactions");
const updateTransactions = require("./routes/updateTransactions");
const allTransactions = require("./routes/allTransactions");
const updateUserInfo = require("./routes/updateUserInfo");
const deleteTransaction = require("./routes/deleteTransaction");
const changePassword = require("./routes/changePassword");

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/expenses", expense);
app.use("/api/expenses", expense);
app.use("/api/incomes", incomes);
app.use("/api/transactions", transactions);
app.use("/api/categories-stats", categories);
app.use("/api/recent-transactions", recentTransactions);
app.use("/api/all-transactions", allTransactions);
app.use("/api/transactions", updateTransactions);
app.use("/api/update-user-info", updateUserInfo);
app.use("/api/delete-transaction", deleteTransaction);
app.use("/api/change-user-password", changePassword);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
