const crypto = require('crypto');

module.exports={
    MD5_SUFFIX:'ffsfkee42374$^$@#$@@fsdfFWEFF%$#%#()}{}}FDS@SD^GADss大师',
    md5:function(str){
        var obj = crypto.crypto.createHash('md5'); //使用md5加密

        obj.update(str); // 传入字符串

        return obj.digest('hex') ; // 以16进制输出
    }
}