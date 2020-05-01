import React, {useState, useEffect} from 'react'


const Music = () => {
    const APP_ID = "youtube-search1.p.rapidapi.com";
    const API_KEY = "";

    const [music, setMusic] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    useEffect(() => {
        getMusic()
    }, [query])
}