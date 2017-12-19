import baseApi from './base.api'
const baseurl = baseApi.baseurl;
const api = baseApi;


/**
* parame
 token	否	string	微信授权的code（一般首次进入时会附带在url中key是code）
 userId	否	int	以后进入时传入
请求时写入data{}中
*/
api.homeIndex = baseurl + "/home/index";

console.log(api.homeIndex, "api.homeIndex ")

/**
 *
 * @type {params}
 * productType	否	int	商品类型 不传为全部 0车险 1理财 2个险
 userId	否	int	当前用户id

 */
const useId = 2;
api.allProductIndex = baseurl + "/product/list?userId=1";

/**
 * parame(必填)
 userId 当前用户userId
 status 状态0已生效 1待生效 不传全部
 type 类型 0车险 1理财 2个险
 请求时写入data{}中
 */
api.banklist = baseurl + "/user/bank/list?userId=1";

/**
 * parame(必填)
 userId	是	Int	用户id
 bankCode	是	String	卡号
 mobile	是	String	手机
 code	是	String	验证码

 请求时写入data{}中
 */
api.bindbankcard = baseurl + "/user/bind/bank?userId=";

/**
 * parame(必填)
 userId	是	Int	用户id
 mobile	是	String	手机
 code	是	String	验证码
 请求时写入data{}中
 */
api.bindmobile = baseurl + "/user/bind/mobile?userId=";

api.wealth = baseurl + "/home/article?userId=1";

// console.log(api.allProductIndex, "api.wealth")
// api.allProductIndex = baseurl + "/user/history/list?userId=1";
/**
 * parame(必填)
 useid
 请求时写入data{}中
 */
api.checkIdentity = baseurl + "/user/checkIdentity?userId=";
/**
 * parame(必填)
 useid
 请求时写入data{}中
 */
api.checkTeamLeader = baseurl + "/team/checkTeamLeader?userId=";

/**
 * parame(必填)
 useid
 请求时写入data{}中
 */
api.checkTeamMember = baseurl + "/team/checkTeamMember?userId=";
/**
 * parame(必填)
 userId	是	Int	用户id
 nickname	是	String	昵称


 请求时写入data{}中
 */
api.editnickName = baseurl + "/user/edit/nickname?userId=";

/**
 * parame(必填)
 userId	是	Int	用户id
 avatar	是	String	头像


 请求时写入data{}中
 */
api.edituseravador = baseurl + "/user/edit/avatar?userId=";

/**
 * parame(必填)
 userId 当前用户userId
 status 状态0已生效 1待生效 不传全部
 请求时写入data{}中
 */
api.history = baseurl + "/user/history/list?userId=1";

/**
* parame
productType 商品类型 不传为全部 0车险 1理财 2个险
userId 当前用户userId
请求时写入data{}中
*/
api.indexProductList = baseurl + "/home/index";

/**
 * parame(必填)
 userId 当前用户userId
 type 0系统通知 1活动通知
 请求时写入data{}中
 */
api.notice = baseurl + "/notice/list?userId=";

/**
 * parame(必填)
 userId 当前用户userId
 noticeid 通知id
 请求时写入data{}中
 */
api.noticeDetail = baseurl + "/notice/info?userId=";

/**
 * parame(必填)
 userId 当前用户userId
 orderid 订单id
 请求时写入data{}中
 */
api.orderDetail = baseurl + "/order/info?userId=";

/**
 * parame(必填)
 userId 当前用户userId
 status 状态0已生效 1待生效 不传全部
 请求时写入data{}中
 */
api.orderList = baseurl + "/order/list?userId=";

/**
 * parame(必填)
 productId 商品id
 userId 当前用户userId
 请求时写入data{}中
 */
api.productDetail = baseurl + "/product/info";

/**
 * parame(必填)
 mobile 手机号
 请求时写入data{}中
 */
api.sms = baseurl + "/sms/send";

/**
 * parame(必填)
 userId 当前用户userId
 请求时写入data{}中
 */
api.team = baseurl + "/notice/list?userId=";

/**
 * 团队详情
 * parame(必填)
 userId	是	Int	用户id
 teamName	是	String	团队名称
 TeamDesc	是	String	团队简介
 请求时写入data{}中
 */
api.teamAdd = baseurl + "/team/add?userId=1";
/**
 * parame(必填)
 userId	是	Int	用户id
 teamName	是	String	团队名称
 TeamDesc	是	String	团队简介
 请求时写入data{}中
 */
api.teamInfo = baseurl + "/team/info?userId=1";


/**
 * parame(必填)
 userId	是	Int	用户id
 token	否	String	微信授权code和userId有一个必传
 inviteUserId	否	Int	邀请人id
 teamCode	是	String	团队邀请码
 请求时写入data{}中
 */
api.teamJoin = baseurl + "/team/join?userId=";

/**
 * 我的财富
 * parame(必填)
 userId 当前用户userId
 请求时写入data{}中
 */
api.treasure = baseurl + "/user/treasure?userId=1";

/**
 * parame(必填)
 userId	是	Int	用户id
 bankId	是	int	银行卡id
 code	是	String	验证码
 请求时写入data{}中
 */
api.unbindbankcard = baseurl + "/user/unbind/bank?userId=";

/**
 * parame(必填)
 userId	是	Int	用户id
 file	是	file	图片
 请求时写入data{}中
 */
api.uploadimage = baseurl + "/upload/image";

/**
 * parame(必填)
 userId 当前用户userId
 请求时写入data{}中
 */
api.userBalance = baseurl + "/user/balance?userId=1";

/**
 * parame(必填)
 userId 当前用户userId
 请求时写入data{}中
 */
api.userDetail = baseurl + "/user/info?userId=1";

/**
 * parame(必填)
 userId 当前用户userId
 请求时写入data{}中
 */
api.userIndex = baseurl + "/user/index?userId=1";
export default api
