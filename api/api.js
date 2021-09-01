console.log("first api");
function users() {
    fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
// .then(data => console.log(data));
.then(data =>  usersInfo(data));
}

function usersInfo(users) {
    const ul = document.getElementById("usersId");
    for (const user of users) {
        const li = document.createElement("li")
        li.innerText = `Name:- ${user.name} and email:-${user.email}`;

        ul.appendChild(li);
    }
}

// function usersInfo(users) {
//     // console.log(data);
//    const ul = document.getElementById("usersId")
//     for (const user of users) {
//         const li = document.createElement('li');
//         li.innerText= `person Name:${user.name} and email:${user.email}`;
//         ul.appendChild(li);
//     }
// }