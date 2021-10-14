//18 - Conte quantos documentos contêm a expressão feito com utilizando o operador $text.
db.produtos.createIndex({ descricao: "text" });

db.produtos.count(
  {
    $text: {
      $search: "feito",
    },
  },
);