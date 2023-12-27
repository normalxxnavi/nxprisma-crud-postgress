## Crear base de datos

**Pasos**

1. Entrar en la siguiente carpeta:

```sh
cd src/database
```

2. Crear archivo `.env`:

```sh
mv .env.example  .env
nano  .env
```

3. Completar la URL de tu base de datos en Vercel:

```
POSTGRES_URL="postgres://..."
```

El formato de la URL es el siguiente `POSTGRES_URL="postgres://usuario:password@host:5432/basedatos"`


4. Ejecutar script:

```sh
npm run db
```

## Configurar aplicación

> **IMPORTANTE**: Para que la aplicación funcione correctamente, deberás configuar también el archivo `.env` situado en la carpeta raíz del proyecto, es decir en la carpeta donde tenemos el `README.md`

Sigue los siguientes pasos, esta vez en la carpeta raíz del proyecto:

1. Crear archivo `.env`:

```sh
mv .env.example  .env
nano  .env
```

2. Completar la URL de tu base de datos en Vercel:

```
POSTGRES_URL="postgres://..."
```

El formato de la URL es el siguiente `POSTGRES_URL="postgres://usuario:password@host:5432/basedatos"`



## Paquetes usados para Postgres de Vercel

- `@vercel/postgres`