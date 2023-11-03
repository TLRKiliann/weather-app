type SendProps = {
  fullname: string;
  email: string;
  textMsg: string;
}

export default function submitForm({fullname, email, textMsg}: SendProps) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      //let shouldError = fullname.toLowerCase() !== typeof("string");
      if (!fullname || !email || !textMsg) {
        reject(new Error("Something went wrong."))
      } else {
        resolve()
      }
    }, 2000)
  })
}
