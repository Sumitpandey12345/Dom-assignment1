let screen = document.getElementById("main")
let flag = true;
async function foo(){
   if(flag){
    flag=false;
    let data = await fetch(`https://reqres.in/api/users`)
    let res = await data.json()
    console.log(res)
   let userData =  res.data


   userData.map(function(ele){
       let card = document.createElement("div")
       card.className = "box"
       let image = document.createElement("img")
       image.className = "pic"
       let name = document.createElement("p")
       name.className = "name"
       let email = document.createElement("h3")
       email.className = "mail"
       image.src = ele.avatar
       name.innerHTML = ele.first_name
       email.innerHTML = ele.email
       card.append(image,name,email)
       screen.append(card)
   })
   }
}