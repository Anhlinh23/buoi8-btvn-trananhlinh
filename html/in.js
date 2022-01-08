/*
1. Tạo máy tính cơ bản với các chức năng: +, -, * và /.
- Sử dụng prompt để nhập phép tính
- Sử dụng prompt để nhập 2 số cần tính.
- Tạo biến result để lưu lại kết quả mỗi phép tính
- Sử dụng 2 cách khác nhau (if...else và switch)
- Giới thiệu về **parseInt** và **parseFloat**
- Code mẫu

```jsx
   máy tính cơ bản

   phép tinh
const operator = prompt('Enter operator ( either +, -, * or / ): ');

   nhập đầu vào 2 số

let result;

   using if...else if... else or switch

   display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
```
*/
/*
const operator = prompt("Enter operator ( either +, -, * or / ): ");
let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let result;
if (operator === "+") {
   result = a + b; 
} else if(operator === "-") {
   result = a - b; 
} else if(operator === "*"){
   result = a * b; 
} else if(operator === "/"){
   result = a / b;
} else{
   alert("Nhập lại");
}
if (operator === "+" || operator === "-"|| operator === "*" || operator === "/"  ) {
   console.log(`${a} ${operator} ${b} = ${result}`);
} else {
   console.log("Nhập lại")
}
*/

/*
2. Viết chương trình tìm số nguyên tố
- Kiến thức về if...else
- Kiến thức về for loop
- Kiến thức về toán tử so sánh
- Code mẫu

```jsx
   chương trình tìm số nguyên tố

   nhập số cần nhập
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

   check if number is equal to 1

   check if number is greater than 1

   check if number is less than 1
*/

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if( number <= 1 ){
   isPrime = false;
} else{
   if(number == 2){
      isPrime = true;
   } else if(number % 2 == 0){
      isPrime = false;
   } else{
      for(let i = 3; i <= number-2; i+=2){
         if(number % i == 0){
            isPrime = false;
            break;
         }
      }
   }
}
if(isPrime == true){
   console.log(`${number} là số nguyên tố.`);
} else{
   console.log(`${number} là không số nguyên tố.`);
}