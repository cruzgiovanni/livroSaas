/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2025-02-24.acacia",
})

const subscriptionCache = new Map<string, { data: any; expires: number }>()
const CACHE_DURATION = 1000 * 60 * 5 // 5 minutos

export async function fetchSubscriptionByEmail(email: string) {
  const start = Date.now()

  const cached = subscriptionCache.get(email)
  if (cached && cached.expires > Date.now()) {
    console.log(`Cache hit for ${email}`)
    console.log(`Execution time (cache): ${Date.now() - start}ms`)
    return cached.data
  }

  const customers = await stripe.customers.list({
    limit: 1,
    email,
    expand: ["data.subscriptions"],
  })

  if (customers.data.length === 0) return null
  const customer = customers.data[0]
  if (customer.subscriptions?.data.length === 0) return null

  const subscription = customer.subscriptions?.data[0]

  // Atualiza o cache com expiração
  subscriptionCache.set(email, {
    data: subscription,
    expires: Date.now() + CACHE_DURATION,
  })

  console.log(`Execution time (no cache): ${Date.now() - start}ms`)
  return subscription
}

export function translateSubscriptionStatus(status: string) {
  switch (status) {
    case "active":
      return "Ativo"
    case "trialing":
      return "Em teste"
    case "past_due":
      return "Inadimplente"
    case "canceled":
      return "Cancelado"
    default:
      return status
  }
}

export function translateSubscriptionInterval(interval: string) {
  switch (interval) {
    case "month":
      return "Mensal"
    case "year":
      return "Anual"
    default:
      return interval
  }
}
