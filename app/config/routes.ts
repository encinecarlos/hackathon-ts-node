const routes = (app: any) => {
  app
    .route("/")
    .get((req: any, res: any) =>
      res.status(200).json({ message: "Api is ok" })
    );
  app.route("/produtos").get(app.controllers.produtoController.getProdutos);
};

export default routes;
