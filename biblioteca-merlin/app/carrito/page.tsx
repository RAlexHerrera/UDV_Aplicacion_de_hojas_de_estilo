"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from "lucide-react"
import Link from "next/link"

interface CartItem {
  id: number
  title: string
  author: string
  price: number
  quantity: number
  image: string
}

export default function CarritoPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      price: 29.99,
      quantity: 1,
      image: "/el-se-or-de-los-anillos-book-cover.jpg",
    },
    {
      id: 2,
      title: "Harry Potter y la Piedra Filosofal",
      author: "J.K. Rowling",
      price: 19.99,
      quantity: 2,
      image: "/generic-wizard-book-cover.png",
    },
    {
      id: 3,
      title: "Cien Años de Soledad",
      author: "Gabriel García Márquez",
      price: 24.99,
      quantity: 1,
      image: "/cien-a-os-de-soledad-book-cover.jpg",
    },
  ])

  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    console.log(`[v0] Cantidad actualizada para item ${id}: ${newQuantity}`)
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    console.log(`[v0] Item ${id} eliminado del carrito`)
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "merlin10") {
      setDiscount(0.1)
      console.log("[v0] Código promocional aplicado: 10% descuento")
    } else if (promoCode.toLowerCase() === "libro5") {
      setDiscount(0.05)
      console.log("[v0] Código promocional aplicado: 5% descuento")
    } else {
      setDiscount(0)
      console.log("[v0] Código promocional inválido")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discountAmount = subtotal * discount
  const shipping = subtotal > 30 ? 0 : 4.99
  const total = subtotal - discountAmount + shipping

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-xl text-muted-foreground mb-8">¡Descubre nuestra colección mágica de libros!</p>
            <Link href="/productos">
              <Button size="lg">Explorar Productos</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-balance">Tu Carrito Mágico</h1>
          <p className="text-xl text-muted-foreground">
            {totalItems} {totalItems === 1 ? "libro" : "libros"} esperando por ti
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="magical-hover">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-20 h-28 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 text-balance">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">por {item.author}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xl font-bold text-accent">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card className="magical-hover">
              <CardHeader>
                <CardTitle>Código Promocional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ingresa tu código"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button onClick={applyPromoCode} variant="outline">
                    Aplicar
                  </Button>
                </div>
                {discount > 0 && (
                  <p className="text-sm text-green-600 mt-2">¡Código aplicado! {discount * 100}% de descuento</p>
                )}
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Códigos disponibles:</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>MERLIN10 - 10% descuento</li>
                    <li>LIBRO5 - 5% descuento</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="magical-hover">
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Descuento ({discount * 100}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>
                    {shipping === 0 ? <span className="text-green-600">Gratis</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                {shipping > 0 && (
                  <p className="text-sm text-muted-foreground">Envío gratis en pedidos superiores a $30</p>
                )}

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>

                <Button className="w-full" size="lg">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceder al Pago
                </Button>

                <Link href="/productos">
                  <Button variant="outline" className="w-full bg-transparent">
                    Continuar Comprando
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card className="magical-hover">
              <CardContent className="p-4">
                <div className="text-center text-sm text-muted-foreground">
                  <p className="font-medium mb-2">Compra Segura</p>
                  <p>Tus datos están protegidos con encriptación SSL</p>
                  <p className="mt-2">✓ Pago seguro ✓ Envío garantizado</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
