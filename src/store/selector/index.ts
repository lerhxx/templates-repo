import { createSelector } from 'reselect'

const getUserInfo = (state) => state.userInfop.userInfo || {}

// 获取物品相对 canvas 的区域
export const userIfno = createSelector(
    [ getUserInfo ],
    (userInfo) => {
        return userInfo
    }
)