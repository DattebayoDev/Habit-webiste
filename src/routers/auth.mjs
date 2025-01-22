import express from "express";
import mongodb, { MongoClient } from "mongodb";
import passport from 'passport'
const signupRouter = express.Router();

signupRouter.route("/").post((req, res) => {
  const { username, password } = req.body;

  const url =
    "mongodb+srv://admin:adminpw@cluster0.ghunm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const dbName = "Cluster0";
  (async function createUser() {
    try {
      const client = await MongoClient.connect(url);
      console.log("Successfully connected to the database");
      const db = client.db(dbName);
      const user = { username, password };
      const response = await db.collection("users").insertOne(user);
      const insertedUser = { ...user, _id: response.insertedId };
      req.login(insertedUser, () => {
        res.send("Signed Up");
      });
    } catch (error) {
      console.log(error);
    }
  })();
});

export default signupRouter;
