import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function LocalizacionPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-balance">Localización y Contacto</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Visítanos en nuestra librería física o contáctanos para cualquier consulta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="magical-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  Nuestra Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Dirección Principal</h4>
                    <p className="text-muted-foreground">
                      Calle de los Libros, 42
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cómo llegar</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Metro: Línea 1 (Estación Sol) - 5 min caminando</li>
                      <li>• Autobús: Líneas 3, 25, 39 (Parada Plaza Mayor)</li>
                      <li>• Parking público: Parking Plaza Mayor (2 min)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="magical-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-accent" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="font-medium">12:00 - 16:00</span>
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Nota:</strong> Durante festividades nacionales, nuestros horarios pueden variar. Consulta
                      nuestras redes sociales para actualizaciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="magical-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-accent" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">+34 912 345 678</p>
                      <p className="text-sm text-muted-foreground">Atención al cliente</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">info@bibliotecamerlin.com</p>
                      <p className="text-sm text-muted-foreground">Consultas generales</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">WhatsApp: +34 678 901 234</p>
                      <p className="text-sm text-muted-foreground">Respuesta rápida</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="magical-hover">
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  ¿Tienes alguna pregunta o necesitas ayuda? Completa el formulario y te responderemos pronto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <Input id="nombre" placeholder="Tu nombre completo" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <Input id="telefono" placeholder="+34 123 456 789" />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium mb-2">
                      Asunto *
                    </label>
                    <Input id="asunto" placeholder="¿En qué podemos ayudarte?" required />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={6} required />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-8 magical-hover">
              <CardHeader>
                <CardTitle>Encuéntranos en el Mapa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">Mapa interactivo de nuestra ubicación</p>
                    <p className="text-sm text-muted-foreground mt-2">Calle de los Libros, 42, Madrid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Servicios Adicionales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center magical-hover">
              <CardHeader>
                <CardTitle>Envío a Domicilio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Envío gratuito en pedidos superiores a 30€ en la Comunidad de Madrid. Entrega en 24-48 horas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center magical-hover">
              <CardHeader>
                <CardTitle>Recogida en Tienda</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reserva online y recoge en nuestra tienda física. Servicio gratuito disponible en horario comercial.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center magical-hover">
              <CardHeader>
                <CardTitle>Asesoramiento Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nuestros expertos te ayudan a encontrar el libro perfecto. Consultas presenciales o por teléfono.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
