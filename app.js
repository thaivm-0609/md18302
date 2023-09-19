// có thể cập nhật lại giá trị
// var x = 'thaivm2'; //global scope
// let y = 'abc'; //block scope 

// biến không thể cập nhật lại giá trị
const z = 'xyz'; 

var tenBien = 'I am -> I\'m , Let\'s go';
var trichDan = "A da noi ${z}";

// alert(tenBien.concat(trichDan)); //concat
//alert(tenBien + trichDan)

/* cắt chuỗi */
//slice
//substring
//substr
// alert(tenBien.slice(-4,-1)); //slice(start,end)
// alert(tenBien.substring(1,4)); //substring(start,end)
var maSV = 'ph12345';
// alert(maSV.substr(2,5)); //substr(start,long); 
// alert(maSV.trim());


/* kiểu dữ liệu số */
var bienString = '10';
var bienNumber = 10;


// let a = prompt('Nhap gia tri a:');
// let b = prompt('Nhap gia tri b:'); 

// if (isNaN(a) || isNaN(b)) {
//     alert('a, b phải là số');
// } else {
//     let c = Math.sqrt(a*a + b*b);
//     alert(c);
// }
 
// if (!isNaN(a) && !isNaN(b)) {
//     let c = Math.sqrt(a*a + b*b);
//     alert(c);
// } else if (isNaN(a)) {
//     alert('a phai la so');
// } else {
//     alert('b phai la so');
// }

// let variableNoValue;
// let otherVariable = undefined;

// let nullVariable = null;
// alert(variableNoValue === nullVariable);

let mang = new Array(1,2,3,4,5);
let mang2 = [
    [   
        6,7,
        [1,2,3,4],
        8,9,10
    ],
    [11,12,13,14,15],
    [16,17,18,19,20],
];

// console.log(mang.length); //tra ve so phan tru trong mang
// console.log(mang + mang2); //cong STRING
// console.log(mang.concat(mang2)); // cong mang

// mang.pop(); // xoa phan tu cuoi cung
// mang.shift(); // xoa phan tu dau tien
// mang.push(10); // them phan vao cuoi mang (co the them array)
// mang.unshift(); // them phan tu vao dau mang (co the them array)

// delete mang[2]; //xoa tai 1 vi tri, chuyen value => empty
// console.log(mang);
mang.splice(2,0,[3,5,6,8]); // xoá x phần tử tính từ vị trí thứ 2
console.log(mang.flat());
/*xoa n phan tu tinh tu vi tri bat dau, 
them phan tu vao dung vi vua bi xoa 
*/
// console.log(mang);
// console.log(mang.flat());
// console.log(mang.join('_'));
// console.log(mang.toString(), typeof(mang.toString()));
