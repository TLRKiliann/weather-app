import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

type ErrorType = {
  message: string;
}

export default function EmailSender() {
  
  const [email, setEmail] = useState<string>("")
  const [textMsg, setTextMsg] = useState<string>("")

  const [status, setStatus] = useState<string>('typing')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | ErrorType>(null)

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextMsg(e.target.value)
  }

  useEffect(() => emailjs.init("pYn8mwx4gUgfZdxb6"), []);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>,
    email: string, textMsg: string) => {
      e.preventDefault()
      setStatus('submitted')
      const serviceId = "service_3e83iqh";
      const templateId = "template_2dbog9h";
      try {
        setLoading(true);
        setStatus('success')
        await emailjs.send(serviceId, templateId, {
          name: email,
          recipient: textMsg
        });
      } catch (err) {
        setStatus('typing')
        setError(err as ErrorType)
      } finally {
        setLoading(false);
      }
  }

  console.log(loading, "loading")

  if (status === 'success') {
    return <section className='email'>
        <h2>Message sent successfully !</h2>
      </section>
  }

  return (
    <section className='email'>

      <div className='email--title'>
        <h2>Email</h2>
      </div>

      <div className='email--divform'>
        <form 
          onSubmit={(e) => handleSubmit(e, email, textMsg)}
          className='form'>

          <label htmlFor="email" className='form--label'>Email :</label>

          <input id="email" name="email" className='form--input' type="email"
            value={email}
            onChange={(e) => handleChangeEmail(e)} 
            placeholder='email'  
          />

          <label htmlFor="textarea" className='form--label'>
            Comment :
          </label>

          <textarea
            id="textarea"
            name="textarea"
            value={textMsg}
            className='form--textarea'
            onChange={(e) => handleTextarea(e)}
            cols={80} rows={10} 
            placeholder="Leave me a comment..." 
          />
        
          <button type="submit" className='form--btn' disabled={loading}>Send</button>

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
