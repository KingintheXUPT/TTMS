//登陆点击事件



let personArr = [
    {
        account: "153079",
        name:"中那位",
        password:"112234",
        job:"看门",
        money:"1200",
        sex:"随机"
    },

    {
        account: "153080",
        name:"李佳伟",
        password:"112234",
        job:"舔地板",
        money:"1200",
        sex:"你猜"
    },

    {
        account: "153081",
        name:"余帆",
        password:"112234",
        job:"boss",
        money:"12000",
        sex:"爷们"
    },


    {
        account: "153082",
        name:"魏天亮",
        password:"112234",
        job:"倒垃圾",
        money:"1200",
        sex:"哎悲伤"
    },

    {
        account: "153083",
        name:"杨帆",
        password:"112234",
        job:"扫厕所",
        money:"1200",
        sex:"未知"
    },
];

let person = {
    name:"",
    password:""
};

$(() => {
    $(".personDiv").click(() => {

        let d = $("#hideDiv").css("display");
        if (d == "none") {
            $("#hideDiv").css("display", "block");
            $(".divSign").css("display", "block");
        }
    })
});
$(() => {
    $("#hideDiv").click(() => {
        $("#hideDiv").css("display", "none");
        $(".divSign").css("display", "none");
    })
});

// $(function () {
//     $('.leftDiv').children().each(function () {
//         let $this = $(this);
//
//         $this.click(function (e) {
//             e.preventDefault();
//             if(!$this.is('.active')){
//                 $this.siblings().removeClass('active');
//                 $this.addClass('active');
//             }
//         })
//     })
// });


$(function () {
    $('.leftDiv').children().each(function () {
        let $this = $(this);
        let $link = $this.find('a');
        let id = $link.attr('href');
        $this.click(function (e) {
            e.preventDefault();
            if(id && !$link.is('.active')){
                $(id).siblings().css('display','none');
                $this.siblings().removeClass('active');
                $(id).css('display','block');
                $this.addClass('active');
            }
        })
    })
});

function chargePerson(account,password) {
    for(let i = 0;i<personArr.length;i++){
        if(personArr[i].account == account && personArr[i].password){
            return true;
        }
    }
    return false;
}

function checkUser(){
    let account = $('#userName').val();
    let password = document.getElementById("passWord").value;

    if(account == ""  ){
        alert("用户名不能为空");
        return false;
    }
    if(password == ""  ){
        alert("密码不能为空");
        return false;
    }

    console.log(chargePerson(account,password));

    if(chargePerson(account,password)==true){
        let personName = persionName(account);
        (()=>{
            $("#hideDiv").css("display", "none");
            $(".divSign").css("display", "none");
        })();
        personAppear(personName);
    }else {
        alert("滚！");
    }
}

function personAppear(name) {
    let nameString = name.toString();
    $(".personDiv").css("display","none");
    $(".personDivSign").css("display","block");
    $(".personDivSign").append('<div>'+nameString+'</div>');
}

function persionName(account) {
    for(let i = 0;i<personArr.length;i++){
        if(account==personArr[i].account){
            return personArr[i].job+":"+personArr[i].name;
        }
    }

    return null;
}




//人员管理
//
// function managePerson() {
//
// }
