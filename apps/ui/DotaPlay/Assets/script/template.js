(function(window) {

    var customTemplate = function() {

    }

    customTemplate.prototype = {

        indexRoomList: function() {

                for(var i=0; i<6; i++) {

                    var ulRoomList = '<li class="aui-list-item aui-row aui-padded-t-10 aui-padded-b-10 aui-text-center areaT2 lvT2" onclick="_indexRoomList('+ i +')" accesskey="/Room/RoomInfo.html">'+
                        '<div class="aui-col-xs-1 aui-font-size-14">'+
                            '<div class="aui-btn roomNumber">zht</div>'+
                        '</div>'+
                        '<div class="aui-col-xs-3 aui-padded-t-5">'+
                            '<div class="aui-grid-label aui-font-size-16">白银场</div>'+
                        '</div>'+
                        '<div class="aui-col-xs-3 aui-padded-t-5">'+
                            '<div class="aui-grid-label aui-font-size-16">主教6+</div>'+
                        '</div>'+
                        '<div class="aui-col-xs-2 aui-padded-t-5">'+
                            '<div class="aui-grid-label aui-font-size-14">2/8人</div>'+
                        '</div>'+
                        '<div class="aui-col-xs-3">'+
                            '<div class="aui-btn btnJoin">加入</div>'+
                        '</div>'+
                    '</li>'

                    $('#ulRoom').append(ulRoomList)

                }

                $('#ulRoom').append('<p style="height:2.8rem;">&nbsp;</p>')


        },

        myInfoRecordList: function() {

            data = '520金币'

            for(var i=0; i<6; i++) {

                var recordList = '<li class="aui-list-item aui-list-item-middle aui-text-center listItem" onclick="_myInfoRecordList('+ i +')">'+
                    '<div class="aui-col-xs-2">'+
                        '<div class="aui-grid-label">'+
                            '<img src="/Assets/images/no1.png" />'+
                        '</div>'+
                    '</div>'+
                    '<div class="aui-col-xs-4">'+
                        '<div class="aui-grid-label">'+ data+i +'</div>'+
                    '</div>'+
                    '<div class="aui-col-xs-3">'+
                        '<div class="aui-grid-label">黄金场</div>'+
                    '</div>'+
                    '<div class="aui-col-xs-3">'+
                        '<div class="aui-grid-label">骑士'+ i +'</div>'+
                    '</div>'+
                '</li>'
                
                $('#recordList').append(recordList)

            }

            
        },

        GameRecordList: function() {

            for(var i=0; i<6; i++) {

                var listInfo = 
                '<li class="aui-list-item aui-list-item-middle aui-text-center aui-padded-0 listItem" onclick="_GameRecordList('+ i +')">'+
                    '<div class="aui-col-xs-2">'+
                        '<div class="aui-grid-label aui-font-size-12 timeItem">15分钟前</div>'+
                    '</div>'+
                    '<div class="aui-col-xs-1 aui-text-center mcItem">'+
                        '<img src="/Assets/images/no1.png" />'+
                    '</div>'+
                    '<div class="aui-col-xs-2 aui-font-size-12 goldDiv">'+
                        '<div class="aui-grid-label">400金币</div>'+
                        '<div class="aui-grid-label">黄金场</div>'+
                    '</div>'+
                    '<div class="aui-col-xs-7 heros">'+
                        '<img src="/Assets/images/hero1.jpg" />'+
                        '<img src="/Assets/images/hero2.jpg" />'+
                        '<img src="/Assets/images/hero3.jpg" />'+
                        '<img src="/Assets/images/hero4.jpg" />'+
                        '<img src="/Assets/images/hero5.jpg" />'+
                    '</div>'+
                '</li>'

                $('#listInfo').append(listInfo)

            }

        },

        GoldExchangeList: function() {

            let data = 23

            for(var i=0; i<6; i++) {

                var smsBalance = 
                '<li class="aui-list-item" id="smsBalance" onclick="_GoldExchangeList('+ i +')">'+
                    '<div class="aui-list-item-inner aui-list-item-arrow">'+
                        '<div class="aui-list-item-title aui-font-size-14">'+
                            '<b>'+
                                '<i class="aui-iconfont aui-icon-flag aui-text-warning"></i>'+
                            '</b>'+ 
                            '<span>黄金券：100金币</span>'+
                        '</div>'+
                        '<div class="aui-list-item-right">'+
                            '<span>拥有：1</span>'+
                        '</div>'+
                    '</div>'+
                '</li>'

                $('#changeInfo').append(smsBalance)
                
            }

            
        }

    }

    window.customTemplate = customTemplate

})(window);