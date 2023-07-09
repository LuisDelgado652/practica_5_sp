
# Producción (Dependencias)
FROM node:19 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install


# Ejecución de la app 
FROM node:19 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .
CMD ["node", "index.js"]
