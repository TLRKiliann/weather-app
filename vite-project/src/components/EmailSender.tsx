import { useState } from 'react'
import submitForm from './SubmitForm'

export default function EmailSender() {
  
  const [fullname, setFullname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [textMsg, setTextMsg] = useState<string>("")

  const [status, setStatus] = useState<string>('typing')
  const [error, setError] = useState<null | unknown>(null)

  if (status === 'success') {
    return <h2>Message sent successfully !</h2>
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
      console.log(textMsg)
      setStatus('submitted')
      try {
        await submitForm({fullname, email, textMsg})
        setStatus('success')
      } catch (err: unknown | null) {
        setStatus('typing')
        setError(err)
      }
  }

  return (
    <section className='email'>
      <div>
        <h2>email</h2>

        <form 
          onSubmit={(e) => handleSubmit(e, fullname, email, textMsg)}
          className='submit--form'>

          <label htmlFor=""></label>
          <input type="text" value={fullname} onChange={(e) => handleChangeName(e)} />

          <label htmlFor=""></label>
          <input type="email" value={email} onChange={(e) => handleChangeEmail(e)} />

          <textarea
            id="textarea"
            name="textarea" 
            value={textMsg}
            onChange={(e) => handleTextarea(e)}
            cols={80} rows={10} 
            placeholder="email" 
          />
        
          <button type="submit">Send</button>

        </form>

        {error !== null ? (
          <p>{error?.message}</p>
        ):(
          null
        )}
      </div>
    </section>
  )
}
