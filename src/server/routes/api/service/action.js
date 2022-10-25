/**
 * restful 呼叫 與 xhr 不同的是，
 * restful headers 的 Accept 與 content-type 固定在 json
 *
 * @param {*} path URL 路徑
 * @param {*} method http method
 * @param {*} params 傳遞的參數
 * @param {*} headers headers
 * @param {*} timeout timeout 時間(毫秒)，預設 20000
 */
const { restful } = require("../../../common/restful");
const { xhr, METHOD } = require("../../../common/xhr");

const getToken = async () => {
    try {
        const result = await restful(
            `${process.env.BACKEND_API_URL}/api/api_login`,
            METHOD.POST,
            {
                account: process.env.BACKEND_ACCOUNT,
                password: process.env.BACKEND_PASSWORD,
            }
        );
        return result;
    } catch (err) {
        console.log("call  api  ERROR!!:", err);
        return err;
    }
};

const me = async (token) => {
    try {
        const result = await restful(
            `${process.env.BACKEND_API_URL}/api/me`,
            METHOD.GET,
            null,
            { Authorization: `Bearer ${token}` },
        );
        return result;
    } catch (err) {
        console.log("call  api  ERROR!!:", err);
        return err;
    }
};

module.exports = { getToken, me };
