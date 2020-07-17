import React, {useEffect, useState} from 'react'

const App = () => {
    const APP_ID = "e464842e";
    const APP_KEY = "83de0e44fbe4767db0dd5c3e7fbec345";

    const exampleReq = `https://api.edamam.com/search?q=chicken&app-id${APP_ID}&app_key=${APP_KEY}`

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('effect has been run')
    })

    return (<>

      <div>
        <input type="text" />
        <button type="submit">{counter}</button>
      </div>
      <h1 onClick={setCounter(counter + 1)}>{counter}</h1>
      </>
    );

}

export default App

