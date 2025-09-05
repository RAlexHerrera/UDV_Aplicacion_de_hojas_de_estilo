import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "La Biblioteca de Merlin - Compra y Venta de Libros",
  description:
    "Descubre el mundo mágico de los libros en La Biblioteca de Merlin. Compra, vende y explora nuestra colección única.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
