const company = [
        {name:'Saad It',Developer:13},
        {name:'Rohan solution',Developer:22},
        {name:'Sabit customer care',Developer:45},
        {name:'Rapin child care',Developer:02}
]

    const companyName = company.map(c => c.name);
    const companyDetails = company.map(company => company);
    console.log(companyDetails);

const friends = ['akib','shakib','shakil'];
const fLiegth = friends.map(f => f.length); //[ 4, 6, 6 ]
// console.log(fLiegth);