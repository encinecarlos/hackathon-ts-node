module.exports = (app: any) => {
  app.route("/produto").get(app.controllers.produtoController.getProducts);
  // .post(app.controllers.produtoController.saveProduto);

  //   app
  //     .route("/produto/:id")
  //     .put(app.controllers.produtoController.updateProduto)
  //     .delete(app.controllers.produtoController.deleteProduto);

  app
    .route("/cliente")
    .get(app.controllers.clienteController.getClientes)
    .post(app.controllers.clienteController.saveCliente);

  app
    .route("/cliente/:id")
    .put(app.controllers.clienteController.updateCliente)
    .delete(app.controllers.clienteController.deleteCliente);

  app
    .route("/venda")
    .get(app.controllers.vendaController.getVendas)
    .post(app.controllers.vendaController.saveVenda);

  app
    .route("/venda/:id")
    .put(app.controllers.vendaController.updateVenda)
    .delete(app.controllers.vendaController.deleteVenda);
};
