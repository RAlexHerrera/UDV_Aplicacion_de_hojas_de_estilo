"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter } from "lucide-react"

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cart, setCart] = useState<number[]>([])

  const books = [
    {
      id: 1,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      price: 29.99,
      category: "fantasia",
      rating: 5,
      stock: 15,
      image: "/el-se-or-de-los-anillos-book-cover.jpg",
    },
    {
      id: 2,
      title: "Cien Años de Soledad",
      author: "Gabriel García Márquez",
      price: 24.99,
      category: "clasicos",
      rating: 5,
      stock: 8,
      image: "/cien-a-os-de-soledad-book-cover.jpg",
    },
    {
      id: 3,
      title: "Harry Potter y la Piedra Filosofal",
      author: "J.K. Rowling",
      price: 19.99,
      category: "fantasia",
      rating: 5,
      stock: 22,
      image: "/generic-wizard-book-cover.png",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      price: 18.99,
      category: "clasicos",
      rating: 5,
      stock: 12,
      image: "/1984-book-cover.png",
    },
    {
      id: 5,
      title: "El Hobbit",
      author: "J.R.R. Tolkien",
      price: 22.99,
      category: "fantasia",
      rating: 5,
      stock: 18,
      image: "/placeholder-6eg5u.png",
    },
    {
      id: 6,
      title: "Rayuela",
      author: "Julio Cortázar",
      price: 21.99,
      category: "contemporaneo",
      rating: 4,
      stock: 6,
      image: "/placeholder-0qbad.png",
    },
  ]

  const categories = [
    { value: "all", label: "Todas las Categorías" },
    { value: "fantasia", label: "Fantasía" },
    { value: "clasicos", label: "Clásicos" },
    { value: "contemporaneo", label: "Contemporáneo" },
  ]

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (bookId: number) => {
    setCart((prev) => [...prev, bookId])
    // Simulate adding to cart with visual feedback
    console.log(`[v0] Libro ${bookId} agregado al carrito`)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-balance">Nuestros Productos</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Explora nuestra colección mágica de libros cuidadosamente seleccionados
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por título o autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {filteredBooks.length} de {books.length} libros
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="book-card magical-hover">
              <CardHeader className="p-0">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-balance">{book.title}</CardTitle>
                <CardDescription className="mb-2">por {book.author}</CardDescription>
                <div className="flex items-center mb-2">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">Stock disponible: {book.stock} unidades</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">${book.price}</span>
                  <Button size="sm" onClick={() => addToCart(book.id)} disabled={book.stock === 0}>
                    {book.stock === 0 ? "Agotado" : "Agregar al Carrito"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No se encontraron libros que coincidan con tu búsqueda</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
