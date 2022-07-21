/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef } from 'react'
import useInputRequired from './Login'
import * as constant from './constants'

const LoginPass = () => {
  const [message, setMessage] = useState('')

  function setErrorMessage(e) {
    setMessage(e)
  }

  const refLogin = useRef(null)
  const refPassword = useRef(null)

  const handleSubmit = (event) => {
    if (refLogin.current.value === '') {
      event.preventDefault()
      refLogin.current.focus()
      setErrorMessage('Fill in the field')
    } else if (!constant.filter.test(refLogin.current.value)) {
      event.preventDefault()
      refLogin.current.focus()
      setErrorMessage('Enter correct email')
    }

    if (refPassword.current.value === '') {
      event.preventDefault()
      refPassword.current.focus()
      setErrorMessage('Fill in the field')
    } else if (refPassword.current.value.length < constant.minLengthPassword) {
      event.preventDefault()
      refPassword.current.focus()
      setErrorMessage('Your password must be at least 6 characters')
    }
  }

  const login = useInputRequired(
    'email',
    '',
    true,
    setErrorMessage,
    constant.filter
  )
  const password = useInputRequired(
    'password',
    '',
    true,
    setErrorMessage,
    constant.minLengthPassword
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
        <input type="submit" value="Отправить" onClick={handleSubmit} />
      </form>
      <div>{message}</div>
    </div>
  )
}

export default LoginPass
