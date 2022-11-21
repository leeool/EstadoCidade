const estadoContainer = document.querySelector('[data-js="estado"]')
let cidadeContainer = document.querySelector('[data-js="cidade"]')

let logContainer = document.querySelector('[data-js="log-container"]')

const estadoLista = [
  {
    1: "Curitiba (1)",
    2: "Cascavel (2)",
    3: "Maringá (3)"
  },
  {
    1: "Florianópolis (4)",
    2: "Blumenau (5)",
    3: "Lages (6)"
  },
  {
    1: "Porto Alegre (7)",
    2: "Gramado (8)",
    3: "Caxias do Sul (9)"
  }
]

estadoContainer.addEventListener("input", (event) => {
  const inputValue = event.target.value

  if (!Boolean(inputValue)) {
    cidadeContainer.innerHTML = ""
    logContainer.textContent = "..."
    cidadeContainer.setAttribute("disabled", "")
    return
  }

  cidadeContainer.innerHTML = ""
  cidadeContainer.removeAttribute("disabled")

  cidadeContainer.innerHTML = "<Option value=''>Selecione</Option>"
  if (inputValue === "Paraná ('PR')") {
    for ([_, value] of Object.entries(estadoLista[0])) {
      cidadeContainer.innerHTML += `<Option value="${value}">${value}</Option>`
    }
  } else if (inputValue === "Santa Catarina ('SC')") {
    for ([_, value] of Object.entries(estadoLista[1])) {
      cidadeContainer.innerHTML += `<Option value="${value}">${value}</Option>`
    }
  } else {
    for([_, value] of Object.entries(estadoLista[2])){
      cidadeContainer.innerHTML += `<Option value="${value}">${value}</Option>`
    }
  }
  
  cidadeContainer.addEventListener("input", event => {
    if(!event.explicitOriginalTarget.value){
      logContainer.textContent = "..."
      return
    }
    logContainer.textContent = event.explicitOriginalTarget.value.slice(0, -3)
  })

})
