
let choice;
const PI = 3.14;

function sHinhTron() {
    let inputR = parseFloat(prompt("Nhap ban kinh duong tron:"));
    if (inputR && inputR > 0) {
        console.log(`Diện tích hình tròn là: ${inputR * inputR * PI}cm2`);
        
    } else {
        console.log("sai ");
    }
}
function cHinhTron() {
    let inputR = parseFloat(prompt("Nhap ban kinh duong tron:"));
    if (inputR && inputR > 0) {
        console.log(`Chu vi hình tròn là: ${inputR * 2 * PI}cm2`);
    } else {
        console.log("sai");
    }
}
function sChuNhat() {
    let inputA = parseFloat(prompt("Nhap chieu dai:"));
    let inputB = parseFloat(prompt("Nhap chieu rong:"));
    if (inputA && inputB && inputA > 0 && inputB > 0) {
        console.log(`Dien tich hinh chu nhat là: ${inputA * inputB}cm2`);
    } else {
        console.log("sai ");
    }
}
function cChuNhat() {
    let inputA = parseFloat(prompt("Nhap chieu dai:"));
    let inputB = parseFloat(prompt("Nhap chieu rong:"));
    if (inputA && inputB && inputA > 0 && inputB > 0) {
        console.log(`Chu vi hinh chu nhat là: ${(inputA + inputB) / 2}cm2`);
    } else {
        console.log("sai");
    }
}

do {
    choice = +prompt("MENU\n1.Tính diện tích hình tròn.\n2.Tính chu vi hình tròn.\n3.Tính diện tích hình chữ nhật.\n4.Tính chu vi hình chữ nhật.\n5.Thoat\nLua chon cua ban:");
    switch (choice) {
        case 1:
            sHinhTron();
            break;
        case 2:
            cHinhTron();
            break;
        case 3:
            sChuNhat();
            break;
        case 4:
            cChuNhat();
            break;
        case 5:
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
            break;
    }
} while (choice !== 5);