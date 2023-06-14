import { Comparavel } from "../util/comparavel.js";
import { Imprimivel } from "../util/imprimivel.js";

// todos que possuirem a interface modelo, vão ter que aplicar as outras duas interfaces

export interface modelo<T> extends Imprimivel, Comparavel<T>{

}