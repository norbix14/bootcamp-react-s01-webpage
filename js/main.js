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
  const validateEmail = email => {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
    return emailRegexp.test(email)
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
        if (!validateEmail(useremail.value)) {
          return alert('Email inválido')
        }
        const btnSend = document.querySelector('#sendform')
        btnSend.innerHTML = 'Enviando...'
        setTimeout(() => {
          btnSend.setAttribute('disabled', 'true')
          btnSend.setAttribute('title', 'Ya recibimos tu consulta')
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
        if (!validateEmail(usersubemail.value)) {
          return alert('Email inválido')
        }
        const btnSend = document.querySelector('#suscribirse')
        btnSend.innerHTML = 'Registrándo...'
        setTimeout(() => {
          btnSend.setAttribute('disabled', 'true')
          btnSend.setAttribute('title', 'Ya habilitamos tu suscripción')
          usersubemail.setAttribute('disabled', 'true')
          usersubemail.style.background = '#fff'
          btnSend.innerHTML = '¡Suscrito!'
          subsForm.reset()
        }, 3000)
      }
    })
  }
})
