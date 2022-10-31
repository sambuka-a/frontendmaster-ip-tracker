import { useState, useRef, useEffect } from 'react'
import styles from './Header.module.scss'

const Header = ({handleClick}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef();

  const validIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  const validHostnameRegex = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/;

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value.length > 0 && (validIpAddressRegex.test(value) || validHostnameRegex.test(value))) {
      handleClick(value)
      setError(false)
    } else {
      setError(true)
    }
    setValue('')
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>IP Address Tracker</h1>
        </div>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={error ? styles.error : ''}
              ref={inputRef}
              onChange={handleChange} 
              value={value} 
              type="text" 
              name="title" 
              placeholder="Search for any IP address or domain" 
            />
            <button type="submit"><span className={styles.chevron}></span></button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Header