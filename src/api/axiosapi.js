import axios from "./thisAxios";

const webApi = axios;

export const registerApi = (input) => {
    return webApi.post("/auth/register", input);
};

export const login = (input) => {
    return webApi.post("/auth/login", input);
};

export const getMe = (token) => {
    return webApi.get("/auth/getme");
};

export const getProduct = () => {
    return webApi.get("/user/getProduct/");
};

export const createProductApi = (body) => {
    return webApi.post("/admin/product", body);
};

export const deleteProductApi = (id) => {
    return webApi.delete(`/admin/product/${id}`);
};

export const updateProductApi = (id, body) => {
    return webApi.patch(`/admin/product/${id}`, body);
};

export const uploadImageApi = (id, body) => {
    return webApi.patch(`/admin/product/${id}/image/`, body);
};

export const keepToCartApi = (payload) => webApi.put(`/user/cart/`, payload);

export const deleteProductInCartApi = (productId) =>
    webApi.delete(`/user/cart/${productId}`);

export const uploadSlipApi = (formData) =>
    webApi.put("/user/uploadSlip", formData);

export const addOrder = (payload) => webApi.put("/user/addorder", payload);

export const getOrder = () => webApi.get("/admin/getOrder/");
