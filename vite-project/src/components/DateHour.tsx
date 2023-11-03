import { useState, useEffect } from 'react'
import './styles/DateHour.css'

export default function DateHour() {
    
    const [timing, setTiming] = useState<Date>(new Date)
    
    let date = timing.getDate();
    let month = timing.getMonth() + 1;
    let year = timing.getFullYear();

    useEffect(() => {
        const timer = setInterval(() => {
            setTiming(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="time">

            <div className="time--div">

                <p className="time--p time--l">Date:&nbsp;
                    {date < 10 ? "0" + date : date}/
                    {month < 10 ? "0" + month: month}/
                    {year}
                </p>

                <p className="time--p time--r">Local Time:&nbsp;
                    {timing && timing.toLocaleTimeString()}
                </p>
                
            </div>

        </section>
    )
}
