import Vue from 'vue'
import * as types from './types'

// 这是修改state的入口
// 定义方法  读取type   提交conmit
// conmit操作对象指向mutation  mutation修改state

export default {
    changeBigTrcM({
        commit
    }, data) {
        commit(types.CHANGE_BIGTRCM, data);
    },
    changeFlowTrcM({
        commit
    }, data) {
        commit(types.CHANGE_FLOWTRCM, data);
    },
    changeHotelM({
        commit
    }, data) {
        commit(types.CHANGE_HOTELM, data);
    },
    changeRentalCarM({
        commit
    }, data) {
        commit(types.CHANGE_RENTALCARM, data);
    },
}
