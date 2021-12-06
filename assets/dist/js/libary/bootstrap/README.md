# Libary: Bootstrap 
# URI: https://github.com/twbs/bootstrap/archive/v5.0.0.zip
# URI DEMO: https://getbootstrap.com/docs/4.0/getting-started/introduction/

# Dependências: 
- none

# Explicação Geral: 
- Os códigos abaixo são algumas das funções imbutidas na biblioteca do bootstrap


## Carousel: 

    <div class="boot-carousel arousel slide" data-ride="carousel">
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

### Obser: Consulte a estrutura JS no arquivo main/_carousel.js
