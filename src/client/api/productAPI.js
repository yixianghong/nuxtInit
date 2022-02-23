const API_MODULE = `/api`

export function getProducts(api) {
    return async function () {
        const path = `${API_MODULE}/product`
        try {
            const { data, errors } = await api.get(path)
            if (errors) {
                return Promise.reject(errors)
            }
            return data
        } catch (err) {
            return Promise.reject(err)
        }
    }
}

