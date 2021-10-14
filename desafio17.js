//17 - Conte quantos documentos contêm as palavras frango ou hamburguer utilizando o operador $text.
db.produtos.createIndex({ descricao: "text" });

db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer hambúrgueres",
    },
  },
);