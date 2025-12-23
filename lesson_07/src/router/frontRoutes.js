export default {
    navigate: {
        home: '/',
        products: '/products',
        getCategories: (categoryName) => `/products/${categoryName}`,
        getProductDetail: (category, id, brandName, name) => `/products/${category}/${id}-${toSlug(brandName)}-${toSlug(name)}`,
        cart: '/cart',
        contacts: '/contacts'
    }
}

function toSlug(text) {
    return text.toLowerCase().replaceAll(" ", "-")
}