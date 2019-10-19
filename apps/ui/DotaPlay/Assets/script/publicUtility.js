

function QueryString(fieldName) {
    /// <summary>
    /// 获取URL参数
    /// </summary>
    /// <param name="fieldName">参数名称</param>
    var urlString = document.location.href;
    if (urlString != null) {
        var typeQu = fieldName + "=";
        var urlEnd = urlString.indexOf(typeQu);
        if (urlEnd != -1) {
            var paramsUrl = urlString.substring(urlEnd + typeQu.length);
            var isEnd = paramsUrl.indexOf('&');
            return isEnd != -1 ? paramsUrl.substring(0, isEnd) : paramsUrl;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

function IsNotNullOrEmpty(str) {
    /// <summary>
    /// 判断字符串 不是undefined null 或者空字符串
    /// </summary>
    /// <param name="fieldName">参数名称</param>
    if (!str || str == undefined || str == null || str.length == 0 || (/^\s+$/g).test(str) || str + "" == "undefined" || str + "" == "null") {
        return false;
    }
    else {
        return true;
    }
}