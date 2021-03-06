import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export default async function handler(req, res) {
  const { charity_name, email } = req.body;
  try {
    const user = await client.users.create({
      data: {
        charity_name,
        email,
      },
    });
    res.send(user);
    console.log("successfuly got users", user);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "an error occurred" });
  }
}
import React from "react";

export const CreateUser = () => {
  return <p>login</p>;
};
