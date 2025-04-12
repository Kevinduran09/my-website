import { useState } from "react";

import React from 'react'

export default function Input() {
    const [input, setinput] = useState('')
    function handleInput(e) {
        setinput(e.target.value)
    }
    return (
        <div >
            <span>Digite el texto de un usuario de github</span>
            <br/>
            <input type="text" placeholder="Uuario de github" value={input} onChange={handleInput} />
            <br/>
            <span>Enlace hacia el perfil de   <a href={`https://github.com/${input}`} target='_blank' style={{ marginLeft: '5px' }}>{input}</a></span>
          
        </div>
    )
}
