$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "欣艳" && pwd == "1115" ) {
        // $('#h').text("welcome！");
        // event.preventDefault();
        // $('form').fadeOut(500);
        // $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 0);
    } else {
        alert("用户名或密码不正确！");
    }
});
