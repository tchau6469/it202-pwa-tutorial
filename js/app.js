const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/h2buItkoIO.png" },
  { name: "Voluptatem", image: "images/qt1.png" },
  { name: "Explicabo", image: "images/qtlilbite.png" },
  { name: "Rchitecto", image: "images/qtmad.png" },
  { name: " Beatae", image: "images/qtmm.png" },
  { name: " Vitae", image: "images/qtroll.png" },
  { name: "Inventore", image: "images/qtsmirk.png" },
  { name: "Veritatis", image: "images/qtwhoa.png" },
  { name: "Accusantium", image: "images/qtwtf.png" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}