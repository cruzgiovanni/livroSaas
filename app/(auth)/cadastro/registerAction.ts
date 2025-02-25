"use server"

import db from "@/lib/db"
import { hashSync } from "bcrypt-ts"

export default async function RegisterAction(formData: FormData) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    email: string
    password: string
  }

  if (!data.email || !data.name || !data.password) {
    throw new Error("Preencha todos os campos")
  }

  // validate if user already exists
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  })
  if (user) {
    throw new Error("Usuário já cadastrado")
  }

  // create user
  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  })
}
