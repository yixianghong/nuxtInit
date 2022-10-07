const axios = require('axios') 
const qs = require('qs') 
const FormData = require('form-data') 
const METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
}

/**
 * XHR 呼叫
 *
 * @param {*} path url path
 * @param {*} method http method
 * @param {*} headers headers
 * @param {*} params 參數
 * @param {*} timeout timeout 時間(毫秒)，預設 20000
 * @param {*} otherConfig 其他設定 (不可有 url, method, headers, timeout, data)
 */
const xhr = async (path, method, headers, params = null, timeout = 40000, otherConfig = null) => {
    if (otherConfig) {
        delete otherConfig.url
        delete otherConfig.method
        delete otherConfig.headers
        delete otherConfig.timeout
        delete otherConfig.data
    } else {
        otherConfig = {}
    }

    const config = Object.assign(
        {
            url: path,
            method,
            headers,
            timeout: Number(timeout),
            withCredentials: true,
        },
        otherConfig,
    )

    if (params && Object.keys(params).length > 0) {
        if (headers['content-type'] === 'application/x-www-form-urlencoded') {
            config.data = qs.stringify(params)
        } else if (
            headers['content-type'] &&
            headers['content-type'].includes('multipart/form-data')
        ) {
            const formData = new FormData()
            Object.entries(params).forEach(entry => {
                formData.append(entry[0], entry[1])
            })
            config.data = formData
        } else {
            config.data = params
        }
    }

    try {
        const response = await axios(config)

        if (response.status >= 400) {
            // throw new Error(`ERROR FROM API：${response.statusText}`, response.status)
            throw new Error(
                `ERROR FROM API：${response.statusText}`,
                response.status,
                response.data,
            )
        }
        return response.data
    } catch (er) {
        let err = null
        if (er.response) {
            // err = new Error(`CALL API :: ${error.response.statusText}`, error.response.status)
            err = new Error(
                `CALL API :: ${er.response.statusText}`,
                er.response.status,
                er.response.data,
            )
        } else {
            err = er
        }

        return Promise.reject(err)
    }
}

// XHR 取得檔案
const xhrf = async (path, timeout = 20000) => {
    const config = {
        url: path,
        method: METHOD.GET,
        timeout: Number(timeout),
        withCredentials: true,
        responseType: 'arraybuffer',
    }
    try {
        const response = await axios(config)
        if (response.status >= 400) {
            throw new Error(
                `ERROR FROM API：${response.statusText}`,
                response.status,
                response.data,
            )
        }
        return { headers: response.headers, data: response.data }
    } catch (er) {
        let err = null
        if (er.response) {
            err = new Error(
                `CALL API :: ${er.response.statusText}`,
                er.response.status,
                er.response.data,
            )
        } else {
            err = er
        }

        return Promise.reject(err)
    }
}

module.exports = { METHOD, xhr, xhrf }
