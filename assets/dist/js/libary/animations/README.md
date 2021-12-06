# Libary: Maks jQuery
# URI: https://github.com/web-animations/web-animations-js
# URI DEMO: https://jsbin.com/yageyezabo/edit?html,js,output

# Dependências: 
- None

# Estruturas: 

## Parâmetros de Chamada(HTML):
- Indefinido(Pode ser criado de forma aleatória)

## Escopo de declaração(JS): 

<script>
  var elem = document.querySelector('.pulse');
    var animation = elem.animate({
        opacity: [0.5, 1],
        transform: ['scale(0.5)', 'scale(1)'],
    }, {
        direction: 'alternate',
        duration: 500,
        iterations: Infinity,
    });
</script>


### Explicação: 

var elem = document.querySelector('.pulse'); 
#### Necessário armazenar o parâmetro do item dentro da variável 

========//==================================//====================

 var animation = elem.animate({ 
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)'],
},

#### Em seguida crie um objeto onde será guardado as descrições da animação, contendo apenas os parâmetros de ação.
#### Neste caso, o que irá ocorrer com o elemento na animação.

#### Obser: Essas informações serão adicionadas dentro de um bloco e serão o primeiro parâmetro da função "animate".

========//==================================//====================

{
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
});

#### O segundo parâmetro da função animate será o as declarações do escopo "animation". Nele será adicionado as regras, como direção, duração, interação, tempo e etc. 

#### Obser: No exemplo acima temos que, a animação foi declarada com um interação que alterna(de frente para trás), além de ter a duração de meio segundo(500) e a quantidade de interações ser "infinitas";


