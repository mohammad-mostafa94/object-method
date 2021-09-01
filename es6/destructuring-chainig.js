const company = {
    web:{
        developer:"Mostafa",
        technithiun:"mabbub",
        skilled:{
            skill:"js"
        }
    }
}
// console.log(company.web.skilled.skill);// output: js
console.log(company?.web?.skills?.skill); // output: undefined


// function min(nums) {
//       return Math.min(nums) 
//     }
// console.log(min([1,3,2 ]))