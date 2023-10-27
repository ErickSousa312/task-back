import axios from "axios";
import { TOKEN, USER_ID, EMAIL, APP_NAME } from "../env.js";
import { lerBancoDeDados } from "../utils/db.js";
// uma requisição para cada, pois fiquei sem tempo 
async function getProductsNuvemShop() {
    const url = `https://api.tiendanube.com/v1/${USER_ID}/products`;
    const headers = {
        'Authentication': `bearer ${TOKEN}`,
        'User-Agent': `${APP_NAME} (${EMAIL})`
    };
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
        }
        else {
            console.error(`Erro ao obter produtos. Status: ${response.status}`);
        }
    }
    catch (error) {
        console.error('Erro na solicitação:', error);
    }
}
//Será feita uma requisão para cada método
async function postProduct() {
    const url = `https://api.tiendanube.com/v1/${USER_ID}/products`;
    const headers = {
        'Content-Type': 'application/json',
        'Authentication': `bearer ${TOKEN}`,
        'User-Agent': `${APP_NAME} (${EMAIL})`
    };
    try {
        const database = lerBancoDeDados();
        console.log();
        const price = database[0].resell_price;
        const descri = database[0].main_description;
        const data = {
            "images": [{ "src": "http://superadega.vteximg.com.br/arquivos/ids/163711/guinness-draught.jpg" }],
            "name": "Cerveja Guinness Draught Lata 440ml2",
            "description": descri,
            "variants": [{
                    "price": price,
                    "stock_management": true,
                    "stock": 1, "weight": "0.43", "sku": 8023, "cost": "1"
                }],
        };
        const response = await axios.post(url, data, { headers });
        // console.log(response)
        if (response.status === 201) {
            const data = await response.data;
            console.log(data);
        }
        else {
            console.error(`Erro ao obter produtos. Status: ${response.status}`);
        }
    }
    catch (error) {
        console.error('Erro na solicitação:', error);
    }
}
export { getProductsNuvemShop, postProduct };
//# sourceMappingURL=mlTeste.js.map