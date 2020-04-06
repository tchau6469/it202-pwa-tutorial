const container = document.querySelector(".container")
const coffees = [
  { name: "Pumped", image: "images/h2buItkoIO.png" },
  { name: "For", image: "images/qt1.png" },
  { name: "This", image: "images/qtlilbite.png" },
  { name: "That", image: "images/qtmad.png" },
  { name: "Is", image: "images/qtmm.png" },
  { name: "Heavenly", image: "images/qtroll.png" },
  { name: "QUICK", image: "images/qtsmirk.png" },
  { name: "TIME", image: "images/qtwhoa.png" },
  { name: "NICE", image: "images/qtwtf.png" },
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