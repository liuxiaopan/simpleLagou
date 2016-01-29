var utils = {
    //getCss:获取元素的样式
    getCss: function (curEle, attr) {
        var reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?(px|pt|em|rem)$/, val = null;
        if ("getComputedStyle" in window) {
            val = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === "opacity") {
                var temp = curEle.currentStyle["filter"], tempReg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = tempReg.test(temp) ? tempReg.exec(temp)[1] : "1";
                val = parseFloat(val) / 100;
            } else {
                val = curEle.currentStyle[attr];
            }
        }
        return reg.test(val) ? parseFloat(val) : val;
    },
    //setCss:设置元素的样式
    setCss: function (curEle, attr, value) {
        var reg = /^(width|height|top|left|right|bottom|((margin|padding)(Left|Top|Right|Bottom)?))$/;
        if (attr === "opacity") {
            if (value >= 0 && value <= 1) {
                curEle["style"]["opacity"] = value;
                curEle["style"]["filter"] = "alpha(opacity=" + value * 100 + ")";
            }
        } else if (attr === "float") {
            curEle["style"]["cssFloat"] = value;
            curEle["style"]["styleFloat"] = value;
        } else if (reg.test(attr)) {
            curEle["style"][attr] = isNaN(value) ? value : value + "px";
        } else {
            curEle["style"][attr] = value;
        }
    },
    //setGroupCss:批量设置元素的样式
    setGroupCss: function (curEle, options) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                this.setCss(curEle, key, options[key]);
            }
        }
    },
    bind: function (ele, type, fn) {
        if (ele.addEventListener) {
            ele.addEventListener(type, fn, false);
        } else {
            if (!ele["aEvent" + type]) {
                ele["aEvent" + type] = [];
            }
            var a = ele["aEvent" + type];
            for (var i = 0; i < a.length; i++) {
                if (a[i].photo == fn)return;
            }
            var fnTemp = function () {
                fn.call(ele)
            };

            ele.attachEvent("on" + type, fnTemp);

            a.push(fnTemp);
            fnTemp.photo = fn;
        }
    },
    unbind:function(ele,type,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(type,fn,false);
    }else{

        var a=ele["aEvent"+type];
        if(a){
            for(var i=0;i<a.length;i++){
                if(a[i].photo==fn){
                    ele.detachEvent("on"+type,a[i]);
                    a.splice(i,1);
                    break;
                }
            }
        }

    }
},

offset: function (ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;

        while (1) {
            if (!p || p == document.body)break;

            if (window.navigator.userAgent.indexOf("MSIE 8") > -1) {
                l += p.offsetLeft;
                t += p.offsetTop;
            } else {
                l += p.offsetLeft + p.clientLeft;
                t += p.offsetTop + p.clientTop;
            }
            p = p.offsetParent;
        }
        return {l: l, t: t}
    },
    addClass:function(ele,strClass){
    ele.className+=" "+strClass;
    //"ab " "ab ab"
    var  reg=RegExp("(^| )"+strClass+"( |$)");
    if(!reg.test(ele.className)){
        ele.className+=" "+strClass;
    }
},

   removeClass:function(ele,strClass){
    var  reg=RegExp("(^| )"+strClass+"( |$)","g");

    ele.className=ele.className.replace(reg," ");//后边不是空，是空格
},
    getRandom: function (len) {
        var char="ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm0123456789";
        var maxLen=char.length;
        var pwd="";
        for(var i=0;i<len;i++){
            pwd+=char.charAt(Math.floor(Math.random() * maxLen))
        }
        return pwd;
    }
};