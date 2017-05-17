$(() => {


    console.log(personArr);
    for (let i = 0; i < personArr.length; i++) {
        $("#userTable").append(
            '<tr class="trUser"><td>' + '<input class="deleteCheck" type="checkbox" >' + '</td><td>' + personArr[i].account + '</td><td>'
            + '<a class="personMissionA">' + personArr[i].name + '</a>' + '</td><td>' + personArr[i].job
            + '</td><td>' + personArr[i].sex + '</td><td>' + personArr[i].money + '</td><tr>'
        )
    }

    $(".personMissionA").click(function () {

        let name = $(this).text();
        for (let i = 0; i < personArr.length; i++) {
            if (personArr[i].name == name) {
                $("#ulPersonMission").remove();
                $(".personMissionLi").append(
                    '<ul id="ulPersonMission">'
                    + '<li>' + "姓名：" + personArr[i].name + '</li>'
                    + '<li>' + "性别：" + personArr[i].sex + '</li>'
                    + '<li>' + "工号：" + personArr[i].account + '</li>'
                    + '<li>' + "职务：" + personArr[i].job + '</li>'
                    + '<li>' + "薪水：" + personArr[i].money + '</li></ul>'
                )
            }
        }
    })
});


$(() => {
    $("#addPersonBtn").click(() => {
        let d = $("#hideDiv").css("display");
        if (d == "none") {
            $("#hideDiv").css("display", "block");
            $("#addPersonDiv").css("display", "block");
        }
    })
});
$(() => {
    $("#hideDiv").click(() => {
        $("#hideDiv").css("display", "none");
        $("#addPersonDiv").css("display", "none");
    })
});


function addUserConform() {
    let name = $('#addUserNameInput').val();
    let password = document.getElementById("addPassWordInput").value;
    let passwordConform = $("#conformPassWordInput").val();
    let job = $("#addJobInput").val();
    let sex = $("#addSexInput").val();

    if (name == "") {
        alert("用户名不能为空");
        return false;
    }
    if (password == "") {
        alert("密码不能为空");
        return false;
    }
    if (job == "") {
        alert("职务不能为空");
        return false;
    }
    if (sex == "") {
        alert("性别不能为空");
        return false;
    }

    if(passwordConform===password){
        $("#hideDiv").css("display", "none");
        $(".addPersonDiv").css("display", "none");
        addUser(name, password, job, sex, job);
        let num = personArr.length - 1;

        console.log(personArr[num].sex);

        $("#userTable").append(
            '<tr class="trUser"><td>' + '<input class="deleteCheck" type="checkbox" >' + '</td><td>' + personArr[num].account + '</td><td>'
            + '<a class="personMissionA">' + personArr[num].name + '</a>' + '</td><td>' + personArr[num].job
            + '</td><td>' + personArr[num].sex + '</td><td>' + personArr[num].money + '</td><tr>'
        );



        $(".personMissionA").click(function () {

            let name = $(this).text();
            for (let i = 0; i < personArr.length; i++) {
                if (personArr[i].name == name) {
                    $("#ulPersonMission").remove();
                    $(".personMissionLi").append(
                        '<ul id="ulPersonMission">'
                        + '<li>' + "姓名：" + personArr[i].name + '</li>'
                        + '<li>' + "性别：" + personArr[i].sex + '</li>'
                        + '<li>' + "工号：" + personArr[i].account + '</li>'
                        + '<li>' + "职务：" + personArr[i].job + '</li>'
                        + '<li>' + "薪水：" + personArr[i].money + '</li></ul>'
                    )
                }
            }
        });
        alert("成功添加");

        return true;
    }else {
        alert("密码不重复");
        return false;
    }



    // if(password.equal(passwordConform)){
    //     alert("密码不符");
    //     return false;
    // }


}

function addUser(name, password, job, sex, money) {
    let Num = personArr.length - 1;
    let account = parseInt(personArr[Num].account) + 1;
    personArr.push({
        account: account,
        name: name,
        password: password,
        job: job,
        sex: sex,
        money: money
    })
}


$(() => {
    $("#deletePersonBtn").click(() => {

        if ($(".btnPersonDelete").css("display") == "none") {

            $(".deleteCheck").css("display", "inline");
            $(".btnPersonDelete").css("display", "block");
        } else {
            $(".deleteCheck").css("display", "none");
            $(".btnPersonDelete").css("display", "none");
        }


    });

});

function deleteUser() {

    let $Check = $(".deleteCheck");
    for (let i = 0; i < $Check.length; i++) {
        if ($Check[i].checked == true) {
            for (let j = i; j < personArr.length; j++) {
                personArr[j] = personArr[j + 1];
            }
            personArr.pop();
        }
    }


    $(".trUser").remove();
    $(() => {
        for (let i = 0; i < personArr.length; i++) {
            $("#userTable").append(
                '<tr class="trUser"><td>' + '<input class="deleteCheck" type="checkbox" >' + '</td><td>' + personArr[i].account + '</td><td>'
                + '<a class="personMissionA">' + personArr[i].name + '</a>' + '</td><td>' + personArr[i].job
                + '</td><td>' + personArr[i].sex + '</td><td>' + personArr[i].money + '</td><tr>'
            )
            $(".deleteCheck").css("display", "block");
        }
    });
    $(".personMissionA").click(function () {

        let name = $(this).text();
        for (let i = 0; i < personArr.length; i++) {
            if (personArr[i].name == name) {
                $("#ulPersonMission").remove();
                $(".personMissionLi").append(
                    '<ul id="ulPersonMission">'
                    + '<li>' + "姓名：" + personArr[i].name + '</li>'
                    + '<li>' + "性别：" + personArr[i].sex + '</li>'
                    + '<li>' + "工号：" + personArr[i].account + '</li>'
                    + '<li>' + "职务：" + personArr[i].job + '</li>'
                    + '<li>' + "薪水：" + personArr[i].money + '</li></ul>'
                )
            }
        }
    })

    // $(".btnPersonDelete").css("display","none");

}

function personMission() {
    let name = this.innerHTML;
    // $("#personMissionDiv").

}

