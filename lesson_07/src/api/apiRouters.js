const backendUrl = 'https://react-hw.onrender.com/api'

export default {
    productList: `${backendUrl}/products`,
    addProduct: `${backendUrl}/products`,
    getUpdateProductList: (id) => `${backendUrl}/products/${id}`,
    getProductById: (id) => `${backendUrl}/products/${id}`,
    getDeleteProductLink: (id) => `${backendUrl}/products/${id}`,
}