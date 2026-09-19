# Histórico de atualizações — 2026-09-19

## Tarefas executadas

### Task 1 — alinhamento dos produtos
Ajustado o componente de produtos nas páginas **Início** e **Nossos Ovos** para manter altura de imagem uniforme, alinhamento vertical entre cartões e bloco de informações com altura consistente. O objetivo é evitar diferenças de posição entre títulos, preços e botões.

### Task 2 — ícone com geometria de ovo
O ícone exibido no selo verde dos produtos deixou de depender da geometria circular embutida nas imagens. Foi criado um selo HTML/CSS padronizado com formato ovalado de ovo, aplicado aos produtos de 06, 10, 12 e 20 ovos. Isso mantém a posição, proporção e geometria iguais nas duas páginas, independentemente do enquadramento da fotografia.

### Task 3 — receitas
A página **Receitas e Dicas** foi substituída por uma estrutura editorial com as 8 receitas do guia que foram acompanhadas das imagens fornecidas nesta etapa:
1. Farofa de Ovos com Cebola
2. Moqueca de Ovos Baiana Tradicional
3. Ovo Pochê Perfeito
4. Fios de Ovos Tradicionais
5. Panqueca Doce de Banana, Ovo e Aveia
6. Omelete Super Fofa em Banho-Maria
7. Arroz de Frigideira com Ovos, Alho-Poró e Queijo
8. Ovos Dourados com Tomate e Queijo

Os textos publicados seguem o conteúdo e a organização do PDF fornecido para o projeto, com ingredientes, modo de preparo, tempo, rendimento e dicas.

O PDF também contém as receitas 9 e 10. Elas não foram colocadas na página nesta etapa porque não vieram acompanhadas das respectivas fotos no conjunto de materiais enviados.

## Arquivos alterados

- `index.html`
- `nossos-ovos.html`
- `receitas.html`
- `assets/css/style.css`

## Observação sobre os arquivos fotográficos

Os 8 arquivos de imagem das receitas foram recebidos nesta conversa, porém o conector GitHub disponível nesta execução permite gravar arquivos de texto diretamente no repositório, enquanto o fluxo de publicação de binários/imagens fornecidos na conversa não ficou disponível para concluir o envio desses PNGs ao GitHub.

Por isso, o conteúdo das 8 receitas já está publicado e estruturado no site, mas a associação final das 8 fotos ao diretório `assets/images/recipes/` permanece como pendência técnica de publicação dos binários.

## Commits

- Task 1 + Task 2: `GF-CODE-012`
- Task 3: `GF-CODE-013`

## Referência do material recebido

O guia fornecido contém 10 receitas. As oito primeiras, correspondentes às fotos enviadas nesta etapa, foram usadas como base da publicação desta versão.
