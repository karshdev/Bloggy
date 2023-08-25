const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors=require("cors")
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const contactRoute = require("./routes/contact");
const multer = require("multer");
const path = require("path");
app.use(cors())
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
aa.use(cors({
  origin:["https://deploy-mern-1whq.vercel.app"],
  methods:["POST","GET"],
  credentials:true
}))
mongoose
  .connect("mongodb+srv://sharmaaakarsh120:Hellobitch123@cluster0.blseeae.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true,
  
  })
  .then(console.log("Connected to MongoDB"))
  .then(app.listen("5000", () => {
    console.log("Backend is running.");
  }))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/contact", contactRoute);

