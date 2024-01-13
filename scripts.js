function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const value = document.querySelector(".result")

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1) + min)

        value.innerHTML = (result)

    } else {
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    }
}