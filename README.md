# Project: Hotsite Inspira
# Desenvolvedor: Igor Fernandes Barreto


<pre>
- O projeto foi construído para atender as necessidades comerciais da Internit.
</pre>

## Apresentação:
<img src="./screenshot.jpg" alt="screenshot">

- Link do projeto: https://inspiraresidencial.com.br



## 🔗 Grade de conteúdos:

- [Recursos](#recursos)
- [Arquitetura](#arquitetura)
- [Instruções](#instruções)


============================//================//===========

## ⚡ REQUISITOS:

- [PHP 7.2.34](VERSÃO PHP 7.2.34)


## ⚡ RECURSOS:

### [RECURSOS] - Styles
- [SASS](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/)

### [RECURSOS] - Scripts
- [intTellInput](https://intl-tel-input.com)
- [JqueryMask](https://igorescobar.github.io/jQuery-Mask-Plugin/)
- [fslightbox](https://www.webdesign-flash.ro/p/rl/jsapi.html)
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [popper](https://popper.js.org)
- [SwiperSlider](https://swiperjs.com/)
- Bootstrap



## 📂 ARQUITETURA

<table>
    <thead>
        <tr>
            <td>Directório</td>
            <td>1° Setor</td>
            <td>2° Setor</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>assets</td>
            <td>dist ~| src</td>
            <td>css - Js - webfonts   ~|  fonts - img - scss </td>
        </tr>
        <tr>
            <td>globals</td>
            <td>...</td>
        </tr>
        <tr>
            <td>inc</td>
            <td> ... ~| modal </td>
        </tr>
        <tr>
            <td>struct</td>
            <td>forms</td>
            <td>...</td>
        </tr>
        <tr>
            <td>tools</td>
            <td>...</td>
        </tr>
    </tbody>
</table>


## [ARQUITETURA] - Visual:

| Directório     | 1° Setor      | 2° Setor                                          |  
| ---            |               |                                                   |
| assets         | dist ~~ src   | css - js - webfonts   ~~   fonts - img - scss     | 
| globals        | ...           |                                                   |
| inc            | ...  ~~ modal | ...                                               |  
| structs        | forms         | ...                                               |
| tools          |  ...                                                              |

**Obser: A pasta "src" está guardando todo os arquivos sass**
**Obser: O repositório "public/assets/dist" está guardando o JS editável**


## 📂 INSTRUÇÕES


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS

<pre>
- A folha de estilo foi construída com SASS, mas está sendo utilizado o node para sua compilação. Toda vez que criar um arquivo, apenas o importe para dentro do main, para que seja compilado tbm. 
</pre>

<h3><strong>Abaixo se encontra uma tabela com a indicação de cada arquivo de estilo:</strong></h3>



## [INSTRUÇÕES] - COD:

<table>
    <thead>
        <tr>
            <td>Função</td>
            <td>Arquivo</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Índice</td>                   
            <td>template-globals.scss</td>
        </tr>
        <tr>
            <td>Funções</td>
            <td>tools/mixin.scss</td>
        </tr>
        <tr>
            <td>Fontes</td>
            <td>settings/font.scss</td>
        </tr>
        <tr>
            <td>cores</td>
            <td>settings/colors.scss</td>
        </tr>
        <tr>
            <td>bibliotecas</td>
            <td>libary/...</td>
        </tr>
        <tr>
            <td>layouts</td>
            <td>layout/...</td>
        </tr>
         <tr>
            <td>Keyframes adicioais</td>
            <td>animations/...</td>
        </tr>
    </tbody>
</table>


## [INSTRUÇÕES] - Visual:

| Função                     | Arquivo                     |
| ---                        |                             |
| Índice                     |  template-globals.scsss     |
| Funções                    |  tools/mixin.scss           |
| Fontes                     |  settings/font.scss         |
| cores                      |  settings/colors.scss       |
| bibliotecas                |  libary/...                 |
| layouts                    |  layout/...                 | 
| Keyframes adicioais        |  animations/...             |   


**OBS¹: O container principal que engloba o layout respeita a configuração do bootstrap de "col-11" para dispositivos desktop e "col-12" para dispositivos com telas menores do que 1444px.**

Na função criada de responsividade, existem as seguintes medidas:

| Dispositivo                 | Largura    |
| ---                         |            |
| Extra Extra largo (desktop) | 1550px     |
| Extra largo (desktop)       | 1240px     |
| Largo (laptop)              | 1025px     |
| Medio (tablet)              | 770px      |
| Pequeno (mobile)            | 550px      |
| Extra pequeno (mobile)      | 370px      |


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - JS
<pre>
- As declarações precisam ser criadas dos arquivos presentes na pasta "/main". Caso haja necessidade de criar outro, exporte e importe tudo para template-globals.js
</pre>

