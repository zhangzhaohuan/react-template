import { observable, computed, autorun, action } from 'mobx'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

class Intl {
    @observable antd_locale
    @observable intl_locale
    @observable lang
    @observable lanFlag
    
    constructor(){
        this.antd_locale = "zh_CN",
        this.intl_locale = "zh-CN",
        this.lang = '中文',
        this.lanFlag = false
    }
    @action.bound changeLanguage(val) {
        const intl = val.replace("_", "-");
        this.antd_locale = val;
        this.intl_locale = intl;
        switch(val){
            case 'zh_CN':this.lang='中文';break;
            case 'en_US':this.lang='english';break;
        }
    }
}

let intl = new Intl()
export default intl