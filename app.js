const estadoContainer = document.querySelector('[data-js="estado"]')
let cidadeContainer = document.querySelector('[data-js="cidade"]')
let logContainer = document.querySelector('[data-js="log-container"]')

const estadoLista = [
  {
    PR1: "Curitiba (1)",
    PR2: "Cascavel (2)",
    PR3: "Maringá (3)"
  },
  {
    SC4: "Florianópolis (4)",
    SC5: "Blumenau (5)",
    SC6: "Lages (6)"
  },
  {
    RS7: "Porto Alegre (7)",
    RS8: "Gramado (8)",
    RS9: "Caxias do Sul (9)"
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
    for ([key, value] of Object.entries(estadoLista[0])) {
      cidadeContainer.innerHTML += `<Option value="${key}">${value}</Option>`
    }
  } else if (inputValue === "Santa Catarina ('SC')") {
    for ([key, value] of Object.entries(estadoLista[1])) {
      cidadeContainer.innerHTML += `<Option value="${key}">${value}</Option>`
    }
  } else {
    for([key, value] of Object.entries(estadoLista[2])){
      cidadeContainer.innerHTML += `<Option value="${key}">${value}</Option>`
    }
  }
  
  cidadeContainer.addEventListener("input", event => {
    const textValueOption = cidadeContainer.options[cidadeContainer.selectedIndex].text

    textValueOption === "Selecione" 
    ? logContainer.textContent = "..." 
    : logContainer.textContent 
    = `${textValueOption.slice(0, -4)}/${cidadeContainer.value.slice(0, -1)}`

  })
})
