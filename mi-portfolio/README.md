# Astro Starter Kit: Basics


## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   │ 
│   │   ├── layout/     # componentes relacionados con estructura y diseño gral (header, container, footer, etc.)
│   │   │ 
│   │   ├── ui/         # componentes relacionados con la interfaz de usuario (Button, input, Modal, Select, etc.)
│   │   │ 
│   │   ├── ui/         # componentes relacionados con formularios (LoginForm,RegisterForm,ContactForm, etc.)
│   │   │
│   │   └── Welcome.astro
│   │
│   ├── layouts
│   │   └── Layout.astro
│   │
│   ├── hooks/          # funciones personalizadas de React (useState, useEffect, etc.)
│   │   └── 
│   └── pages
│       └── index.astro
└── package.json
```

## Estructura de referencia
├── frontend/               # Proyecto Next.js 15 (con React dentro)
│   ├── src/                
│   │   ├── app/                # App Router
│   │   │   ├── globals.css     # CSS global
│   │   │   ├── layout.js       # Layout global (envuelve todas las páginas)
│   │   │   ├── page.js         # página principal (/)
│   │   │   ├── profile/        # perfiles de usuarios
│   │   │   └── ...
│   │   ├── components/         # componentes reutilizables (botones, forms, cards, etc.)
│   │   │       ├── layout/     # componentes relacionados con estructura y diseño gral (header, container, footer, etc.)
│   │   │       ├── ui/         # componentes relacionados con la interfaz de usuario (Button, input, Modal, Select, etc.)
│   │   │       ├── forms/      # componentes relacionados con formularios (LoginForm,RegisterForm,ContactForm, etc.)
│   │   │       └── ...
│   │   ├── context/            # contextos creados para compartir datos entre componentes 
│   │   ├── hooks/              # funciones personalizadas de React (useState, useEffect, etc.)
│   │   ├── lib/                # funciones helpers (fetch API, validaciones)
│   │   ├── styles/             # Tailwind o CSS modules
│   │   ├── public/             # assets públicos (imágenes, íconos, favicon, etc.)
│   │   ├── utils/             # funciones que manejan lógica relacionada a los componentes.
│   │   └── ...
│   └── ...
├── docs/                   # Documentación del proyecto
└── README.md


## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
