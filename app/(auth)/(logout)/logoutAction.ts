"use server"

import { signOut } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect"

export default async function logoutAction() {
  try {
    // Sign out the user
    await signOut()

    // Redirect to the home page
    return { redirect: "/" }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    return { error }
  }
}
