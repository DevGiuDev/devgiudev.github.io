# Web personal con Hugo

Sitio estático simple para blog y proyectos, pensado para escribir en Markdown y guardar las imágenes junto a cada entrada mediante page bundles.

## Requisitos

- [Hugo](https://gohugo.io/) instalado en tu equipo

## Instalar dependencias

No hay dependencias frontend adicionales. Solo necesitas Hugo.

## Arrancar el servidor local

```bash
hugo server
```

Si quieres incluir borradores:

```bash
hugo server -D
```

## Crear un nuevo post

```bash
hugo new content posts/mi-post/index.md
```

Eso crea una carpeta para el post. Luego deja el contenido en `content/posts/mi-post/index.md` y las imágenes al lado:

```text
content/posts/mi-post/
  index.md
  imagen.png
```

En el Markdown puedes usar rutas simples:

```md
![Descripción](imagen.png)
```

## Crear un nuevo proyecto

```bash
hugo new content projects/mi-proyecto/index.md
```

La estructura es la misma:

```text
content/projects/mi-proyecto/
  index.md
  screenshot.png
```

## Añadir imágenes

- Copia la imagen dentro de la misma carpeta del `index.md`
- Usa rutas relativas simples
- No hace falta HTML inline ni estilos en cada post

Ejemplo:

```md
![Captura](screenshot.png)
```

## Escribir desde Joplin

1. Escribe la nota en Joplin en Markdown.
2. Exporta o copia el Markdown.
3. Pega el contenido en `content/posts/nombre-del-post/index.md`.
4. Copia las imágenes al mismo directorio.
5. Ajusta el front matter si hace falta.

Ejemplo de front matter:

```yaml
---
title: "Mi primer post"
date: 2026-05-20
description: "Descripción breve del post"
tags: ["hugo", "blog"]
draft: false
---
```

## Publicar

Antes de desplegar, ajusta `baseURL` en `hugo.toml` al dominio final de tu web.

Genera el sitio estático:

```bash
hugo
```

El resultado queda en `public/`. Sube esa carpeta a tu hosting estático o despliega con el sistema que uses.

## Comandos útiles

```bash
hugo server
hugo new content posts/mi-post/index.md
hugo new content projects/mi-proyecto/index.md
hugo
```
