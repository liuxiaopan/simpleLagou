$("#selectUl>li").each(function (index, item) {
    $(this).attr("index", index);
    $(this).on("click", function () {
            var $line = $("#line");
            if ($(this).attr("index") == 0) {
                $("#selectUl>li:lt(2)").css("color", "black");
                $(this).css("color", "#00b38a");
                $line.css("display", "block");
                $line.fadeIn(300).animate({"left": 25}, 300, "linear");
            } else {
                $("#selectUl>li:lt(1)").css("color", "black");
                $(this).css("color", "#00b38a");
                $line.css("display", "block");
                $line.fadeIn(300).animate({"left": 200}, 300, "linear");
            }
        }
    );
});
var $oInputs = $("#inputInfo>input");
var reg = /^1(3|5|8|7)\d{9}$/;
var selfPwd = /^\d{6}$/;
$oInputs.each(function (index, item) {
    $(this).click(function () {
        $(this).val("").focus();

    });
});
$("#random").html(utils.getRandom(4));
$("#refresh").click(function () {
    var pwd = utils.getRandom(4);
    $("#random").html(pwd);
});
$("#regi").click(function () {
        if (reg.test($oInputs.eq(0).val())) {
            if ($("#random").html().toLocaleLowerCase() == $("#pwdInput").val().toLocaleLowerCase()) {
                if(flag){
                    if (selfPwd.test($("#selfPwd").val())) {
                        $("#mark").fadeIn(500).fadeOut(500);
                    } else {
                        $oInputs.eq(3).css("color", "red");
                        $oInputs.eq(3).val("input crct selfPwd again");
                    }
                }else{
                    alert("select findJob or emplyer");
                }

            } else {
                $oInputs.eq(1).css("color", "red");
                $oInputs.eq(1).val("input crct pwd again");
            }
        } else {
            $oInputs.eq(0).css("color", "red");
            $oInputs.eq(0).val("input crct ph-num again");
        }
    }
);
var flag=false;
$("#findJob").click(function () {
    $(this).css("background", "#ff1827");
    $("#employer").css("background", "#00b38a");
    flag=true;
});
$("#employer").click(function () {
    $(this).css("background", "#ff1827");
    $("#findJob").css("background", "#00b38a");
    flag=true;
});
