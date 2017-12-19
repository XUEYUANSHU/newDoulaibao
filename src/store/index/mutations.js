import * as types from './types'
// 由mutation来修改state
const mutations = {
    [types.CHANGE_BUDGETNAME]: function (state, data) {
        state.budgetName = data;
    },
    //鉴权
    [types.CHANGE_AUTHORITY]: function (state, data) {
        state.isAuthority = data;
    },
    //changeRegin
    [types.CHANGE_REGIN]: function (state, data) {
        state.regin = data;
    },
    [types.CHANGE_PROJECT]: function (state, data) {
        state.project = data;
    },
}
export default mutations
