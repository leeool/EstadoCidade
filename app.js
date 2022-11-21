const estadoContainer = document.querySelector('[data-js="estado"]')
let cidadeContainer = document.querySelector('[data-js="cidade"]')
let logContainer = document.querySelector('[data-js="log-container"]')

const estadoLista = [
  {
    PR1: "Curitiba",
    PR2: "Cascavel",
    PR3: "Maringá"
  },
  {
    SC4: "Florianópolis",
    SC5: "Blumenau",
    SC6: "Lages"
  },
  {
    RS7: "Porto Alegre",
    RS8: "Gramado",
    RS9: "Caxias do Sul"
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
    = `${textValueOption}/${cidadeContainer.value.slice(0, -1)}`

  })
})
