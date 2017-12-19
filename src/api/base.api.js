var NODE_ENV = process.env.NODE_ENV;
var api = {};

var baseurl = NODE_ENV == 'development' ? './api' : '/webapp/WEBproject/Companyservice';
// var baseurl = NODE_ENV == 'development' ? '/WEBproject/Companyservice' : './WEBproject/Companyservice';


api.baseurl = baseurl;
// var baseurl = NODE_ENV == 'development' ? '/oa/api/' : '../trade';
/*----------公共接口----------*/

//常量配置


//获得sessionId


/*
localhost:4321/a/login  ---- 192.168.2.115/a/login
localhost:4321/api/dingtalk/config  ---- 192.168.2.115/api/dingtalk/config


*/


export default api
