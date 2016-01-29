/**
 * Created by PANPAN on 2016/1/19.
 */
//内容选项卡实现
var tabSelect=document.getElementById("tabSelect").getElementsByTagName("li");
var tabContent=document.getElementById("contentBanner").getElementsByTagName("ul");

for(var i=0;i<tabSelect.length;i++){
    sele=tabSelect[i];
    sele.index=i;
    sele.onclick= function () {
        for(var i=0;i<tabSelect.length;i++){
            i!=this.index?tabSelect[i].className="":void 0;
            i!=this.index?utils.removeClass(tabContent[i],"selected"):void 0;
            console.log(tabContent);
        }
        this.className="selectCard";
        utils.addClass(tabContent[this.index],"selected");
    }
}

//给小火箭绑定点击事件

var goBack = document.getElementById("goBack");
goBack.onclick = function () {
    var duration = 1000, interval = 10;
    var totalTar = win("scrollTop") - 0;
    var step = (totalTar / duration) * interval;
    var timer = window.setInterval(function () {
        var curT = win("scrollTop");
        if (curT <= 0){
            window.onscroll = function () {
                var curT = win("scrollTop");
                var cliH = win("clientHeight");
                goBack.style.display = Math.abs(curT-cliH)>0 ? "block" : "none";
            };
            window.clearInterval(timer);
            return;
        }
        window.onscroll = function () {
            goBack.style.display = "none";
        }
        win("scrollTop", curT - step);
    }, interval);

};
window.onscroll = function () {
    var curT = win("scrollTop");
    var cliH = win("clientHeight");
    if(Math.abs(curT-cliH)>0)
    goBack.style.display =  "block" ;
};
function win(attr, value) {
    if (typeof value === "undefined") {
        return document.documentElement[attr] || document.body[attr];
    }
    document.documentElement[attr] = value;
    document.body[attr] = value;
}