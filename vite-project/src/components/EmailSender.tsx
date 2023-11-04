import { useState } from 'react'
import submitForm from './SubmitForm'

type ErrorType = {
  message: string;
}

export default function EmailSender() {
  
  const [fullname, setFullname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [textMsg, setTextMsg] = useState<string>("")

  const [status, setStatus] = useState<string>('typing')
  const [error, setError] = useState<null | ErrorType>(null)

  if (status === 'success') {
    return <section className='email'>
        <h2>Message sent successfully !</h2>
      </section>
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextMsg(e.target.value)
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>,
    textMsg: string, email: string, fullname: string) => {
      e.preventDefault()
      setStatus('submitted')
      try {
        await submitForm({fullname, email, textMsg})
        setStatus('success')
      } catch (err: unknown | null) {
        setStatus('typing')
        setError(err as ErrorType)
      }
  }

  return (
    <section className='email'>

      <div className='email--title'>
        <h2>Email</h2>
      </div>

      <div className='email--divform'>
        <form 
          onSubmit={(e) => handleSubmit(e, fullname, email, textMsg)}
          className='form'>

          <label htmlFor="fullname" className='form--label'>Fullname :</label>

          <input id="fullname" name="fullname" className='form--input' type="text"
            value={fullname} onChange={(e) => handleChangeName(e)} 
            placeholder='fullname'
          />

          <label htmlFor="email" className='form--label'>Email :</label>

          <input id="email" name="email" className='form--input' type="email" 
            value={email} onChange={(e) => handleChangeEmail(e)} 
            placeholder='email'  
          />

          <label htmlFor="textarea" className='form--label'>
            Leave a comment or suggestions :
          </label>
          <textarea
            id="textarea"
            name="textarea"
            className='form--textarea'
            value={textMsg}
            onChange={(e) => handleTextarea(e)}
            cols={80} rows={10} 
            placeholder="Leave a comment..." 
          />
        
          <button type="submit" className='form--btn'>Send</button>

          <span className='form--error'>
            {error !== null ? (
              <p>{error?.message}</p>
            ):(
              null
            )}
          </span>

        </form>
      </div>
    </section>
  )
}
