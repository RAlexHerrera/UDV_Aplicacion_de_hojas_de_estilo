# La Biblioteca de Merlin

Una página web informativa para una empresa de compra y venta de libros, desarrollada con tecnologías web modernas y un diseño inspirado en la magia y el conocimiento.

## Instalación y Configuración

### Clonar el Repositorio
\`\`\`bash
git clone https://github.com/RAlexHerrera/UDV_Aplicacion_de_hojas_de_estilo.git
cd UDV_Aplicacion_de_hojas_de_estilo
\`\`\`

### Opción 1: Instalación con shadcn CLI (Recomendado)
\`\`\`bash
npx shadcn@latest init
\`\`\`

### Opción 2: Instalación Manual
\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
\`\`\`

### Comandos Disponibles
\`\`\`bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código
\`\`\`

## 🛠️ Tecnologías Utilizadas

### Framework Principal
- **Next.js 14.2.25** - Framework de React con SSR y SSG
- **React 19** - Biblioteca para interfaces de usuario
- **TypeScript 5** - JavaScript tipado

### Styling y UI
- **Tailwind CSS 4.1.9** - Framework CSS utility-first
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconos SVG
- **CSS personalizado** - Archivo `estilo.css` con selectores por clase, tipo e ID

### Funcionalidades
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **JavaScript vanilla** - Funcionalidad del carrito y interacciones

## 📝 Prompt Original

\`\`\`
Desarrollar una página web informativa, para una empresa a su elección que ofrezca servicios o productos. Debe incluir:

La empresa sera sobre una empresa de compra y venta de libros, la llamaremos "La Biblioteca de Merlin"

Un menú y link a diferentes páginas desde un navbar
- Hagamos una pagina principal, pagina para leer informacion de localizaciones y contacto, pagina para leer mision y vision, página para revisar los productos, y pagina de carrito

Para todo esto dejemos los datos quemados en todas estas paginas, datos ficticios

Cada página debe tener aplicado un estilo que exista en un archivo que se llama estilo.css,
Debe aplicar selectores por clase, por tipo, por identificación.

Incluyamos JS basico para la funcionalidad

Siempre corroboremos que todo sea funcional antes de entregar.
\`\`\`

## 🏗️ Estructura del Proyecto

\`\`\`
├── app/
│   ├── page.tsx                 # Página principal
│   ├── productos/page.tsx       # Catálogo de libros
│   ├── mision-vision/page.tsx   # Misión y visión
│   ├── localizacion/page.tsx    # Contacto y ubicación
│   ├── carrito/page.tsx         # Carrito de compras
│   ├── layout.tsx               # Layout principal
│   └── globals.css              # Estilos globales
├── components/
│   ├── navbar.tsx               # Barra de navegación
│   └── ui/                      # Componentes de UI
├── public/
│   └── estilo.css               # Estilos CSS personalizados
└── lib/
    └── utils.ts                 # Utilidades
\`\`\`

## 🎨 Características del Diseño

### Paleta de Colores
- **Primario**: Púrpura mágico (#8B5CF6)
- **Secundario**: Dorado elegante (#F59E0B)
- **Neutros**: Grises y blancos para legibilidad
- **Acentos**: Verde esmeralda para elementos especiales

### Tipografía
- **Geist Sans** - Texto principal y navegación
- **Geist Mono** - Elementos de código y detalles técnicos

### Funcionalidades Implementadas
- ✅ Navegación responsive entre páginas
- ✅ Carrito de compras funcional con JavaScript
- ✅ Formularios de contacto interactivos
- ✅ Catálogo de productos con filtros
- ✅ Diseño mobile-first
- ✅ Datos ficticios completos

## 📋 Detalles Importantes

### Selectores CSS Implementados
- **Por clase**: `.hero-section`, `.product-card`, `.navbar-link`
- **Por tipo**: `h1`, `p`, `button`, `form`
- **Por ID**: `#main-hero`, `#contact-form`, `#product-grid`

### JavaScript Funcional
- Carrito de compras con localStorage
- Cálculo dinámico de totales
- Validación de formularios
- Navegación interactiva

### Datos Ficticios Incluidos
- Catálogo completo de libros con precios
- Información de contacto y ubicaciones
- Misión, visión y valores de la empresa
- Testimonios y reseñas de clientes

## 🌐 Páginas Disponibles

- **Inicio** (`/`) - Hero section y libros destacados
- **Productos** (`/productos`) - Catálogo completo con filtros
- **Misión y Visión** (`/mision-vision`) - Información corporativa
- **Localización** (`/localizacion`) - Contacto y ubicaciones
- **Carrito** (`/carrito`) - Gestión de compras

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🔧 Configuración de Desarrollo

El proyecto incluye configuración optimizada para desarrollo rápido:
- TypeScript con verificación flexible
- ESLint configurado para builds
- Imágenes no optimizadas para desarrollo local
- Hot reload automático

---

**Desarrollado como proyecto académico para UDV - Aplicación de Hojas de Estilo**