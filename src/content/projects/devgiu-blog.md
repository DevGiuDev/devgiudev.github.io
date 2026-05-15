---
title: "DevGiu Blog"
description: "Sitio web y blog personal construido con Astro para documentar proyectos"
status: "active"
startDate: 2025-05-15
repo: "https://github.com/devgiudev/devgiu-astro-blog"
url: "https://devgiudev.github.io"
tags: ["astro", "web", "blog"]
featured: true
weight: 10
---

## Sobre este proyecto

Este es mi espacio personal en internet. Un blog y portfolio minimalista construido con Astro para documentar mis proyectos y compartir lo que aprendo.

## Características

- **Tema minimalista**: Diseño limpio y elegante con paleta monocromática
- **Blog**: Sistema de contenido con Markdown/MDX
- **Páginas de proyecto**: Organización por estado (activo, completado, pausa, idea)
- **Dark mode**: Soporte automático para modo oscuro
- **Responsive**: Optimizado para móvil y desktop
- **Rápido**: Generación estática con Astro, sin JavaScript innecesario

## Stack técnico

| Tecnología | Uso |
|---|---|
| Astro 6 | Framework |
| MDX | Contenido |
| CSS Custom Properties | Diseño |
| TypeScript | Tipado |

## Estructura de contenido

```
src/content/
├── blog/        # Entradas del blog
└── projects/    # Documentación de proyectos
```

Cada proyecto tiene su propia página con metadatos: estado, tags, fechas, enlaces al repo y demo.
