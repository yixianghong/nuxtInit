const API_MODULE = `/api`

export function getDogInfo(api) {
    return async function () {
        const path = `${API_MODULE}/getDogApi`
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