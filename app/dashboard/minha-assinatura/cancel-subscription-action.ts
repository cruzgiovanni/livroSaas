/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { revalidatePath } from "next/cache"
import Stripe from "stripe"

export default async function cancelSubscriptionAction(formData: FormData) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
      apiVersion: "2025-02-24.acacia",
    })

    const subscriptionId = formData.get("subscriptionId") as string
    if (!subscriptionId) {
      throw new Error("ID da assinatura não fornecido")
    }

    await stripe.subscriptions.cancel(subscriptionId)

    // Revalida tanto a página do livro quanto a de assinatura
    revalidatePath("/dashboard/minha-assinatura")
    revalidatePath("/livro-do-mes")
  } catch (error) {
    console.error("Erro ao cancelar assinatura:", error)
    throw new Error("Não foi possível cancelar a assinatura. Tente novamente.")
  }
}
