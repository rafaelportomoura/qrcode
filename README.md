# QR Code CLI

QR Code CLI é uma ferramenta de linha de comando para gerar códigos QR de forma fácil e rápida.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/rafaelportomoura/qrcode.git
   cd qrcode
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

## Uso

### Comandos Disponíveis

- `-V, --version`:
  - Exibe a versão do programa.

- `-h, --help`:
  - Exibe ajuda para o comando.

- `generate [options]`:
  - Gera um código QR.

#### Gerar um Código QR

Para gerar um código QR, use o comando `generate` com as seguintes opções:

- `-o, --output-path <path>`: Especifica o caminho do arquivo de saída para o QR Code gerado, padrão é `qr-code.png`.
- `-t, --text <text>`: Especifica o texto ou URL para ser codificado no QR Code.
- `-l, --logger-level [logger_level]`: Especifica o nível de log, padrão é `log`
- `-h, --help`: Mostra o texto de ajuda

Exemplo:
```bash
npx tsx src/index.ts generate -t "Hello, World!" -o "./qrcode.png"
```

### Ajuda

Para exibir ajuda sobre um comando específico, use o comando `help` seguido pelo nome do comando.

Exemplo:
```bash
npx tsx src/index.ts help generate
```

## Exemplo de Uso

Gerar um QR Code para o texto "Hello, World!" e salvar como `qrcode.png`:
```bash
npx tsx src/index.ts generate --data "Hello, World!" --output "./qrcode.png"
```

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
