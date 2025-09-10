# 🌞 Sistema Solar 2D

Um projeto interativo que simula o **Sistema Solar em 2D**, permitindo explorar planetas, órbitas e movimentos celestes de forma simples e visual. COmpletamente diferente de simuladores online tradicionais, este contem segredos e funcionalidades unicas.

---

##  Funcionalidades

- Simulação das órbitas dos planetas ao redor do Sol em tempo real
- Movimentação suave dos corpos celestes atualizados em (`milesegundos`)
- Visualização do Sistema Solar em 2D com escala aproximada
- Interface relativamente limpa e intuitiva
- O Código é totalmente em HTML, CSS e JavaScript
- Segredos e informaçoes que amadores podem descobrir ao explorar o sistema

---

##  Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e conceitos:

### **HTML5**
- Estrutura da página (`index.html`)  
- Elementos para planetas, sol, órbitas, menus e painéis de informação  

### **CSS3**
- Estilização de planetas, sol e órbitas  
- Animações (`transform`, `opacity`, `scale`)  
- Classes dinâmicas para mostrar/ocultar elementos (`hide-orbit`, `hide-trail`, `zoomed-out`)  

### **JavaScript (Vanilla JS)**
- **Transformações e Zoom**
  - `translate` e `scale` para mover e aproximar elementos do Sistema Solar  
  - Suporte a drag-and-pan com o mouse  
- **Detecção de Eventos**
  - `mousedown`, `mousemove`, `mouseup` → drag da tela  
  - `wheel` → zoom com scroll  
  - `click` → interação com botões de menu e planetas  
- **Animações e Tracking**
  - `requestAnimationFrame` para seguir planetas e suavizar movimentos  
- **Manipulação Dinâmica de Estilos**
  - Ajuste de tamanhos e opacidade de planetas, órbitas e nomes baseado no zoom  
  - Ajuste de tamanho do Sol e sombra dinamicamente  
- **Áudio Interativo**
  - Reprodução de sons dos planetas e galáxias ao passar o mouse (`mouseover`, `mouseout`)  
  - Controle de play, pause e mute  
- **Painéis e Menus Interativos**
  - Menu lateral, painel de configuração, painel de informações  
  - Toggle buttons para mostrar/esconder elementos  
- **APIs Externas**
  - NASA APOD (Astronomy Picture of the Day)  
  - NASA NEO (informações sobre asteroides próximos da Terra)  
  - Google Translate API (tradução de textos)  
- **Controle de Tempo e Simulação**
  - Pausar, avançar e retroceder a simulação do movimento planetário  
  - Slider de tempo e multiplicador de velocidade  

### **UX/UI Interativo**
- Botões de seguir planetas, exibir trilhas e nomes  
- Loader inicial com progress bar  
- Feedback visual com sombras, bordas neon e animações suaves  

---

## O que aprendi com o projeto Sistema Solar 2D

Durante o desenvolvimento deste projeto, aprendi e pratiquei diversas habilidades em front-end e interatividade:

### **HTML5**
- Criei a estrutura completa da página, incluindo elementos para planetas, o Sol, órbitas, menus e painéis de informação.  
- Entendi como organizar semanticamente os elementos para facilitar a manipulação via CSS e JavaScript.

### **CSS3**
- Estilizei planetas, o Sol e as órbitas, aplicando cores, sombras e efeitos visuais.  
- Aprendi a usar `transform`, `opacity` e `scale` para animações suaves.  
- Trabalhei com classes dinâmicas para mostrar ou ocultar elementos conforme a interação do usuário (`hide-orbit`, `hide-trail`, `zoomed-out`).

### **JavaScript (Vanilla JS)**
- **Transformações e Zoom:** manipulei `translate` e `scale` para criar efeitos de movimentação e aproximação do sistema solar, incluindo drag-and-pan.  
- **Eventos e Interatividade:** usei `mousedown`, `mousemove`, `mouseup`, `wheel` e `click` para interações complexas com mouse e teclado.  
- **Animações e Tracking:** implementei `requestAnimationFrame` para seguir planetas e suavizar movimentos da tela.  
- **Manipulação de Estilos Dinâmicos:** ajustei tamanhos, opacidade e posições de planetas, órbitas e nomes baseado no zoom e em ações do usuário.  
- **Áudio Interativo:** adicionei sons aos planetas e galáxias, com controle de play, pause e mute.  
- **Painéis e Menus:** desenvolvi menus laterais, painéis de configuração e informação, e toggle buttons para interações dinâmicas.  
- **APIs Externas:** integrei dados da NASA APOD e NEO, além de tradução de textos via Google Translate API.  
- **Simulação Temporal:** implementei controles para pausar, avançar e retroceder a simulação do movimento planetário, incluindo slider de tempo e multiplicador de velocidade.

### **UX/UI Interativo**
- Criei botões para seguir planetas, exibir trilhas e nomes, melhorando a experiência do usuário.  
- Desenvolvi um loader inicial com progress bar.  
- Apliquei feedback visual com sombras, bordas neon e animações suaves, tornando a interação mais agradável.

---

### **IMPORTANTE**

- O projeto ainda está em fase de desenvolvimento e tem muitas coisas faltando, alem de bugs e problemas visuais que com o tempo irei melhorando!

---

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/AiromVince/sistema-solar-2D.git

