//Valor padrão é false
export function logarTempoDeExecucao(emSegundos: boolean = false){

    return function(
        target: any, 
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){

        const metodoOriginal = descriptor.value
        // pega infinitos parametros e passa eles para um array de qualquer tipo
        descriptor.value = function(...args: Array<any>){

            let divisor = 1;
            let unidade = 'milisegundos'

            if(emSegundos){
                divisor = 1000
                unidade = 'Segundos'
            }
            const t1 = performance.now()
            //Chmar o metodo original
            const returno = metodoOriginal.apply(this, args)
            const t2 = performance.now()
            console.log(`${propertyKey},tempo de execução: ${(t2 - t1)/divisor} ${unidade}`)
            returno
        }

        return descriptor
    }

}