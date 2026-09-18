# Configuração do GitHub Pages — Granja Fernandes V1

## 1. Repositório

Criar um repositório dedicado, por exemplo:

`granja-fernandes-site`

Para contas no GitHub Free, o repositório precisa ser público para usar GitHub Pages.

## 2. Branch

Usar:

`main`

O `main` será a fonte oficial da primeira versão.

## 3. Pasta de publicação

Usar a raiz do repositório:

`/(root)`

Não usar `/docs` nesta V1.

## 4. Arquivo de entrada

O arquivo obrigatório da raiz é:

`index.html`

As demais páginas ficam na raiz para URLs simples:

- `nossa-historia.html`
- `nossos-ovos.html`
- `receitas.html`
- `contato.html`
- `404.html`

## 5. GitHub Pages

No repositório:

Settings → Pages → Build and deployment

Selecionar:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

Depois clicar em `Save`.

Esta V1 não precisa de GitHub Actions para fazer build: os arquivos já são HTML/CSS/JS estáticos.

## 6. CNAME

O arquivo `CNAME` já está preparado com:

`www.granjafernandes.com.br`

A presença do arquivo não substitui a configuração do domínio em Settings → Pages.

## 7. DNS

No provedor onde o domínio estiver administrado, usar:

### www

Tipo: `CNAME`

Nome/Host: `www`

Destino: `<SEU_USUARIO_GITHUB>.github.io`

### domínio raiz

Tipo: `A`

Host: `@`

Valores:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Os registros AAAA oficiais do GitHub Pages podem ser adicionados quando o provedor DNS os suportar corretamente.

## 8. HTTPS

Depois que o domínio estiver validado em GitHub Pages, ativar:

`Settings → Pages → Enforce HTTPS`

## 9. O que NÃO deve ser enviado ao repositório público de produção

Não copiar para este repositório:

- PDFs de planejamento;
- arquivos PHP do tema WordPress;
- versões antigas/legacy;
- planilhas internas;
- documentos de pendências;
- dados de acesso, senhas ou chaves;
- pacotes ZIP de trabalho;
- arquivos pessoais ou administrativos.

Esses materiais permanecem no acervo de projeto e não fazem parte da publicação.

## 10. Compatibilidade

A versão WordPress existente no acervo não pode ser publicada diretamente no GitHub Pages porque o Pages não executa PHP. Esta V1 usa HTML, CSS e JavaScript estáticos.

## 11. Após o primeiro deploy

Validar:

- Home;
- menu desktop e mobile;
- todos os links internos;
- botões do WhatsApp;
- imagens;
- página 404;
- domínio personalizado;
- HTTPS;
- visual em celular e desktop;
- carregamento sem arquivos quebrados.
