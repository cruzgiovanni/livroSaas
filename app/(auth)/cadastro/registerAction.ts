"use server"

import db from "@/lib/db"
import { hashSync } from "bcrypt-ts"
import { redirect } from "next/navigation"

export default async function registerAction(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _prevState: any,
  formData: FormData
) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    email: string
    password: string
  }

  if (!data.email || !data.name || !data.password) {
    return {
      message: "Preencha todos os campos",
      success: false,
    }
  }

  // validate if user already exists
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  })
  if (user) {
    return {
      message: "Usuário já cadastrado",
      success: false,
    }
  }

  // create user
  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  })

  return redirect("/")
}
