
# Aplicação GoBarber 🧔 - Backend

Implementação da API proposta no Bootcamp Gostack 14 da 🚀@Rocketseat
## Executar localmente

Clone o projeto

```bash
  git clone https://github.com/jaojpaulo/gobarber_backend.git
```

Vá para a pasta do projeto

```bash
  cd gobarber_backend
```

Crie os contiaineres no Docker

```bash
  docker run --name redis -p 6379:6379 -d -t redis:alpine
  docker run --name mongodb -p 27017:27017 -d -t mongo
  docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Instale as dependências do projeto

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev:server 
```
