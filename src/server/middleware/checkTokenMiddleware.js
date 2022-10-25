const { getToken, me } = require("../routes/api/service/action");
const tokenFn = async () => {
    try {
        const result = await getToken();
        if (result.status === "success") {
            return result.data.access_token;
        }
    } catch (err) {
        return '';
    }
};

const checkTokenMiddleware = async (req, res, next) => {
    // 取session token
    const token = req.session.access_token;
    let tokenStatus;
    
    // 如果有token
    if (token) {
        const { status } = await me(token);
        tokenStatus = status
    }

    // 如果沒token or token 失效 再取一次
    if (tokenStatus !== "success" || !token) {
        try {
            req.session.access_token = await tokenFn();
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next()
    }
};

module.exports = checkTokenMiddleware;
