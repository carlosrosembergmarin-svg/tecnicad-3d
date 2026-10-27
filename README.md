# TecniCAD 3D

Primera versión de un CAD técnico paramétrico ligero para Vercel.

## Requisitos
- Node.js 20+
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Deploy en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a Vercel y selecciona **Add New Project**.
3. Importa el repositorio.
4. Framework: Next.js (detección automática).
5. Build command: `npm run build`
6. Deploy.

No requiere variables de entorno para esta V1.

## Funciones incluidas
- Vistas frontal, superior y lateral.
- Vista 3D interactiva con órbita y zoom.
- Pieza paramétrica de placa perforada.
- Dimensiones en mm.
- Rejilla.
- Panel de propiedades.
- Cotas visuales básicas.
- Exportación de plano A4 horizontal a PDF.
- Interfaz responsive.

## Próximas fases
- Editor 2D real con dibujo libre.
- Extrusión desde perfiles.
- Agujeros booleanos reales en el sólido.
- Árbol paramétrico de operaciones.
- DXF/SVG.
- Cajetines configurables.
- Guardado de proyectos.
- Más sólidos y operaciones CAD.
