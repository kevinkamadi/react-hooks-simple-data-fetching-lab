// create your App component here
import React, { useEffect, useState } from 'react'

function App() {

    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(r => r.json())
        .then(data => setImageSrc(data.message))
    }, [])

    return (
        <div>
            {imageSrc === '' ? <p>Loading...</p> : <img src={imageSrc} alt='A Random Dog' />}
        </div>
    )
}

export default App