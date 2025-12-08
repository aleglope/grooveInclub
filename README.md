# 🎵 Groove In Club

<div align="center">

![Groove In Club Logo](public/LogoGROOVE.svg)

**Plataforma web oficial para eventos musicales de música electrónica en Galicia**

[![Next.js](https://img.shields.io/badge/Next.js-14.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌐 Ver Demo](#) | [📸 Instagram](https://www.instagram.com/_groovinclub/) | [📱 WhatsApp](https://chat.whatsapp.com/ExtrXCFN9YwGhpABJD8tar)

## </div>

## 📖 Descripción del Proyecto

**Groove In Club** es una plataforma web moderna y dinámica diseñada para promocionar eventos de música electrónica en Galicia. El proyecto presenta una experiencia visual inmersiva con animaciones 3D, efectos interactivos y un diseño responsivo que captura la esencia de la cultura underground y electrónica.

### 🎯 Objetivo

## Crear un punto de encuentro digital donde el público vinculado a la estética urbana y electrónica pueda descubrir eventos innovadores, conectar con la comunidad y mantenerse actualizado sobre las próximas fiestas de Groove In Club.

## ✨ Características Principales

### 🎨 Diseño Premium

- **Interfaz Modern UI/UX** con efectos glassmorphism y gradientes vibrantes
- **Animaciones fluidas** powered by Framer Motion
- **Efectos 3D interactivos** usando Three.js y React Three Fiber
- **Diseño 100% responsive** optimizado para todos los dispositivos

### 🎪 Funcionalidades

- **🗓️ Sistema de Eventos**: Calendario dinámico con información detallada de próximos eventos
- **🌐 Globo 3D Interactivo**: Visualización de ubicaciones de eventos a nivel mundial
- **💬 Testimonios**: Sección de reseñas de asistentes a las fiestas
- **📱 Integración Social**: Enlaces directos a Instagram, YouTube, TikTok y WhatsApp
- **🎫 Reservas**: Sistema de enlace directo para reservar entradas
- **📍 Geolocalización**: Información de ubicación para cada evento
- **🔔 Notificaciones**: Grupo de WhatsApp para novedades instantáneas

### 🛠️ Características Técnicas

- **SEO Optimizado** con metadata completa
- **Monitoreo de Errores** con Sentry
- **Analytics** integrado con Vercel Analytics
- **Carga Optimizada** con loading screen personalizado
- **Navegación Flotante** con scroll suave
- **Componentes Modulares** para fácil mantenimiento

---

## 🏗️ Arquitectura del Proyecto

```
grooveInclub/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   ├── page.tsx                  # Página principal
│   ├── layout.tsx                # Layout raíz
│   ├── globals.css               # Estilos globales
│   └── provider.tsx              # Proveedores de contexto
│
├── components/                   # Componentes React
│   ├── ui/                       # Componentes UI reutilizables
│   │   ├── Spotlight.tsx         # Efecto spotlight
│   │   ├── FloatingNavbar.tsx    # Navegación flotante
│   │   ├── TextGenerateEffect.tsx # Animación de texto
│   │   ├── Slider.tsx            # Carrusel de imágenes
│   │   └── ...
│   ├── Hero.tsx                  # Sección hero principal
│   ├── Grid.tsx                  # Grid de información
│   ├── DatesEvents.tsx           # Calendario de eventos
│   ├── Clients.tsx               # Logos y marcas
│   ├── Experience.tsx            # Sección de experiencia
│   ├── Footer.tsx                # Footer completo
│   └── ...
│
├── data/                         # Datos y configuración
│   ├── index.ts                  # Datos principales (eventos, testimonios)
│   ├── confetti.json             # Animación confetti
│   └── globe.json                # Datos del globo 3D
│
├── public/                       # Assets estáticos
│   ├── LogoGROOVE.svg            # Logo principal
│   ├── *.svg                     # Posters de eventos
│   ├── *.png                     # Imágenes y avatares
│   └── scene-transformed.glb     # Modelo 3D
│
├── lib/                          # Utilidades
│   └── utils.ts                  # Funciones helper
│
├── store/                        # Estado global (Zustand)
│
├── next.config.mjs               # Configuración Next.js
├── tailwind.config.ts            # Configuración Tailwind
├── tsconfig.json                 # Configuración TypeScript
└── package.json                  # Dependencias
```

---

## 🚀 Tecnologías Utilizadas

### Core Framework

- **[Next.js 14](https://nextjs.org/)** - Framework React con App Router
- **[React 18](https://reactjs.org/)** - Librería UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático

### Styling & UI

- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion 11](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Material Tailwind](https://www.material-tailwind.com/)** - Componentes Material Design
- **[class-variance-authority](https://cva.style/)** - Gestión de variantes de componentes
- **[Lucide React](https://lucide.dev/)** - Iconos

### 3D & Visualización

- **[Three.js](https://threejs.org/)** - Librería 3D
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer para Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Helpers para R3F
- **[three-globe](https://github.com/vasturiano/three-globe)** - Visualización de globo 3D

### Carruseles & Animaciones

- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrusel moderno
- **[React Lottie](https://www.npmjs.com/package/react-lottie)** - Animaciones Lottie
- **[React Slick](https://react-slick.neostack.com/)** - Slider de componentes

### Monitoreo & Analytics

- **[Sentry](https://sentry.io/)** - Monitoreo de errores
- **[Vercel Analytics](https://vercel.com/analytics)** - Analytics de rendimiento

### Estado & Utilidades

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gestión de estado global
- **[clsx](https://github.com/lukeed/clsx)** - Utilidad para classNames
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de clases Tailwind

---

## 📦 Instalación

### Prerequisitos

- **Node.js** 16.x o superior
- **npm** o **yarn** o **pnpm**

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/grooveInclub.git
cd grooveInclub
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno** (si aplica)

```bash
cp .env.example .env.local
```

4. **Ejecutar el servidor de desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**

```
http://localhost:3000
```

---

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
# Producción
npm run build        # Construye la aplicación
npm run start        # Inicia servidor de producción
# Utilidades
npm run lint         # Ejecuta linting
npm run deploy       # Despliega a Vercel
```

---

## 📊 Estructura de Datos

### Eventos (`data/index.ts`)

Los eventos se gestionan mediante un array de objetos con la siguiente estructura:

```typescript
{
  id: number;
  title: string;           // Nombre del venue
  des: string;             // Fecha del evento
  img: string;             // Poster del evento
  iconLists: string[];     // Logos relacionados
  instagram: string;       // Link a Instagram
  link: string;            // Link a reservas/tickets
  location: string;        // Ubicación del evento
  startDate: string;       // Fecha y hora de inicio (ISO)
  endDate: string;         // Fecha y hora de fin (ISO)
}
```

### Testimonios

```typescript
{
  quote: string; // Comentario del asistente
  name: string; // Nombre/alias
  title: string; // Título (opcional)
  img: string; // Avatar
}
```

---

## 🎨 Personalización

### Actualizar Eventos

Edita el archivo `data/index.ts` y añade nuevos eventos al array `projects`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Nombre del Venue",
    des: "Fecha del Evento",
    img: "/poster.svg",
    // ... resto de propiedades
  },
  // Añadir más eventos aquí
];
```

### Cambiar Estilos

Los colores y estilos se configuran en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Personalizar colores aquí
    }
  }
}
```

### Modificar Contenido Hero

Edita `components/Hero.tsx` para cambiar el contenido principal:

```typescript
<TextGenerateEffect
  words="Tu mensaje personalizado"
  className="text-center text-[40px] md:text-5xl lg:text-6xl"
/>
```

---

## 🌐 Despliegue

### Desplegar en Vercel (Recomendado)

1. **Push a GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Importar en Vercel**
   - Visita [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa el repositorio
   - Configura las variables de entorno si es necesario
   - Deploy automático ✨
3. **Usando CLI**

```bash
npm run deploy
```

### Otras Plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:

- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**

---

## 🔧 Configuración Avanzada

### Sentry

Para habilitar el monitoreo de errores con Sentry:

1. Actualiza `next.config.mjs` con tus credenciales:

```javascript
org: "tu-organizacion",
project: "tu-proyecto",
```

2. Configura las variables de entorno:

```env
SENTRY_DSN=tu-sentry-dsn
```

### Analytics

Vercel Analytics está integrado por defecto. Para otros servicios:

1. Instala el paquete correspondiente
2. Añade el componente en `app/page.tsx`

---

## 📱 Integraciones Sociales

El proyecto incluye enlaces directos a:

- **Instagram**: [@\_groovinclub](https://www.instagram.com/_groovinclub/)
- **YouTube**: [Groove In Club](https://www.youtube.com/@Groovinclub1/videos)
- **TikTok**: [@\_brenlla](https://www.tiktok.com/@_brenlla)
- **WhatsApp**: [Grupo Comunitario](https://chat.whatsapp.com/ExtrXCFN9YwGhpABJD8tar)

---

## 🤝 Contribución

## Este es un proyecto cliente privado. Para sugerencias o reportes de bugs, contacta directamente con el equipo de desarrollo.

## 📄 Licencia

## Este proyecto es propiedad de **Groove In Club**. Todos los derechos reservados.

## 👥 Equipo

**Desarrollador Web**: [Tu Nombre]
**Cliente**: Groove In Club
**Productor de Eventos**: Equipo Groove In Club

---

## 📞 Contacto

Para consultas comerciales o técnicas:

- **Instagram**: [@\_groovinclub](https://www.instagram.com/_groovinclub/)
- **Email**: contacto@grooveinclub.com (actualizar con email real)
- **WhatsApp**: [Únete al grupo](https://chat.whatsapp.com/ExtrXCFN9YwGhpABJD8tar)

---

## 🎉 Próximos Eventos

## Consulta la sección de eventos en la web para ver las próximas fechas confirmadas en Galicia.

<div align="center">

**Hecho con ❤️ para la comunidad electrónica de Galicia**

_Sleep. Rave. Repeat._

</div>
