import { PrismaClient } from "@prisma/client"

declare global {
  // Isso é necessário para evitar erros de redefinição do tipo global
  // em ambientes de desenvolvimento com hot-reloading
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db
}

export default db
