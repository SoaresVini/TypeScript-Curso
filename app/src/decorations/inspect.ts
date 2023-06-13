export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodooRIGINAL = descriptor.value
        
        descriptor.value = function(...args: any[]){
            console.log(`---Método: ${propertyKey}`)
            //Transformando o Array em uma string
            console.log(`------- parãmetros: ${JSON.stringify(args)}`)
            const returno = metodooRIGINAL.apply(this,args)
            console.log(`------- retorno: ${JSON.stringify(returno)}`)
            return returno
        }
        
        return descriptor;
}