# Developer: Igor Fernandes Barreto
# Company: Internit: Desenvolvedora Web 
# URI DEMO: 

# Dependências: 
- Swiper
- Bootstrap(Css & Js)

# Explicação Geral: 
- É o local de declaração das bibliotecas de forma dinâmicas com verificadores de existência, para evitar erros no console e outros recursos. Não é necessário nada além da implementação das classes para criar os eventos de carousel no Owl, mas no bootstrap tem uma estrutura HTML.

## Carousel-Bootstrap: 

    <div class="boot-carousel carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="<?php echo get_template_directory_uri()?> /assets/src/img/aparelhos.png" alt="">
            </div>
            <div class="carousel-item">
                <img src="<?php echo get_template_directory_uri()?> /assets/src/img/aparelhos.png" alt="">
            </div>
            <div class="carousel-item">
                <img src="<?php echo get_template_directory_uri()?> /assets/src/img/aparelhos.png" alt="">
            </div>
        </div>
    </div>

### Obser: Diferente do Owlcarousel, o bootstrap voce precisa colocar essas classes e dependências na estrutura para que o carousel funcione. 


## Carousel-swiper: 

  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>



====================//========================//===============

## Escopo de declaração owlCarousel (JS): 

- cmd.bootstrap() - Esta função retorná a produção de uma estrutura carousel do bootstrap. Dentro dela voce tem dois parâmetros: 

    cmd.bootstrap($obj) - O primeiro parâmetro armazena a estrutura de definições do carousel. Apenas abra um bloco e faça a declaração tradicional. Ex:
        cmd.bootstrap({
            interval: 1000,
            wrap: false
        })

    cmd.owl($obj, $coord) - O segundo parâmetro é responsável por guardar a posição do carousel, no caso, declare a posição com os prefixos('.' se for class e "#" se for id e etc). Caso não seja declarado nada, o seu default é ".boot-carousel". 



## Escopo de declaração owlCarousel (JS): 

- cmd.swiper() - Esta função retorná a produção de uma estrutura swiper. Dentro dela voce tem dois parâmetros: 

    cmd.swiper($obj) - O primeiro parâmetro armazena a estrutura de definições do carousel. Apenas abra um bloco e faça a declaração 
    tradicional. Ex:
        cmd.swiper({
                // Optional parameters
                direction: 'horizontal',
                loop: true,
            
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },
            
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                }
            })

    cmd.swiper($obj, $coord) - O segundo parâmetro é responsável por guardar a posição do carousel, no caso, declare a posição com os prefixos('.' se for class e "#" se for id e etc). Caso não seja declarado nada, o seu default é ".swp-carousel". 




    