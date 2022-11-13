import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
const Handler = async (req, res) => {
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid input - password too short!" });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();

  const hashedPassword = hashPassword(password);
  const result = await db
    .collection("users")
    .insertOne({ email: email, password: hashedPassword });
  console.log(result);
  res.status(201).json({ message: "Created user!" });
};

export default Handler;
