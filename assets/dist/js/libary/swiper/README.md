# Libary: Swiper Slider
# URI: https://swiperjs.com/get-started
# URI DEMO: https://swiperjs.com/demos

# Dependências: 
- none

# Explicação Geral: 
- O Swiper é o moderno controle deslizante de toque móvel gratuito com transições aceleradas por hardware e comportamento nativo. Pode ser utilizado em sites, aplicativos da web e aplicativos nativos. O projeto já vem com o Swiper implementado. Para utilização dele, busque no functions "swiperjs", e descomente ele para o wordpress carregá-lo.


# Estruturas: 

## Parâmetros de Chamada(HTML):
- [
    <div class="swiper-container">
        <!-- Wrapper adicional necessário -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- Caso precise de paginação -->
        <div class="swiper-pagination"></div>

        <!-- Caso precise de navegação por botões -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- Caso precise de barra de rolagem -->
        <div class="swiper-scrollbar"></div>
</div>
]



====================//========================//===============


## Escopo de declaração(JS): 
//CAROUSEL 
const swiper = new Swiper('.swiper-container', {
  // Parâmetros opcionais
  direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Responsivo
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

  // Páginação
  pagination: {
    el: '.swiper-pagination',
  },

  // Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

### A estrutura defini os recursos básicos para se utilizar este carrossel, porém na documentação se encontra diversos outros parâmetros para incrementar o mesmo.


======================//===============================//==========

const swiper = new Swiper('.swiper-container', {

    [Definições do carrousel]

}


### O primeiro passo é definir a localização do seu carousel, chamando a classe e chamando a instância "new Swiper";
### Dentro do parâmetro "new Swiper", você vai criar um objeto com os parâmetros. 

======================//===============================//==========

## OS PARÂMETROS BASES: 

    direction: 3

### Irá definir a direção do carrossel

    slidesPerView: 1

### Determina quantos slides terão

    spaceBetween: 10

### Define o espaçamento entre os botões

    breakpoints: {
    // >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

### Nesse parâmetro é possível definir a quantidade de slides e o espaçamento dos mesmos de acordo com a resolução da tela
   
    loop: true 

### Irá determinar se os itens do carrossel irão manter um loop, retornando para a primeira quando chegar ao final dos itens. 

    navigation: { nextEl:  '.swiper-button-next', prevEl: '.swiper-button-prev'}


### Determina as setas de anterior e próximo

    scroll: {el: '.swiper-scrollbar',}

### Inicia o scroll do carrossel de acordo com a classe 