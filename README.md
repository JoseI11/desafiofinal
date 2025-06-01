# Desafío Final – Handlebars + Express + MongoDB

Este proyecto es una aplicación web desarrollada con **Node.js**, **Express**, **Handlebars** y **MongoDB**. Fue creado como parte de un desafío técnico para aplicar conceptos de rutas, vistas dinámicas, manejo de datos desde una base de datos y renderizado del lado del servidor.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Express-Handlebars
- MongoDB (con mongoose)
- JavaScript
- CSS3
- HTML5

## 🧩 Funcionalidades principales

- Renderizado dinámico de vistas con Handlebars.
- Conexión a base de datos MongoDB para almacenar y consultar datos.
- CRUD básico (crear, leer, actualizar, eliminar) desde rutas Express.
- Manejo de rutas y lógica desde el servidor.
- Estilos personalizados con CSS.
- Estructura modular y organizada.

## 📂 Estructura del proyecto

```
desafiofinal/
├── public/
│   └── css/           # Estilos CSS
├── routes/            # Rutas Express
├── views/             # Plantillas Handlebars (layouts y páginas)
├── models/            # Esquemas de Mongoose
├── app.js             # Configuración principal del servidor
├── package.json
```

## 🛠️ Instalación y uso local

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/JoseI11/desafiofinal.git
   cd desafiofinal
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Configurá las variables de entorno (por ejemplo, conexión a MongoDB):

   Crea un archivo `.env` con el siguiente contenido:

   ```
   MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base_de_datos>
   ```

4. Iniciá el servidor:
   ```bash
   npm start
   ```

5. Abrí tu navegador en:
   ```
   http://localhost:3000
   ```

## 📌 Requisitos

- Node.js v16+ instalado
- Cuenta gratuita en MongoDB Atlas o base de datos MongoDB local
- Navegador web moderno

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y personales. Libre de usar y modificar.
