const buddyFunc = () =>{
    fetch('https://randomuser.me/api/?result=25')
    .then(response => response.json())
    .then(data => buddy(data))
}

function buddy(data) {
    console.log(data.results);
    const buddyResult= data.results;
    const div = document.getElementById("buddyId");
    for (const buddy of buddyResult) {
        const p = document.createElement("p");
        p.innerText = `name:- ${buddy.name.first} ${buddy.name.last}`;
        div.appendChild(p);
    }
}