"use client"

import { useCallback } from "react"
import { Button } from "./ui/button"
import { loadStripe } from "@stripe/stripe-js"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"

type PaymentButtonProps = {
  children: React.ReactNode
}

const PaymentButton = ({ children }: PaymentButtonProps) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
  )

  const fetchClientSecret = useCallback(() => {
    return fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        return res.json()
      })
      .then((data) => {
        if (!data.client_secret) {
          throw new Error("Missing client_secret in response")
        }
        return data.client_secret
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error)
        throw error
      })
  }, [])

  const options = { fetchClientSecret }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <>
          <VisuallyHidden.Root>
            <DialogTitle>Assinatura Pro</DialogTitle>
          </VisuallyHidden.Root>

          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout className="" />
          </EmbeddedCheckoutProvider>
        </>
      </DialogContent>
    </Dialog>
  )
}

export default PaymentButton
