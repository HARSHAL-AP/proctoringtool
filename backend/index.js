const express = require("express");

const { connection } = require("./config/db");
const { userRoute } = require("./routes/User.route");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    isError: false,
    messege: `Surver Workign Fine.... `,
  });
});

app.use("/user", userRoute);

app.listen(3001, async () => {
  try {
    await connection;
    console.log("Connected To DB");
  } catch (error) {
    console.log("Unable TO Connect Db");
    console.log(error);
  }
});
