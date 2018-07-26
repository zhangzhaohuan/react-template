/**
 * create by yinghui(张兆欢) in 2017/5/29
 * 
 */

//封装一个设置cookie的函数
export function setCookie(name, value, days) {
  if (days) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + days);   //days为保存时间长度
    document.cookie = name + '=' + value + ';expires=' + oDate;
  } else {
    document.cookie = name + '=' + value;
  }
}

export function getCookie(name) {
  var arr = document.cookie.split(';');
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=');
    if (arr2[0] == name) {
      return arr2[1];  //找到所需要的信息返回出来
    }
  }
  return '';        //找不到就返回空字符串
}

export function removeCookie(name) {
  setCookie(name, 1, -1);    //-1表示昨天过期,系统自动删除
}


//判断是否登录成功
export function isLogin() {
  let session = getCookie('session');
  if (session != '') {
    return true
  }
  return false;
}