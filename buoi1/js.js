//  Viết chương trình xây dựng 1 ô input 1 ô button khi ta click vào button thì in ra các số từ 1 đến giá trị của ô đó.
// function showkq(){
//     let numbers = document.getElementById('number').value;
//     // day la cach ep kieu du lieu tu so sang kieu so nguyen
//     numbers = parseInt(numbers);
    
//     var a  = ' '
//     for(var i = 1; i <= numbers; i++){
//        a = a + i
//     }
//     // in ra ket qua o day 
//     document.getElementById('kqshow').innerHTML = a
   
// }



// Chuong co ban cua javascript
///////////////////////////////
//  *********************bai1: 

// bai tren freetuts 
// lay id cua the input
// var getid = document.getElementById('clickme')


// // goi cai bien moi lay do de hien thi ra hop thoai trong arrow function
// getid.addEventListener('click', () =>{
//     document.write('chao ban da lay thanh cong')
// })


// ////////////////////////////////////////////////
//******************   bai 2: Khai bao bien trong javascript

//  - Cho ví khai báo biến tên là var với let so sánh xem bien nào có phạm vi hoạt động nào
//  lớn hơn và nên sử dụng var hay let khi học 


// if (true){
//     var a = 'van hanh'
//     let b = a;
// }

// console.log(a) /// KQ van hanh
// console.log(b) /// KQ b is not defined 
 
//  - qua kết quả hai bài trên ta có thể hiểu là biến var nó hoạt động rộng hơn so với biến let nên nó có kết quả như vậy
// =>  Tóm lại nên dùng khai báo biến nào?  => ta nên dùng biến let vì nó đúng với phạm vi hoạt động của nó. 


// - để in một giá trị nào đó trong javascript ta sử dụng hàm document.write('biến muốn in ra');

// + khi làm việc với biến ta thường sử dụng các phép toán sau: 
//   - Gán giá trị,
//   - Cộng trừ nhân chia các số,
//   - Nối chuổi bằng toán tử cộng.


////////////////////////////////////

// ******************  Bài 3 Hàm trong javascript 
// +   Có ba hàm trong hiển thị trong js 
//   - Hàm alert() là hiển thị ra cái thông báo khi truyền vào nội dung
        //  Ví dụ alert('hanh lap trinh website kiếm 1 tháng 100 triệu')

//   - Hàm Comfirm() là hiển thị hộp thoại với nội dung được truyền vào nó khác so với alert() bởi vì nó có 
// thêm 2 nút cancel và ok để xác nhận 
            // Ví dụ:   comfirm('Hanh có học javascript mỗi ngày không')
            // kết quả:  Hanh có học javascript mỗi ngày không   --> nó hiển thị thêm 2 nút nữa

//   - Hàm Prompt() là nó hiển thị hộp thoại để nhập dữ liệu truyền vào khi hiển thị hộp thoại
        // Ví dụ: prompt("Moi ban nhap bất cứ kí tự nào bạn muốn")

//////////////////
// ********************** Bài 3: Các toán tử trong javascript

// + CÓ các loại toán tử như: 
//   -Cộng, trừ, nhân, chia, ngoài ra toán tử chia hết '%', toán tử a++, a--, ++a, --a
//   - Toán tử so sánh: >; <; =; >=; <=; !=; ==; ===;


// ví dụ về a++ và ++a 
// var a= 1;
// console.log(++a) //KQ 2 ; vì khi nó thực hiện ++a thì nó thực hiện tăng trước và gán sau 
// console.log(a++) // Kq 1; vì nó gán trước và sau đó mới tăng một đơn vị và nó sẽ hiển thị được kêt quả như thế.



//////////////////////////// 
// ********************** Bài 4: Câu lệnh if else trong javascript. 

// + Lệnh if trong javascript:
// là if sẽ được bao quanh bởi cặp ngoặc nhọn đóng mở {}
//  -   Các giá trị sau đây nó sẽ trả về false nên cần lưu ý 
//       * Null --> false 
//       * 0    --> false
//       * false --> false
//       * "rỗng" --> false
// -    Lệnh if else trong javascript: Lệnh else sẽ được thực thi nếu lệnh if không được thực hiện, tức là điều kiện ở condition sẽ có giá trị là FALSE. Như vậy khi dùng lệnh else thì bắt buộc phải có một lệnh if đứng trước nó.
// Ví dụ: 
// var a = 12;
// var b = 10;
 
// if (a == b){
//     alert('a và b bằng nhau');
// }
// else{
//     alert('a và b khác nhau');
// }

// => Qua ví dụ trên ta có thể thấy lệnh if else nó thể làm được nhiều việc như so sánh các giá trị trả về true or false

//  -  Kết hợp nhiều lệnh if else trong javascript.

// Ví dụ: var a = 12;
// if (a > 12){
//     alert('a > 12');
// }
// else if (a < 12){
//     alert('a < 12');
// }
// else{
//     alert('a = 12');
// } 
// Kq a = 12 


//  -      Lệnh if else lồng nhau trong javascript.
// Các ngôn ngữ lập trình khác, ta có thể lồng các câu lệnh if lại với nhau, nghĩa là bên trong câu lệnh if sẽ chứa câu lệnh if khác.

// Ví dụ: 
// var a = 13;
  
// // Nếu a > 12
// if (a > 12)
// {
//     // Khai báo biến b
//     var b = 20;
      
//     // Nếu a bằng b
//     if (a == b)
//     {
//         console.log(' a = b ');
//     }
//     else { // ngược lại a khác b
//         console.log(' a != b ');
//     }
// }
// KQ: a != b; Vì khi nó kiểm ra điểm kiên ngoài trước nếu đúng thì nó sẽ thực hiển các câu lệnh trong khối đó. 



