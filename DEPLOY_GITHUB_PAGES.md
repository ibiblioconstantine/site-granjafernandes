# Configuração do GitHub Pages — Granja Fernandes V1

## 1. Repositório
`ibiblioconstantine/site-granjafernandes`

## 2. Branch
`main`

## 3. Pasta de publicação
`/(root)`

## 4. Arquivo de entrada
`index.html`

## 5. GitHub Pages
Settings → Pages → Build and deployment:
- Source: Deploy from a branch
- Branch: main
- Folder: /(root)

## 6. CNAME
O arquivo CNAME usa:
`www.granjafernandes.com.br`

## 7. DNS
Para `www`: CNAME apontando para `ibiblioconstantine.github.io`.

Para o domínio raiz: registros A do GitHub Pages:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

## 8. HTTPS
Após a validação do domínio em GitHub Pages, ativar Enforce HTTPS.

## 9. Produção
Não enviar para este repositório PDFs internos, PHP/WordPress, planilhas, documentos administrativos, senhas ou chaves.