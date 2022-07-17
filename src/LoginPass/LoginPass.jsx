/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef } from 'react'
import useInputRequired from './Login'

const LoginPass = () => {
  const [message, setMessage] = useState('')
  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/
  const minLengthPassword = 6

  function setErrorMessage(e) {
    setMessage(e)
  }

  const refLogin = useRef(null)
  const refPassword = useRef(null)

  const focus = (event) => {
    if (refLogin.current.value === '') {
      event.preventDefault()
      refLogin.current.focus()
      setErrorMessage('Fill in the field')
    } else if (!filter.test(refLogin.current.value)) {
      event.preventDefault()
      refLogin.current.focus()
      setErrorMessage('Enter correct email')
    }

    if (refPassword.current.value === '') {
      event.preventDefault()
      refPassword.current.focus()
      setErrorMessage('Fill in the field')
    } else if (refPassword.current.value.length < minLengthPassword) {
      event.preventDefault()
      refPassword.current.focus()
      setErrorMessage('Your password must be at least 6 characters')
    }
  }

  const login = useInputRequired('email', '', true, setErrorMessage, filter)
  const password = useInputRequired(
    'password',
    '',
    true,
    setErrorMessage,
    minLengthPassword
  )

  return (
    <div>
      <form>
        <label>
          Login:
          <input ref={refLogin} {...login} />
        </label>
        <label>
          Password:
          <input ref={refPassword} {...password} />
        </label>
        <input type="submit" value="Отправить" onClick={focus} />
      </form>
      <div>{message}</div>
    </div>
  )
}

export default LoginPass
