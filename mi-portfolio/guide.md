Para añadir otro idioma en tu Astro con i18n, en tu proyecto tienes que tocar estas partes:

Registrar el idioma en el tipo y en el resolver

Archivo: src/i18n/utils.ts
Debes ampliar Locale para incluir el nuevo idioma.
Debes añadir el nuevo diccionario a translations.
Debes actualizar getLocaleFromUrl() para que reconozca la nueva ruta.
Crear las traducciones

Ahora mismo tienes diccionarios en:
src/i18n/en.ts
src/i18n/es.ts
Para un idioma nuevo, crea algo como src/i18n/pt-br.ts y copia la misma estructura de claves.
Crear la ruta del idioma

Ya tienes páginas separadas en:
src/pages/en/index.astro
src/pages/es/index.astro
Debes crear la carpeta y página del nuevo idioma, por ejemplo:
src/pages/pt-br/index.astro
Actualizar el cambio de idioma en la navbar

Archivo: src/components/layout/Navbar.astro
Ahí tienes el switch entre es y en.
Hay que añadir la lógica para el nuevo idioma y decidir cómo alternar entre los 3.
Revisar el redirect inicial

Archivo: src/pages/index.astro
Ahora redirige solo a es o en según navigator.language.
Si agregas otro idioma, conviene ampliar esa detección.
Traducir textos hardcoded

En varios componentes todavía hay textos escritos directo en el JSX/Astro.
Ejemplos:
src/components/boxes/About.astro
src/components/boxes/Projects.astro
src/components/boxes/Presentation.astro
Todo texto visible debería salir de t(locale, ...) o de props por idioma.
Revisar astro.config.mjs

Archivo: astro.config.mjs
Ya tienes pt-br declarado en locales, así que ese punto ya está cubierto.
Importante: en tu repo ya aparece pt-br en astro.config.mjs, pero el resto de la app todavía no lo usa. Además, src/locales/pt-br.json está vacío y ahora mismo tu app no parece consumir ese JSON, sino los archivos TS de src/i18n/en.ts y src/i18n/es.ts.

Si quieres, puedo dejarte el idioma nuevo ya implementado en este proyecto.