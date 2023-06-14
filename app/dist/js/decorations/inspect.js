export function inspect(target, propertyKey, descriptor) {
    const metodooRIGINAL = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`---Método: ${propertyKey}`);
        console.log(`------- parãmetros: ${JSON.stringify(args)}`);
        const returno = metodooRIGINAL.apply(this, args);
        console.log(`------- retorno: ${JSON.stringify(returno)}`);
        return returno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map