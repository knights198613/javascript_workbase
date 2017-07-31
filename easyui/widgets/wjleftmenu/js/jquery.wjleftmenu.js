/**
 *  Created by weijiang on 2017/7/31
 *  左侧菜单组件
 */

(function ($) {
    /**
     * 初始创建
     * @param target
     * @param param
     */
    function _create(target, param) {
        $(target).each(function() {
            $(this).find("li").each(function() {
                var _url = $(this).attr("url");
                param.options = param.options || {};
                var state = $(this).data("leftmenuitem");
                if(state) {
                    $(this).data("leftmenuitem", {options: $.extend({}, state.options, param.options)});
                }else {
                    $(this).data("leftmenuitem", {options: $.extend({}, $.fn.wjleftmenu.defaults, param.options)});
                }
                $(this).on("click", function() {
                      $(target).find("li").removeClass("selected");
                      $(this).addClass("selected");
                      var _data = $(this).data("leftmenuitem");
                      _data.options['onclick'](_url);
                });
            });
        });

       _showSelectedMenu(target, null);
    };

    /**
     * 选择显示的菜单组
     * @param target
     * @param param
     */
    function _showSelectedMenu(target, param) {
        if(param) {
            var _target = param.target;
            $(target).parent().find("[class='leftMenuPanel'][dest='"+_target+"']").show("fast", "linear", function () {
               $(this).find("li").first().trigger("click");
            });
            $(target).parent().find("[class='leftMenuPanel'][dest!='"+_target+"']").hide("fast", "linear");
        }else {
            $(target).first().show("fast", function() {
                $(this).find("li").first().trigger("click");
            });
        }
    };


    $.fn.wjleftmenu = function(options, params) {
       if(typeof options == "string")
           return $.fn.wjleftmenu.methods[options](this, params);
       params.options = params.options || {};
       return _create(this, params);
    };

    $.fn.wjleftmenu.methods= {
        options:function(target, options) {

        },
        showSelectedMenu:function(target, params) {
           return _showSelectedMenu(target, params);
        }
    };

    $.fn.wjleftmenu.defaults = {
        show: false,
        onclick: function() {}
    }

})(jQuery);