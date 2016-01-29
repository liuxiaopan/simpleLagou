function bind() {
    var leftMenu = document.getElementById("leftMenu");
    for (var k = 0; k < dataAry.length; k++) {
        var dataFrag = document.createDocumentFragment();
        var oDiv = document.createElement("div");
        oDiv.id = "div" + "" + k + "";
        oDiv.className = "div" + "" + k + "";
        var oSpan = document.createElement("span");
        oSpan.innerHTML = spanAry[k];
        oDiv.appendChild(oSpan);
        var oImg = document.createElement("img");
        oImg.src = "img/arr_7b73530.png";
        oDiv.appendChild(oImg);
        var oUl = document.createElement("ul");
        if (dataAry[k].length)
            for (var j = 0; j < dataAry[k].length; j++) {
                var oLi = document.createElement("li");
                oLi.className = "li" + "" + j + "";
                var oLink = document.createElement("a");
                oLink.innerHTML = dataAry[k][j];
                oLi.appendChild(oLink);
                oUl.appendChild(oLi);
            }
        oDiv.appendChild(oUl);
        dataFrag.appendChild(oDiv);
        leftMenu.appendChild(dataFrag);
        dataFrag = null;
    }
}
bind();
~(function () {
    var leftMenu = document.getElementById("leftMenu");
    var tab=leftMenu.getElementsByTagName("div");
    var forget= document.getElementById("forget");
    var conCard=forget.getElementsByTagName("div");
    for(var i=0;i<tab.length;i++){
        var t=tab[i];
        t.index=i;
        t.onmouseover= function () {
            this.style.padding="0 10px";
            this.style.borderBottom=this.style.borderTop=this.style.borderLeft="1px solid gainsboro";
            this.style.background="white";
            conCard[this.index].style.display="block";
        }
        t.onmouseout= function () {
            this.style.background="gainsboro";
            this.style.padding="2px 10px"
            this.style.borderBottom=this.style.borderTop=this.style.borderLeft="";
            conCard[this.index].style.display="none";
        }
    }
})()
~(function () {
    var input=document.getElementById("input0");
    input.onmousedown=function(){
        input.value="请输入职位名称或者公司名称";
        setPos(input);
    }
    input.onkeydown= function () {
        if(input.value=="请输入职位名称或者公司名称") input.value="";
    }
    var setPos=function(o){
        if(o.setSelectionRange){//W3C
            setTimeout(function(){
                o.setSelectionRange(0,0);
                o.focus();
            },0);
        }else if(o.createTextRange){//IE
            var textRange=o.createTextRange();
            textRange.moveStart("character",o.value.length);
            textRange.moveEnd("character",0);
            textRange.select();
        }
    };

}
)();
~(function () {
    var destination=document.getElementById("destination");
    var box=document.getElementById("box");
    var li2=document.getElementById("li2");
    var ul2=document.getElementById("ul2");
    var oLis=ul2.getElementsByTagName("li");
    //address.onclick= function () {
    //    animate(box,{"display":"block"},200,"ease-in");
    //    //box.style.display="block";
    //}
    $("#address").click(function () {
        $("#box").fadeIn(200).animate({"display":"block"},300,"linear");
    });
    $("#close").click(function () {
        $("#box").fadeOut(300).animate({"display":"none"},200,"linear");
    });
    for(var i=0;i<oLis.length;i++){
        var oli=oLis[i];
        oli.index=i;
        oli.onclick= function () {
            var str=li2.innerHTML;
            li2.innerHTML=this.innerHTML;
            this.innerHTML=str;
            destination.innerHTML=li2.innerHTML;
            box.style.display="none";
        }
    }
})();

//简单的轮播
~(function () {
    var bannerImg = document.getElementById("bannerImg");
    var bannerTip = document.getElementById("bannerTip");
    var smallImgs = bannerTip.getElementsByTagName("img")
    var control = document.getElementById("control");
    var step = 1, count = 4, index = 0;
    var move = function () {
        step++;
        index++;
        if (step >= count) {
            utils.setCss(bannerImg, "top", -1 * 164);
            step = 1;
            index = 0;
            utils.setCss(control, "top", index * 164);
        }
        animate(bannerImg, {top: -step * 164}, 600, 1);
        animate(control, {top: index * 49}, 600, 1);
    }
    bannerImg.autoTimer = window.setInterval(move, 3000);
    for(var i=0;i<smallImgs.length;i++){
        var smal=smallImgs[i];
        smal.i=i;
        smal.onmouseover= function () {
            window.clearInterval(bannerImg.autoTimer);
            step=this.i+1;
            index=this.i;
            utils.setCss(control,"top",index*49);
            utils.setCss(bannerImg,"top",-step*164)
            bannerImg.autoTimer = window.setInterval(move, 3000);
        }
    }
})();
//鼠标跟随事件
~(function () {
    var wrap = document.getElementById("conImg");
    var oDiv=wrap.getElementsByTagName("div");
    var hoverDir = function (e) {
        e.preventDefault();
        var w = this.offsetWidth;
        var h = this.offsetHeight;
        var x = (e.pageX - utils.offset(this).l - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - utils.offset(this).t- (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        var type = e.type;
        var inner=this.getElementsByTagName("span")[0];
        if (type == "mouseenter" || type == "mouseover") {
            switch (direction) {
                case 0://上进入
                    inner.style.left = 0;
                    inner.style.top = "-100px";
                    animate(inner, {"top": 0}, 300, 1);
                    inner.style.display="block"
                    break;
                case 1://右进入
                    inner.style.left = "100px";
                    inner.style.top = "0px";
                    animate(inner, {"left": 0}, 300, 1);
                    inner.style.display="block"
                    break;
                case 2://下进入
                    inner.style.left = "0px";
                    inner.style.top = "100px";
                    animate(inner, {"top": 0}, 300, 1);
                    inner.style.display="block"
                    break;
                case 3://左进入
                    inner.style.left = "-100px";
                    inner.style.top = "0px";
                    animate(inner, {"left": 0}, 300, 1);
                    inner.style.display="block"
                    break;
                default :
                    inner.style.display = "none";

            }

        } else {
            inner.style.display = "block";
            switch (direction) {
                case 0:
                    animate(inner, {"top": -100}, 300, 1, function () {
                        inner.style.display = "none";
                    });
                    break;
                case 1:
                    animate(inner, {"left": 100}, 300, 1, function () {
                        inner.style.display = "none";
                    });
                    break;
                case 2:
                    animate(inner, {"top": 100}, 300, 1, function () {
                        inner.style.display = "none";
                    });
                    break;
                case 3:
                    animate(inner, {"left": -100}, 300, 1, function () {
                        inner.style.display = "none";
                    });
                    break;
                default :
                    inner.style.display = "none";
            }
        }
    }
    for(var i=0;i<oDiv.length;i++){
        var wrapDiv=oDiv[i];
        if (window.addEventListener) {
            wrapDiv.addEventListener("mouseenter", hoverDir, false);
            wrapDiv.addEventListener("mouseleave", hoverDir, false);
        } else if (window.attachEvent) {
            wrapDiv.attachEvent("mouseenter", hoverDir);
            wrapDiv.attachEvent("onmouseleave", hoverDir);
        }
    }


})()

//获取某一个元素相对于body的left和top;
