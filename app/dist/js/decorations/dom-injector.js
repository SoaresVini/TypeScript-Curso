export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando protype ${target.constructor.name}e adicionado getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do Dom com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
