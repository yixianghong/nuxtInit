const API_MODULE = `/api`

export function getStudents(api) {
    return async function () {
        const path = `${API_MODULE}/students`
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
export function addStudents(api) {
    return async function ({ name, sex, birthday }) {
        const path = `${API_MODULE}/students`
        try {
            const { data, errors } = await api.post(path, { name, sex, birthday })
            if (errors) {
                return Promise.reject(errors)
            }
            return data
        } catch (err) {
            return Promise.reject(err)
        }
    }
}
// export function getStudents(api) {
//     return async function () {
//         const path = `${API_MODULE}/product`
//         try {
//             const { data, errors } = await api.get(path)
//             if (errors) {
//                 return Promise.reject(errors)
//             }
//             return data
//         } catch (err) {
//             return Promise.reject(err)
//         }
//     }
// }
// export function getStudents(api) {
//     return async function () {
//         const path = `${API_MODULE}/product`
//         try {
//             const { data, errors } = await api.get(path)
//             if (errors) {
//                 return Promise.reject(errors)
//             }
//             return data
//         } catch (err) {
//             return Promise.reject(err)
//         }
//     }
// }

