    // Obtener los valores de los campos del formulario
    const email = document.getElementById('email')
    const pasword = document.getElementById('pasword')
    const button = document.getElementById ('button')
button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        email: email.value,
        pasword: pasword.value
    }
    console.log(data)
})