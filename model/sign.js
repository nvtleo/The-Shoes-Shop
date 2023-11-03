var validation = new Validation();
function signUp() {
    var nam = document.getElementById("Nam");
    var nu = document.getElementById("Nu");
    var email = document.getElementById("email").value;
    var password = document.getElementById("matKhau").value;
    var name = document.getElementById("hoTen").value;
    var gender = kiemTraGioiTinh(nam, nu);
    var phone = document.getElementById("SDT").value;
    var isValid = true;
    isValid &= validation.checkEmpty(email, "Tài Khoản không được để trống", "spanTKUP") && validation.checkEmail(email, "Email không đúng định dạng", "spanTKUP")
    isValid &= validation.checkEmpty(password, "Mật khẩu không được để trống", "spanMKUP") && validation.checkMatKhau(password, "Mật khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa", "spanMKUP");
    isValid &= validation.checkEmpty(name, "Họ tên không được để trống", "spanTenUP") && validation.checkHoTen(name, "Họ tên không hợp lệ", "spanTenUP");
    isValid &= validation.checkEmpty(phone, "Số điện thoại không được để trống", "spanSDTUP") && validation.checkSDT(phone, "Số điện thoại không hợp lệ ", "spanSDTUP");
    if (isValid) {
        var user = new User(email, password, name, gender, phone);
        console.log(user)
        var promiseObj = axios({
            method: 'post',
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            data: user
        });
        promiseObj.then(function (result) {
            console.log(result);
            alert(result.data.message)
            if (result) { window.location.href = "../view/dangnhap.html"; }

        }).catch(function (error) {
            console.log(error);
            alert(error.response.data.message)
        });

    }

}
document.getElementById("btn__sign").onclick = signUp;
function kiemTraGioiTinh(radio1, radio2) {
    var gioiTinh = null
    if (radio1.checked) {
        gioiTinh = true
    } else if (radio2.checked) {
        gioiTinh = false
    }
    else {
        alert("Chọn giới tính")
    }
    return gioiTinh
}



