import { getProductsNuvemShop, deleteProductsNuvemShop } from "./function/nuvemShop.js";
// Exemplo de uso
// Adicionar um novo usuário ao banco de dados
// const novoUsuario = {
//   nome: 'eduardo4',
//   idade: 30,
// }
// // Salvar as alterações
// const a = await escreverBancoDeDados(novoUsuario);
// console.log(a)
// const axiosToken = await loginUser() //obter o token para realizar operações 
// const products = await getAllProducts(axiosToken);
// const selectProduct = await getFullProduct(axiosToken)
// console.log(selectProduct)
// escreverBancoDeDados(selectProduct) //
getProductsNuvemShop(); // lista todos os produtos na nuvem shop
//postProduct() // essa função usa o repo.json para enviar dados do produto para nuvemshop
deleteProductsNuvemShop(188614829);
// acabei esquecendo e n tive muito tempo para fazer além de n entender muito bem as intruções
//# sourceMappingURL=app.js.map