import ENV from '@src/env.config.json'
import HOSTCONFIG from '@constants/host'

const isPro = ENV.env !== 'development' && ENV.env !== 'prelease'
const defaultHostInfo = HOSTCONFIG[ENV.env || 'production']

const ENV_INFO = {
    env: ENV.env,
    IS_DEV: ENV.env === 'development',                                 // 开发环境
    IS_PRE: ENV.env === 'prelease',                                    // 预发布环境
    IS_PRO: isPro,                                                     // 生产环境
    DEFAULT_HOST_INFO: defaultHostInfo,                                // host 相关信息
}

export default ENV_INFO
