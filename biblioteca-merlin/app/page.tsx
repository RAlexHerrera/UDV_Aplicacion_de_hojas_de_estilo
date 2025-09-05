import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Star, Users, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredBooks = [
    {
      id: 1,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      price: 29.99,
      rating: 5,
      image: "/el-se-or-de-los-anillos-book-cover.jpg",
    },
    {
      id: 2,
      title: "Cien Años de Soledad",
      author: "Gabriel García Márquez",
      price: 24.99,
      rating: 5,
      image: "/cien-a-os-de-soledad-book-cover.jpg",
    },
    {
      id: 3,
      title: "Harry Potter y la Piedra Filosofal",
      author: "J.K. Rowling",
      price: 19.99,
      rating: 5,
      image: "/generic-wizard-book-cover.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Bienvenido a La Biblioteca de Merlin</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto">
            Descubre el mundo mágico de los libros. Compra, vende y explora nuestra colección única de literatura
            fantástica y clásica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Explorar Productos
              </Button>
            </Link>
            <Link href="/mision-vision">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Conoce Nuestra Historia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">
            ¿Por qué elegir La Biblioteca de Merlin?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="magical-hover text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Amplia Colección</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Más de 10,000 títulos disponibles en géneros fantásticos, clásicos y contemporáneos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="magical-hover text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Comunidad Lectora</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Únete a nuestra comunidad de más de 5,000 lectores apasionados por la literatura.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="magical-hover text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Calidad Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Todos nuestros libros pasan por un riguroso proceso de selección y verificación de calidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Libros Destacados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
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
                  <CardDescription className="mb-4">por {book.author}</CardDescription>
                  <div className="flex items-center mb-4">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">${book.price}</span>
                    <Button size="sm">Agregar al Carrito</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/productos">
              <Button size="lg" variant="outline">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">La Biblioteca de Merlin</h3>
              <p className="text-sm opacity-90">
                Tu librería mágica de confianza desde 1995. Conectando lectores con historias extraordinarias.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/productos" className="hover:text-accent">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/mision-vision" className="hover:text-accent">
                    Misión y Visión
                  </Link>
                </li>
                <li>
                  <Link href="/localizacion" className="hover:text-accent">
                    Localización
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>📧 info@bibliotecamerlin.com</li>
                <li>📞 +34 912 345 678</li>
                <li>📍 Calle de los Libros, 42, Madrid</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 La Biblioteca de Merlin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
