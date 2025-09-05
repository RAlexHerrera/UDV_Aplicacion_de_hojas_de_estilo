import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users, BookOpen, Sparkles } from "lucide-react"

export default function MisionVisionPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-balance">Nuestra Misión y Visión</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Conoce los valores y objetivos que guían cada día nuestro trabajo en La Biblioteca de Merlin
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="magical-hover">
            <CardHeader className="text-center pb-8">
              <Target className="h-16 w-16 text-accent mx-auto mb-4" />
              <CardTitle className="text-3xl">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg leading-relaxed">
                Conectar a los lectores con historias extraordinarias, ofreciendo una experiencia mágica de compra y
                venta de libros que inspire, eduque y transforme vidas. Nos comprometemos a ser el puente entre los
                amantes de la literatura y los tesoros literarios que buscan, creando una comunidad donde cada libro
                encuentra su hogar perfecto.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="magical-hover">
            <CardHeader className="text-center pb-8">
              <Eye className="h-16 w-16 text-accent mx-auto mb-4" />
              <CardTitle className="text-3xl">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg leading-relaxed">
                Ser la librería de referencia en España, reconocida por nuestra pasión por los libros, la calidad de
                nuestro servicio y nuestro compromiso con la cultura literaria. Aspiramos a crear un mundo donde cada
                persona tenga acceso a las historias que pueden cambiar su vida, fomentando el amor por la lectura en
                todas las generaciones.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center magical-hover">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Pasión por los Libros</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cada libro que vendemos ha sido seleccionado con amor y cuidado, porque creemos en el poder
                  transformador de la literatura.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center magical-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Comunidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fomentamos una comunidad de lectores donde compartir experiencias, recomendaciones y el amor por las
                  buenas historias.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center magical-hover">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Calidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Garantizamos la calidad de cada libro, desde su estado físico hasta la relevancia de su contenido para
                  nuestros lectores.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* History Section */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <Sparkles className="h-16 w-16 text-accent mx-auto mb-4" />
            <CardTitle className="text-3xl">Nuestra Historia</CardTitle>
          </CardHeader>
          <CardContent className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong>La Biblioteca de Merlin</strong> nació en 1995 del sueño de dos amigos biblióficos, Ana y
                Carlos, quienes compartían la visión de crear un espacio mágico donde los libros pudieran encontrar
                nuevos hogares y los lectores pudieran descubrir tesoros literarios.
              </p>
              <p>
                Lo que comenzó como una pequeña librería de segunda mano en el corazón de Madrid, se ha convertido en
                una referencia para los amantes de los libros en toda España. Nuestro nombre rinde homenaje al
                legendario mago Merlín, símbolo de sabiduría y conocimiento, valores que guían nuestra misión diaria.
              </p>
              <p>
                A lo largo de casi tres décadas, hemos ayudado a más de 50,000 libros a encontrar nuevos lectores, y
                hemos construido una comunidad de más de 5,000 biblióficos que confían en nosotros para sus aventuras
                literarias.
              </p>
              <p>
                Hoy, con nuestra presencia digital, continuamos expandiendo nuestra misión de conectar historias con
                corazones, manteniendo siempre el toque personal y la pasión que nos caracteriza desde el primer día.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-balance">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="magical-hover">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">A</span>
                </div>
                <CardTitle className="mb-2">Ana Martínez</CardTitle>
                <CardDescription className="mb-4">Cofundadora y Directora</CardDescription>
                <p className="text-sm">
                  Especialista en literatura clásica y contemporánea. Su pasión por los libros raros y las primeras
                  ediciones ha convertido nuestra colección en un tesoro único.
                </p>
              </CardContent>
            </Card>

            <Card className="magical-hover">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">C</span>
                </div>
                <CardTitle className="mb-2">Carlos Rodríguez</CardTitle>
                <CardDescription className="mb-4">Cofundador y Curador</CardDescription>
                <p className="text-sm">
                  Experto en literatura fantástica y ciencia ficción. Su ojo para descubrir joyas literarias ha sido
                  clave en el crecimiento de nuestra biblioteca.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
