export function logarTempoDeExecucao(){

    return function(
        target: any, 
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){

        const metodoOriginal = descriptor.value
        // pega infinitos parametros e passa eles para um array de qualquer tipo
        descriptor.value = function(...args: Array<any>){
            const t1 = performance.now()
            //Chmar o metodo original
            const returno = metodoOriginal.apply(this, args)
            const t2 = performance.now()
            console.log(`${propertyKey},tempo de execução: ${(t2 - t1)/1000} segundos`)
            returno
        }

        return descriptor
    }

}