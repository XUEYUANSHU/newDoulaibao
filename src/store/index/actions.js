import Vue from 'vue'
import * as types from './types'

// 这是修改state的入口
// 定义方法  读取type   提交conmit
// conmit操作对象指向mutation  mutation修改state
export default {
    // 同步省市区数据
    changeBudgetName({
        commit
    }, data) {
        commit(types.CHANGE_BUDGETNAME, data);
    },
    changeAuthority({
        commit
    }, data) {
        commit(types.CHANGE_AUTHORITY, data);
    },
    //regin
    changeRegin({
        commit
    }, data) {
        commit(types.CHANGE_REGIN, data);
    },

}
