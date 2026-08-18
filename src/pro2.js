async function fatchUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json()
        console.log("-------------Information------------")
        data.forEach(element => {
            console.log("Id :",element.id);
            console.log("Name : ",element.name);
            console.log("Email : ",element.email);
        });
    }
    catch(error){
        console.log("INvalid data");
    }
}

fatchUser();