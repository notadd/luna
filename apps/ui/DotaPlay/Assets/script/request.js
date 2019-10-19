
(function(window) {
    "use strict";
    var apiRequest = function() {
    };

    apiRequest.prototype = {


        request: function(type, url, data={}) {
            
            url = '' + url

            return $.ajax({
                type: type,
                url: url,
                data: data,
                async: false,
                dataType: 'json',
                cache: false,
                headers: {
                    // 'Content-Type': 'application/text; charset=utf-8'
                },
                beforeSend: function(request) {
                    // request.setRequestHeader("abc","zzz");
                },
                success: function(res) {
                    return res
                },
                error: function() {

                }
            })
        },

        get: function(url) {
            return this.request('GET', url).responseJSON
        },

        post: function() {
            return this.request('POST', url).responseJSON
        }

    };

    window.apiRequest = apiRequest;

})(window);