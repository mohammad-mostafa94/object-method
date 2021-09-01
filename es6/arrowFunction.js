//একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

// const divideFive = number => number/5;
// console.log(divideFive(15));


// তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
// const multiply = (n1,n2) => {
//     const a = n1 + 2;
//     const b = n2 + 2;
//     const c = a * b;
//     return c;
// }
// console.log(multiply(1,1));

// এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

// const threeValue = (a,b,c) => {
//     const result = a * b * c;
//     return result;
// }
// console.log(threeValue(2,2,3))   // 12
//অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
// const numbers = [1,2,4,5];
// const multiplyFive = numbers.map(number => number*5);
// console.log(multiplyFive);


//অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো |
// const numbers = [1,2,4,5,9,7,3];
// const oddNumbers = numbers.filter(number => {
//     const odd=  number%2 == 1;
//     return odd;
// })
// console.log(oddNumbers);

//একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// const mobile = [
//     {name:"samsung", price:8888},
//     {name:"symphony", price:5000},
//     {name:"nokia", price:8118},
//     {name:"apple", price:9999}
// ]

// const fiveThousand = mobile.find(price => {
//    const rate = price.price == 5000;
//    return rate;
// })

// console.log(fiveThousand);

//তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
// function threeNumbers(n1,n2,n3=7) {
//     const result = n1 + n2 + n3;
//     return result;
// }
// console.log(threeNumbers(1,2)); //10



//array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const destructuring = [1,4,5,6];
