module.exports = (app: any) =>{
    app.route("produtos/")
    .get(app.controllers.produtoController.getProdutos)
}