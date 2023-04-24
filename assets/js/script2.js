var api_url = "https://digimon-api.vercel.app/api/digimon/level"
var leveles = document.querySelector("#leveles")
var level1 = document.querySelector("#level1")
var level2 = document.querySelector("#level2")
var level3 = document.querySelector("#level3")
var level4 = document.querySelector("#level4")
var level5 = document.querySelector("#level5")
var level6 = document.querySelector("#level6")
       
    
 
        fetch(`${api_url}/fresh`)
          .then(response => response.json())
          .then(datos => {
              for (item of datos) {
          
              leveles.innerHTML +=  `
              <div class="tarjeta">
              <div class="card" style="width: 18rem; ">
              <img src="${item.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.level}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
              </div>
              `
              if (item.id == 3) {break;}
          }
      })
      fetch(`${api_url}/intraining`)
      .then(response => response.json())
      .then(datos => {
          for (item1 of datos) {
      
          level1.innerHTML +=  `
          <div class="tarjeta">
          <div class="card" style="width: 18rem; ">
          <img src="${item1.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item1.name}</h5>
            <p class="card-text">${item1.level}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
          `
          if (item1.id == 3) {break;}
      }
  })
  fetch(`${api_url}/rookie`)
  .then(response => response.json())
  .then(datos => {
      for (item2 of datos) {
  
      level2.innerHTML +=  `
      <div class="tarjeta">
      <div class="card" style="width: 18rem; ">
      <img src="${item2.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item2.name}</h5>
        <p class="card-text">${item2.level}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      </div>
      `
      if (item2.id == 3) {break;}
  }
})
fetch(`${api_url}/champion`)
.then(response => response.json())
.then(datos => {
    for (item3 of datos) {

    level3.innerHTML +=  `
    <div class="tarjeta">
    <div class="card" style="width: 18rem; ">
    <img src="${item3.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item3.name}</h5>
      <p class="card-text">${item3.level}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    `
    if (item3.id == 3) {break;}
}
})
fetch(`${api_url}/armor`)
.then(response => response.json())
.then(datos => {
    for (item4 of datos) {

    level4.innerHTML +=  `
    <div class="tarjeta">
    <div class="card" style="width: 18rem; ">
    <img src="${item4.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item4.name}</h5>
      <p class="card-text">${item4.level}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    `
    if (item4.id == 3) {break;}
}
})
fetch(`${api_url}/ultimate`)
.then(response => response.json())
.then(datos5 => {
    for (item5 of datos5) {

    level5.innerHTML +=  `
    <div class="tarjeta">
    <div class="card" style="width: 18rem; ">
    <img src="${item5.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item5.name}</h5>
      <p class="card-text">${item5.level}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    `
    if (item5.id == 3) {break;}
}
})
fetch(`${api_url}/mega`)
.then(response => response.json())
.then(datos => {
    for (item6 of datos) {

    level6.innerHTML +=  `
    <div class="tarjeta">
    <div class="card" style="width: 18rem; ">
    <img src="${item6.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item6.name}</h5>
      <p class="card-text">${item6.level}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    `
    if (item6.id == 3) {break;}
}
})

var selectorID = document.getElementById('freshb')

function cambiarTexto(){
    document.getElementById("caja").innerHTML = leveles ;
}