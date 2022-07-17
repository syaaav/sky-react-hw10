/* eslint-disable no-debugger */
/* eslint-disable no-useless-escape */
import PropTypes from 'prop-types'
import { useState } from 'react'

const useInputRequired = (
  type,
  currentValue,
  required,
  setErrorMessage,
  check
) => {
  const [value, setValue] = useState(currentValue)
  const [placeholder, setError] = useState('')

  return {
    type,
    value,
    onBlur: (event) => {
      if (!event.target.value && required) setError('Required field')
      if (event.target.type === 'email' && !check.test(event.target.value)) {
        setErrorMessage('Enter correct email')
      }
      if (
        event.target.type === 'password' &&
        event.target.value.length < check
      ) {
        setErrorMessage('Your password must be at least 6 characters')
      }
    },
    placeholder,
    onChange: (event) => setValue(event.target.value),
  }
}

useInputRequired.propTypes = {
  type: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
}

export default useInputRequired
