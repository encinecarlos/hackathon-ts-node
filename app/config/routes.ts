module.exports = (app: any) =>{
    app.route("/produto")
    .get(app.app.controllers.produtoController.getProdutos)
    .post(app.app.controllers.produtoController.saveProduto)

    app.route("/produto/:id")
    .put(app.app.controllers.produtoController.updateProduto)
    .delete(app.app.controllers.produtoController.deleteProduto)

    app.route("/cliente")
    .get(app.app.controllers.clienteController.getClientes)
    .post(app.app.controllers.clienteController.saveCliente)

    app.route("/cliente/:id")
    .put(app.app.controllers.clienteController.updateCliente)
    .delete(app.app.controllers.clienteController.deleteCliente)

    app.route("/venda")
    .get(app.app.controllers.vendaController.getVendas)
    .post(app.app.controllers.vendaController.saveVenda)

    app.route("/venda/:id")
    .put(app.app.controllers.vendaController.updateVenda)
    .delete(app.app.controllers.vendaController.deleteVenda)
} 
