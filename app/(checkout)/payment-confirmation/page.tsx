import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default async function CheckoutReturnPage() {
  return (
    <Card className="max-w-lg mt-10 text-center mx-5">
      <CardContent>
        <CardHeader>
          <ShoppingBag className="text-green-500 mx-auto mb-4 w-12 h-12" />
          <CardTitle>Assinatura Confirmada!</CardTitle>
          <CardDescription>
            Obrigado por se juntar a nossa comunidade LivroSaaS
          </CardDescription>
        </CardHeader>
        <div className="text-gray-700 text-sm">
          <p>
            Sua assinatura foi processada com sucesso e sua conta está ativa.
          </p>
          <p>Agora, só aproveitar nosso conteúdo!</p>

          <Link href="/dashboard" className={cn(buttonVariants(), "mt-12")}>
            Ir para Dashboard
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
