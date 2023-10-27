import { apiClient } from "../api-client/init.js";
export async function getAllProducts(access_token) {
    const { products } = await apiClient("get", "/market/retailer/products", access_token, {
        page: 1,
    }).catch((error) => {
        return { products: [] };
    });
    return products;
}
export async function getFullProduct(access_token) {
    const { product } = await apiClient("get", "/market/retailer/products/:product_uuid", access_token, {
        product_uuid: "e0981147-1f9c-4b65-bb45-18337bb1bb8e",
    });
    return product;
}
export async function createUser(access_token) {
    const user = await apiClient("post", "/auth/user", access_token, {
        first_name: "erik",
        last_name: "sales",
        password: "teste123",
        phone: "11999999999",
        email: "ericksousa312@teste.com",
    });
    return user;
}
export async function loginUser() {
    const { access_token } = await apiClient("post", "/auth", "123", {
        email: "ericksousa312@teste.com",
        password: "teste123",
    });
    return access_token;
}
//# sourceMappingURL=get.js.map