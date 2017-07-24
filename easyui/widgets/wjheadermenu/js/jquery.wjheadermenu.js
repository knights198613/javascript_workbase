/**
 *  Created by weijiang on 2017/7/24
 *
 */

(function($) {


    /**创建方法*/
    function create(target) {
        $(target).each(function() {
            $(this).removeClass("hdmenuItem selected");
            $(this).addClass("hdmenuItem");
            var _data = $(this).data("wjheadermenu");
            var _target = $(this).attr("target");
            $(this).on("click", function () {
                $(this).parent("div.menuContainer").find("a").removeClass("selected");
                $(this).addClass("selected");
                _data.options['onclick'](_target);
            });
        });
    };

    /**
     * 选中指定方法
     */
    function selectedOne(target, param) {

    };

    /**
     * 不选中状态
     * @param target
     */
    function unselected(target, param) {

    };

    /**
     * 程序入口
     * @param options
     * @param param
     */
    $.fn.wjheadermenu = function(options, param) {
       if(typeof options == "string")
           return $.fn.wjHeaderMenu.methods[options](this, param);
       options = options || {};
       return this.each(function() {
           var state = $(this).data("wjheadermenu");
           if(state) {
              $(this).data("wjheadermenu", {options: $.extend({}, state.options, options)})
           }else {
              $(this).data("wjheadermenu", {options: $.extend({}, $.fn.wjheadermenu.defaults, options)})
           }
           create(this);
       });

    };

    $.fn.wjheadermenu.methods = {
        options: function(target, param) {
            return $(target).data("wjheadermenu");
        },
        selectone: function(target, param) {

        },
        unselected: function(target, param) {

        }
    };
    $.fn.wjheadermenu.defaults = {
        selected: false,
        onclick: function() {}
    };

})(jQuery);