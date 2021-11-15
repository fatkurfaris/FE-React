import React, { useEffect, useState } from 'react'

const date = new Date()
const Timer = ( props ) =>
{
    const [ dateTime, setDateTime ] = useState( {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    } )

    useEffect( () =>
    {
        const timer = setInterval( () =>
        {
            const date = new Date()
            setDateTime( {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            }, 1000 )
        } )
        return () =>
        {
            clearInterval( timer )
        }
    }, [] )
    return (
        <div>
            <div className={ props.classname }>{ dateTime.hours }:{ dateTime.minutes }:{ dateTime.seconds }</div>
        </div>
    )
}

export default Timer