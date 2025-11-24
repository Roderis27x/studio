# Etapa 1: Instalación de dependencias
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia archivos de dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Etapa 2: Build de la aplicación
FROM node:22-alpine AS builder
WORKDIR /app

# Copia dependencias instaladas
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de Next.js
RUN npm run build

# Etapa 3: Producción
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia archivos necesarios
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
