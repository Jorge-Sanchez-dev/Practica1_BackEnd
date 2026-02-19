# Star Wars Characters

Aplicación web desarrollada con React y TypeScript que consume la API pública de Star Wars para mostrar una lista de personajes con un botón para la paginación.  
La aplicación está estructurada por componentes y gestiona estados de carga y error.

## Como ejecutar el código

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-nombre-usuraio/nombre-repositorio.git
cd nombre-repositorio
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto:
```bash
VITE_API_URL=https://swapi.dev/api
```

### 4️⃣ Ejecutar el proyecto en local
```bash
npm run dev
```

Abrir el navegador en:
```bash
http://localhost:5173
```

## 📁 Archivos que contiene el código

A continuación se describen los archivos que han sido creados o modificados durante el desarrollo de la práctica, junto con su función dentro de la página web.

---

### 🔹 `src/api/api.ts`
Simplemente se llama a la API de Star Wars con Axios.
Se utiliza la variable de entorno `VITE_API_URL` para definir la URL base de la API.

---

### 🔹 `src/components/CharacterCard.tsx`
Componente encargado de mostrar la información de un único personaje de Star Wars.

---

### 🔹 `src/components/CharacterList.tsx`
Componente encargado de renderizar el listado de personajes.

---

### 🔹 `src/components/Loader.tsx`
Componente simple para mostrar el estado de carga de la aplicación.

---

### 🔹 `src/components/Error.tsx`
Componente que muestra un mensaje de error cuando falla la petición a la API.

---

### 🔹 `src/components/style.css`
Archivo de estilos para los componentes (cards y listado de personajes).

---

### 🔹 `src/types/people.ts`
Definición del tipo del personaje de Star Wars según la estructura de la API de SWAPI.

---

### 🔹 `src/types/index.ts`
Archivo de reexportación de tipos.

---

### 🔹 `src/App.tsx`
Componente principal de la aplicación. Donde se llama a listar personajes.

---

### 🔹 `src/App.css`
Estilos generales de la aplicación.

---

### 🔹 `.env`
Archivo de configuración de variables de entorno. (Explicado anteriormente)


## ⚠️ Problemas encontrados y soluciones

- **Pantalla en blanco al cargar la aplicación**  
  *Problema:* configuración incorrecta de la variable de entorno `VITE_API_URL`.  
  *Solución:* revisar el archivo `.env` y reiniciar el servidor de desarrollo tras cualquier cambio.

- **Las tarjetas no mantenían el mismo tamaño**
  *Causa:* los textos de longitud variable provocaban alturas distintas.
  *Solución:* establecer una altura mínima común y usar flex para distribuir el contenido.
