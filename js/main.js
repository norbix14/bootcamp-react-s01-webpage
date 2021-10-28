document.addEventListener('DOMContentLoaded', () => {
  const queryForm = document.querySelector('#queryform')
  const subsForm = document.querySelector('#subscriptionform')
  const noRef = document.querySelectorAll('a[href="#"]')
  if (noRef) {
    Array.from(noRef).forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault()
      })
    })
  }
  if (queryForm) {
    const username = document.querySelector('#username')
    const userlastname = document.querySelector('#userlastname')
    const useremail = document.querySelector('#useremail')
    const userquery = document.querySelector('#userquery')
    queryForm.addEventListener('submit', e => {
      e.preventDefault()
      if (username.value.trim() === '' ||
          userlastname.value.trim() === '' ||
          useremail.value.trim() === '' ||
          userquery.value.trim() === '') {
        alert('Los campos no debe quedar vacíos')
      } else {
        const btnSend = document.querySelector('#sendform')
        btnSend.innerHTML = 'Enviando...'
        setTimeout(() => {
          btnSend.setAttribute('disabled', 'true')
          btnSend.innerHTML = '¡Consulta enviada!'
          queryForm.reset()
        }, 3000)
      }
    })
  }
  if (subsForm) {
    const usersubemail = document.querySelector('#email-suscripcion')
    subsForm.addEventListener('submit', e => {
      e.preventDefault()
      if (usersubemail.value.trim() === '') {
        alert('Ingresa tu email para poder suscribirte')
      } else {
        const btnSend = document.querySelector('#suscribirse')
        btnSend.innerHTML = 'Registrándo...'
        setTimeout(() => {
          btnSend.setAttribute('disabled', 'true')
          btnSend.innerHTML = '¡Suscrito!'
          subsForm.reset()
        }, 3000)
      }
    })
  }
})
