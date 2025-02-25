/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { signIn } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect"

export default async function loginAction(prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard",
    })
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw error
    }

    if (error.type === "CredentialsSignin") {
      return { success: false, message: "Dados de login estão incorretos." }
    }

    return { success: false, message: "Ops, algum erro aconteceu" }
  }
}
