import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        servicios: 'servicios.html',
        planes: 'planes.html',
        contacto: 'contacto.html',
        noticias: 'noticias.html',
        resenas: 'resenas.html',
        laEmpresa: 'la-empresa.html',
      },
    },
  },
})
