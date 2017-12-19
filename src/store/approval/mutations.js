import * as types from './types'
const mutations = {
    [types.CHANGE_BIGTRCM]: function (state, data) {
        state.bigTrcM = data;
    },
    [types.CHANGE_FLOWTRCM]: function (state, data) {
        state.flowTrcM = data;
    },
    [types.CHANGE_HOTELM]: function (state, data) {
        state.hotelM = data;
    },
    [types.CHANGE_RENTALCARM]: function (state, data) {
        state.rentalCarM = data;
    },
}
export default mutations
