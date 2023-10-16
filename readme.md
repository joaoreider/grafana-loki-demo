# Grafana Loki Demo

Este é um projeto de demonstração que ilustra como usar o Grafana Loki para coletar e visualizar logs. Com a ajuda do Docker Compose, você pode facilmente configurar a aplicação e começar a gerar registros de exemplo. 

Antes de começar, certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.


## Configuração e Execução

1. Clone este repositório para o seu ambiente local:
```
git clone https://github.com/joaoreider/grafana-loki-demo.git
cd grafana-loki-demo
```
2. Execute o Docker Compose:
```
docker-compose up -d
```
Isso criará os contêineres da aplicação e os serviços necessários.

3. A aplicação estará disponível nos seguintes endpoints:

- [http://localhost:8080/generate-log](http://localhost:8080/generate-log) - Gera um log de informação.
- [http://localhost:8080/error](http://localhost:8080/error) - Gera um log de erro.

## Visualização de Logs no Grafana

Você pode visualizar os logs coletados pelo Grafana Loki no painel de monitoramento do Grafana. Siga estas etapas:

1. Acesse o Grafana em [http://localhost:3000](http://localhost:3000).

2. Se solicitado, faça login no Grafana. As credenciais padrão são:

- Usuário: admin
- Senha: admin


3. No painel do Grafana, adicione Loki como fonte de dados:

- Vá para "Configuration"  no painel de controle do Grafana
- Selecione "Data Sources" 
- Clique em "Add data source"
- Escolha "Loki" como fonte de dados
- Clique em "Save & Test" para confirmar a configuração.

4. Agora você pode visualizar e analisar os logs gerados pela aplicação.

## Encerrando a Aplicação

Para encerrar a aplicação e os contêineres do Docker, execute o seguinte comando na pasta do projeto:
```
docker-compose down
```
Isso encerrará todos os serviços e contêineres.