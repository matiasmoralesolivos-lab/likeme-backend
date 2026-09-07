# Like Me - Backend

URL ---> https://likeme-frontend-rtxh.onrender.com/

Backend de la aplicación Like Me, desarrollado con Node.js, Express y PostgreSQL.

La API permite crear, consultar, dar likes y eliminar publicaciones.

## Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- CORS

## Instalación

Clonar el repositorio y entrar a la carpeta del proyecto:

git clone https://github.com/matiasmoralesolivos-lab/likeme-backend.git

cd likeme-backend

Instalar las dependencias:

npm install

## Configuración

Crear un archivo .env en la raíz del proyecto y agregar la conexión a PostgreSQL:

DATABASE_URL=tu_conexion_a_postgresql

No subir el archivo .env a GitHub.

## Ejecución

Para iniciar el servidor:

npm start

Para desarrollo:

npm run dev

El servidor se ejecutará en el puerto configurado o, en caso de ejecutarse localmente, en el puerto 3000.

## Rutas de la API

| Método | Ruta | Función |
|---|---|---|
| GET | /posts | Obtener todas las publicaciones |
| POST | /posts | Crear una publicación |
| PUT | /posts/like/:id | Agregar un like |
| DELETE | /posts/:id | Eliminar una publicación |

## Uso

El backend recibe las solicitudes del frontend y realiza las operaciones correspondientes en PostgreSQL.

Las rutas también pueden probarse utilizando Thunder Client.

## Base de datos

La aplicación utiliza una tabla posts con los siguientes campos:

- id
- titulo
- img
- descripcion
- likes
