# React frontend

```sh
docker build -f Dockerfile.dev --progress=plain .

# Isolated source code
docker run -p 8080:5173 $id

# Mount volumes
docker run -p 8080:5173 -v /app/node_modules -v $(pwd):/app $id
```
