document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('#queryform')
  if (formulario) {
    const username = document.querySelector('#username')
    const userlastname = document.querySelector('#userlastname')
    const useremail = document.querySelector('#useremail')
    const userquery = document.querySelector('#userquery')
    formulario.addEventListener('submit', e => {
      e.preventDefault()
      if (username.value.trim() === '' ||
          userlastname.value.trim() === '' ||
          useremail.value.trim() === '' ||
          userquery.value.trim() === '') {
        alert('Los campos no debe quedar vacíos')
      } else {
        const btnSend = document.querySelector('#sendform')
        btnSend.style.width = '150px'
        btnSend.innerHTML = 'Enviando su consulta...'
        setTimeout(() => {
          btnSend.setAttribute('disabled', 'true')
          btnSend.style.width = '250px'
          btnSend.innerHTML = 'Consulta enviada. <br>¡Muchas gracias!'
          formulario.reset()
        }, 3000)
      }
    })
  }
})
