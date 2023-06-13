//dom de propriedade
export function domInjector(seletor: string){
    return function( target: any, propertyKey: string){
        
        console.log(`Modificando protype ${target.constructor.name}e adicionado getter para a propriedade ${propertyKey}`)

        let elemento: HTMLElement

        const getter = function() {

            if (!elemento){
                elemento = <HTMLElement>document.querySelector(seletor)

                console.log(`buscando elemento do Dom com o seletor ${seletor} para injetar em ${propertyKey}`)
            }

            /* 
            dessa forma, sempre que eu estou adicionando algo eu acabou buscando o no dom os inputs

            // Por conta do escopo eu consigo fazer com que ele decore a variavel que foi pega no escopo do metodo anterior

            Fica no cash do elemento

            Unico par acada variavel que eu setei meu decorator
            */
        
            return elemento
            
        }

        // Difine que as propridades que foram passadas vão ser um getter e vão rodar o cidogo para buscar o elemento do Dom
        Object.defineProperty(target, propertyKey,
            {get: getter})

    }
}