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

### **IMPORTANTE**

- O projeto ainda está em faze de desenvolvimento e tem muitas coisas faltando, alem de bugs e problemas visuais que com o tempo irei melhorando!

---

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/AiromVince/sistema-solar-2D.git

