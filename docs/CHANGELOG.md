# Changelog — Granja Fernandes / GitHub Pages

## 2026-09-20 — Correção visual dos produtos e rodapé

### Correção dos cartões de produtos
- Mantido o alinhamento estrutural dos cartões nas páginas **Início** e **Nossos Ovos**.
- Removida a camada HTML/CSS de selo que estava sendo desenhada sobre as imagens dos produtos.
- As etiquetas de **06 OVOS, 10 OVOS, 12 OVOS e 20 OVOS** voltaram a ser exclusivamente as etiquetas originais incorporadas nas próprias imagens dos produtos.
- Com isso, foram restaurados:
  - a cor de fundo original das etiquetas;
  - o ícone original existente dentro das etiquetas;
  - o posicionamento original das informações gráficas das imagens.
- Removidos os estilos `product-badge` e `egg-icon` introduzidos na alteração anterior.

### Rodapé
Foi padronizado o encerramento do rodapé com:
- **© 2026 Granja Fernandes. Todos os direitos reservados.**
- **Granja Fernandes® é uma marca registrada. É proibida a reprodução total ou parcial sem autorização prévia.**

A página **404** também passou a possuir um rodapé mínimo com essas duas informações.

### Rastreabilidade
- Correção dos produtos: `GF-CODE-014`
- Ajuste estrutural/CSS: `GF-CODE-015`
- Aviso de marca nos rodapés: `GF-CODE-016`
- Rodapé da página 404: `GF-CODE-017`

A documentação integral das decisões permanece no repositório privado de controle do projeto.

## 2026-09-20 — Associação das imagens das receitas

- A página `receitas.html` foi corrigida para usar imagens individuais correspondentes às receitas 1 a 8.
- Caminho padronizado: `assets/images/recipes/`.
- Arquivos esperados: `01_farofa_de_ovos.png`, `02_moqueca_de_ovos.png`, `03_ovo_poche.png`, `04_fios_de_ovos.png`, `05_panqueca_banana_aveia.png`, `06_omelete_banho_maria.png`, `07_arroz_de_frigideira.png` e `08_ovos_dourados_tomate_queijo.png`.
- Os oito arquivos de imagem de origem estão disponíveis entre os materiais fornecidos para o projeto; contudo, a ferramenta GitHub disponível nesta execução não permite transferir diretamente os bytes dos PNGs anexados para blobs binários do repositório. Por isso, a associação no HTML foi preparada, mas a presença física dos oito PNGs no repositório ainda precisa ser concluída.

## 2026-09-21 — Validação final das imagens das receitas

- Verificada a árvore `main` do repositório após o upload realizado pelo usuário.
- Confirmados os 8 arquivos PNG em `assets/images/recipes/`.
- Conferidas as 8 referências em `receitas.html`; todas apontam para os respectivos arquivos e os nomes coincidem.
- Confirmado no CSS que `.recipe-media img` aplica largura total e `object-fit: cover`, permitindo a renderização das imagens no layout atual.
- Não foi necessária alteração de caminho ou nomenclatura no HTML nesta etapa.

## 2026-09-21 — Mapa incorporado na página Contato

- Adicionado um quadro próprio para o Google Maps na página `contato.html`, usando exatamente o código de embed fornecido para a localização da Granja Fernandes.
- O iframe recebeu título acessível, carregamento lazy, `allowfullscreen` e `referrerpolicy` conforme o código fornecido.
- Criado estilo responsivo para o quadro, com borda, cantos arredondados, fundo e largura adaptável ao container da página.
- O botão existente **ABRIR NO GOOGLE MAPS** foi mantido.

## 2026-09-21 — Reposicionamento do mapa na página Contato

- O mapa do Google Maps foi retirado do interior do quadro **Entrega**.
- Foi criado um terceiro quadro exclusivo, **Localização da Granja**, abaixo dos dois quadros principais (**Atendimento** e **Entrega**).
- O novo quadro ocupa toda a largura do container, correspondendo à largura conjunta dos dois quadros superiores no desktop, conforme o leiaute solicitado.
- O embed do Google Maps foi mantido sem alteração de URL/parâmetros.
- O botão **ABRIR NO GOOGLE MAPS** permanece dentro do quadro **Entrega**.

## 2026-09-21 — Correção da largura do quadro do Maps

- Revisado o leiaute da página **Contato** após a validação visual.
- O quadro **Localização da Granja** foi explicitamente definido com `width: 100%` para ocupar toda a largura disponível do container.
- O container interno do mapa também recebeu `width: 100%`.
- O iframe passou a ter largura total e altura explícita de 450px, preservando a responsividade horizontal.
- A estrutura permanece: **Atendimento** + **Entrega** na primeira linha e **Localização da Granja / Maps** em um terceiro quadro abaixo, com a largura conjunta dos dois quadros superiores.
