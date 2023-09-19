let a = prompt('Nhap gia tri a');
let b = prompt('Nhap gia tri b');
let c = prompt('Nhap gia tri c');

if (isNaN(a) || isNaN(b) || isNaN(c)) { // kiểm tra giá trị nhập vào ko phải là số
    alert('Giá trị nhập vào phải là số');
} else { // nếu nhập số thì tiếp tục tính toán
    if (a == 0) { // nếu a = 0, trở thành PT bậc 1
        if (b == 0 && c == 0) { // nếu b = 0 và c = 0, PT vô số nghiệm
            console.log('PT vô số nghiệm');
        } else { 
            let x = -c/b;
            console.log('PT bậc 1 có 1 nghiệm là ' + x);
        }
    } else {
        let delta = Math.pow(b,2) - 4*a*c;
        if (delta > 0) {
            let x1 = (-b - Math.sqrt(delta))/(2*a);
            let x2 = (-b + Math.sqrt(delta))/(2*a);

            console.log('PT có 2 nghiệm phân biệt x1:' + x1 + 'x2:' + x2);
        } else if (delta == 0) {
            let x = -b/(2*a);
            console.log('PT có nghiệm kép x1=x2=' + x);
        } else {
            console.log('PT vô nghiệm');
        }
    }
}
