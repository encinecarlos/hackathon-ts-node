const db = require("../config/db");

export const saveVendaProduto = async (produtos:[any], vendaId:number) => {
    
    try{
        const produtos_venda = produtos.map((produto:any) => ({
            vendas_id: vendaId,
            produto_id: produto.produto_id,
            quantidade_produto: produto.quantidade,

        }))

        const vendas_produtos_ids = await db("vendas_produtos").insert(produtos_venda);

        return vendas_produtos_ids;

    }catch(error){
        throw error;
    }
}

export default {
    saveVendaProduto
}