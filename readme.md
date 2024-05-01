# Grafana Loki Demo

Use Grafana Loki to collect and visualize logs.

## Setup

1. Clone this repo:
```
git clone https://github.com/joaoreider/grafana-loki-demo.git
cd grafana-loki-demo
```
2. Start the environment:
```
docker-compose up -d
```

3. Test the endpoints:

- [http://localhost:8080/generate-log](http://localhost:8080/generate-log) - Generate an info log.
- [http://localhost:8080/error](http://localhost:8080/error) - Generate an error log

## Visualizing:

1. Access Grafana [http://localhost:3000](http://localhost:3000).

2. Login with:

- Usuário: admin
- Senha: admin

3. Add Loki as Data source
