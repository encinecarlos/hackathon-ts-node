module.exports = (app: any) => {
  app.route("/").get((req: any, res: any) => {
    res.status(200).json({ message: "welcome" });
  });

  app
    .route("/produtos")
    .get(app.controllers.produtoController.getProdutos)
    .post(app.controllers.produtoController.saveProduto);

  app
    .route("/produtos/:id")
    .get(app.controllers.produtoController.getById)
    .put(app.controllers.produtoController.updateProduto)
    .delete(app.controllers.produtoController.deleteProduto);

  app
    .route("/clientes")
    .get(app.controllers.clienteController.getClientes)
    .post(app.controllers.clienteController.saveCliente);

  app
    .route("/clientes/:id")
    .put(app.controllers.clienteController.updateCliente)
    .delete(app.controllers.clienteController.deleteCliente);

  app
    .route("/vendas")
    .get(app.controllers.vendaController.getVendas)
    .post(app.controllers.vendaController.saveVenda);

  app
    .route("/vendas/:id")
    .put(app.controllers.vendaController.updateVenda)
    .delete(app.controllers.vendaController.deleteVenda);
    
  app
    .route("/vendas-produtos")
    .get(app.controllers.vendaProdutoController.getVendasProdutos);
};
