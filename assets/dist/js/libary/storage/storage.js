
/**
 * @developer fernandes(github: https://github.com/Igfernandes)
 * 
 * Libary: Uma biblioteca criada para otimizar a comunicação com o localstorage, tornando dinâmico as requisições.
 * version: 1.0.0
 */

let Storage = function(){

    this.select = function($param){
        /**
         * @description   Irá verificar os dados e inserir dentro do localstorage. Caso não seja definido um "id", só colocar "id" como parâmetro que ele irá criar de forma dinâmica por número 
         * 
         * @param object    declare um objeto do mesmo nome e valor com o id/indice que voce quer buscar o valor no localstorage.
         * @param id        Se voce colocar o valor como "id", ele irá criar índices numéricos dinâmicos.
         * 
         */
      
        let info = Object.values($param) //Transforma os elementos em array

        for(let itens of info){
            let obj = localStorage.getItem(itens)
        
            if($param.id){
                if(obj == null){
                    localStorage.setItem('id', 1) // Caso não haja nenhum índice numérico do padrão "id" ele cria o primeiro
                    return 1;
                }else{
                    let status = parseInt(obj) + 1 // Caso já haja um indíce numérico e o valor seja encontrado ele cria um próximo indíce, passando a localização do ultimo elemento "id" para voce gerar o próximo elemento. 
                    localStorage.setItem('id', status); 
                    return status
                }
            }else{
                if(obj){
                    return obj;
                }else{
                    return false;
                }
            }
        }
    }

    this.save = function($id, $dates){ 
        /**
         * @description   Irá salvar informações no localstorage.
         * 
         * @param id    Guarda o identificador que estará no localstorage
         * @param id    Guarda os dados que serão amarzenados detro do localstorage.
         * 
         */ 
            
        try{
            localStorage.setItem($id, JSON.stringify($dates));
        }catch(err){
            throw new Error("Os dados não foram inseridos no localStorage");
        }
    }

    this.delet = function($act){
        /**
         * @description   Irá apagar informações no localstorage.
         * 
         * @param $act    É um objeto que guarda os seguintes parâmetros:
         *      @param key      É o identificador do campo que deseja excluir
         *      @param action   É o parâmetro especial para deletar todos elementos com 'id' to tipo número. Passe o valor "all" ou não declare. 
         * 
         */ 
        
        if($act.key){
            if(!$act.action){
                localStorage.removeItem($act.key);

            }else if($act.key == "all"){
                let val = localStorage.getItem('id');
                
                for(let r = 1; r <= val; r++ ){
                    localStorage.removeItem(r)
                }
            }
        } 
      
    }

    this.toConvert = function($obj){
        /**
         * @description   Irá transformar array em objeto. Além de capturar no localstorage o valor do campo, 
         * ainda converte objetos em array e retorna os valores.
         * 
         * @param $id         Guarda o identificador que estará no localstorage
         * @param $dates      Guarda os dados que serão amarzenados detro do localstorage
         */ 

        let list = new Array();

        let id = this.select($obj);
        for(let x =1; x <= id; x++){
            
            let bloco = JSON.parse(this.select({"fields": x}));

            if(bloco === null){
                continue
            }
            bloco['id'] = x; 

            list.push(bloco);
        }

        return list; 
    }
}

