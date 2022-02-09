export default (context, inject) => {
    const { $axios } = context
    const axios = $axios.create({
        headers: { 'Cache-Control': 'no-cache' },
    })
    axios.interceptors.request.use(config => {
        return config
    })
    if (process.client) {
        axios.interceptors.response.use(
            function (response) {
                return response
            },
            function (error) {
                if (!error.response) return Promise.reject(error)
                return Promise.reject(error)
            },
        )
    }
    inject('axios', axios)
}