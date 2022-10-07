const { xhr } = require('./xhr')

/**
 * RESTFUL 呼叫
 * 與 xhr 不同的是，此 headers 的 Accept 與 content-type 固定在 json
 *
 * @param {*} path URL 路徑
 * @param {*} method http method
 * @param {*} params 傳遞的參數
 * @param {*} headers headers
 * @param {*} timeout timeout 時間(毫秒)，預設 20000
 */
const restful = (
    path,
    method,
    params = null,
    headers = null,
    otherConfig = null,
    timeout = 40000,
) => {
    return xhr(
        path,
        method,
        Object.assign(
            {},
            {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
            headers,
        ),
        params,
        timeout,
        otherConfig,
    )
}

module.exports = { restful }
