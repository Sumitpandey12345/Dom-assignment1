let screen = document.getElementById("cont")
let flag = true;

async function movies(){
   if(flag){
    flag = false
    let data = await fetch("https://www.omdbapi.com/?apikey=88027651&s=avengers")
    let res =  await data.json()
    let movieDetail = res.Search
     console.log(movieDetail)

     movieDetail.map(function(data){
        let card = document.createElement("div")
        card.className = "card"
        let image = document.createElement("img")
        image.className = "pic"
        let title = document.createElement("h2")
        title.className = "moviename"
        let year =  document.createElement("h3")
        year.className = "year"
       image.src = data.Poster;
       title.textContent = data.Title
       year.textContent = data.Year
      card.append(image,title,year)
      screen.append(card)
    
    })
   }
}
