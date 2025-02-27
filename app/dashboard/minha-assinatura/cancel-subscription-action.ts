/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { revalidatePath } from "next/cache"
import Stripe from "stripe"

export default async function cancelSubscriptionAction(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2025-02-24.acacia",
  })
  console.log("cancelSubscriptionAction", formData)

  const subscriptionId = formData.get("subscriptionId") as string

  const subscription = await stripe.subscriptions.cancel(subscriptionId)

  revalidatePath("/dashboard/minha-assinatura")
}
