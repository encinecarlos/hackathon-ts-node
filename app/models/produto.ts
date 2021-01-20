
export class Produto {
    private  _id:number;
    private _nome:string
    private _descricao:string
    private _categoria:string
    private _preco:number
    private _quantidade:number

    constructor(private  id:number,
        private nome:string,
        private descricao:string,
        private categoria:string,
        private preco:number,
        private quantidade:number){}
}