function namnam() {

}
//    delaration function va expression function khac nhau 
// df duoc hosting 
//ef thi khong 
//    syntaxeror loi cu phap 
//    lenght console(var.lenght)
//    find index console(var.index.OF('))
// hoac truyen gia tri vao sau indexOF()
//.lastindexOF() tra ve gtri cuoi
//search tuong tu indexOF nhung khong the truyen vao value
//    cut
//  slice()
// dung slice va truyen vao gtri bat dau va ket thuc cat
// gtri duong se bat dau tu trai sang phai , gtri am se  bat dau tu phai sang trai
//    replace - thay the 
// .replace('gtri chon', 'gtri thay the')
// de thay the toan bo (\gtri\g , value)
//    .toLowerCasw() - in thuong
//    .toUpperCasw ()- in hoa
//    .trim() - loai bo khoang trang
//    .split()  - tach phan tu trong string thanh arry boi diem chung
//VD nam, hoang, nguyen - .split (', ') dau , la diem chung
//khi truyen vao 1 chuoi rong no se cat rung phan tu ra 
//    get a char bay index
//    .charAT(0)
// hoc sd ngoac vuong [0]
//


//    check type NaN -- isNaN()


// Array

// check type  Array -- Array.isArray()
//     -toString -- bien mot mang thanh 1 chuoi array.toString()
//     -join -- bien 1 mang thanh 1 chuoi nhung neu truyen vao 1 chuoi thi 
// cac phan tu ngan cach se duoc thay bang chuoi do array.join() or array.join('-truyen vao 1 chuoi -)
//     -pop -- xoa pt cuoi mang va tra ve phan tu da xoa array.pop()
//     -push --them phan tu moi vao cuoi mang va tra ve do dai cua mang array.push(' ...  ')
//     -shift -- xoa pt dau man va tra ve gtri array.shift()  - khi xoa het se tra ve undefined
//     -unshift -- them 1 pt vao dau mang tra ve do dai array.unshift()
//     -splice -- xoa , them pt vao mang 
//     + xoa , chen array.splice( number-start-vitri dat con tro  , so luong pt muon xoa , truyen vao 1 chuoi de chen ) xoa tu phan tu duoc chon 
//      example : namcute.splice( 1 , 0  , 'nemdz') - tro vao vi tri thu 1 ( thu 2 reong mang ) , xoa 0 pt , chen chuoi nemdz vao vi tri dat con tro
//     - concat noi array : array1.concat(array2)
//     slice : cat toan bo or 1 vai element cua array 
//          - array.slice(0 , 3) cat tu vtri thu 0 - 3       
//     arr.forEach(function(currentValue, index, arr){  -- gọi một hàm cho từng phần tử trong một mảng. (khong gọi được mảng rỗng )
//     }) 
//     - arr.every(function(currentValue, index, arr)) : trả về gtri true or false   thực thi một hàm cho từng phần tử mảng.
//     nếu tất cẩ đúng trả về true 
//     nếu 1pt sai trả về false
//     - ar.some(function(currentValue, index, arr)) : ngược lại với every 
//     nếu 1pt đúng trả về true 
//     nếu 1pt sai trả về false
//     - arr.find(function(currentValue, index, arr)) : tìm kiếm một ptu - nếu đúng trả về true
//     nếu đúng trả về true và end 
//     nếu không tìm thấy trả về undefined
//     - 
//



//     object 
var object1 = {
        name: 'nam',
        age: 20,
        nhnm: 'hoang nguyeen',
        address: function() {
            this.nhnm
        }
    };
    //    object constructor 
    // this is ban thiet ke 
function User(
    fistName,
    lastName,
    avatar
) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.avatar = avatar;

    getname: function() {
        return `${this.lastName} ${this.fistName}`;
    }
}
User.prototype.className = '15A22'; // dung de them thuoc tinh hoa phuong thuc vao obj cons

var author = new User('Nam', 'Nguyen ', ' open mouth mew '); // avt co the truyen vao file anh 
var user = new User('Huyen', 'Nguyen ', ' close mouth mew');

author.title = 'namcute ';
user.comt = 'nem cute vay sao ';

// date 
var date = new Date(); // khai bao bien date thanh 1 doi tuong 
// var date = Date(); // bien date se chi la string 
var year = Date.fullYear();
var month = Date.month()+1;
var day = Date.dayOfMonth();

console.log(`${day}/${month}/${year}`);

// Math obj - tu tim hieu
// 