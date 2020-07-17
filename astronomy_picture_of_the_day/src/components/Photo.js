import React, {useState, useEffect} from "react"


export default function Photo(){
    const [photoData, setPhotoData] = useState(null)

    useEffect(()=>{
        fetchPhoto()
        async function fetchPhoto(){
            const res = await fetch(
              `https://api.nasa.gov/planetary/apod?api_key=M96ihsftgCEkqXXeFIz57SLkdTLMJguSJIJV5RSx`
            );
            const data = res.json()
            setPhotoData(data)
            console.log(data)
        }
    }, [])

    if(!photoData){
        return(<div></div>)
    }

    return(
        <div>
            <img src={photoData.url} alt={photoData.title}/>
        </div>
    )
}

