const loadBtn = document.getElementById("loadBtn");
const users = document.getElementById("users");

loadBtn.addEventListener("click", fetchUser);

async function fetchUser() {
    try {
        users.innerHTML = "Loading...";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        users.innerHTML = "";

        data.forEach(element => {
            const card = document.createElement("div");

            card.className = "user";

            card.innerHTML = `
                <h2>${element.name}</h2>
                <p>ID: ${element.id}</p>
                <p>Email: ${element.email}</p>
            `;

            users.appendChild(card);
        });

    } catch (error) {
        users.innerHTML = "Error loading users";
        console.log(error);
    }
}