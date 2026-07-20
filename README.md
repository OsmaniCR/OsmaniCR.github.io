# OsmaniCR.github.io

Portafolio personal de Osmani Casanueva Rodríguez, Ingeniero Industrial y Desarrollador de Software.

## Stack

- React
- TypeScript
- Vite
- CSS moderno
- GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev
```

Se requiere Node.js 18.18 o superior.

Para abrir el proyecto en Cursor desde este directorio:

```bash
cursor .
```

## Validación

```bash
npm run lint
npm run build
```

## Despliegue

El workflow de GitHub Actions valida, compila y publica la carpeta `dist` en GitHub Pages al actualizar `main`.

## Estructura

- `src/data/portfolio.ts`: contenido editable del portafolio
- `src/sections/`: secciones principales
- `src/components/`: componentes reutilizables
- `public/`: favicon, sitemap, robots, 404 y metadatos visuales

## Actualización de contenido

Edita `src/data/portfolio.ts` para cambiar enlaces, textos, servicios, casos de estudio y stack.

## Privacidad

Los casos de estudio están redactados de forma anónima y de alto nivel. No incluyen secretos, datos personales ni información sensible de clientes. Los repositorios públicos que corresponden a pruebas técnicas, ejercicios o contextos con restricciones de publicación no se presentan como piezas del portafolio.
