import * as types from './types'
// 由mutation来修改state
const mutations = {
    [types.CHANGE_SESSIONID]: function (state, data) {
        state.sessionId = data;
    },
}
export default mutations
