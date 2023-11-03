var validation = new Validation();
// set local
// set local
function setlocal(message, content) {
    localStorage.setItem(message, JSON.stringify(content))
}
function loginIn() {
    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("matKhauLogin").value;
    var isValid = true;
    isValid &= validation.checkEmpty(email, "Tài Khoản không được để trống", "spanTK");
    isValid &= validation.checkEmpty(password, "Mật khẩu không được để trống", "spanMK") && validation.checkMatKhau(password, "Mật khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa", "spanMK");
    if (isValid) {
        var userLog = new User(email, password);
        var promiseObj = axios({
            method: 'post',
            url: 'https://shop.cyberlearn.vn/api/Users/signin',
            data: userLog
        });
        promiseObj.then(function (result) {
            console.log(result);
            alert(result.data.message);
            if (result) {
                window.location.href = "../index.html",
                    setlocal("user", result)
            }
        }).catch(function (error) {
            console.log(error);
            alert(error.response.data.message)
        });
    }
}
document.getElementById("btn__Login").onclick = loginIn;
