import React, {useContext, useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'

function Homepage() {

    //NOTE {} NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

    //create state to hold characters
    const [characters, setCharacters] = useState([])

    // this page should show all the characters when it loads
    //create useEffect for this
    useEffect(
        ()=>{
            //console.log('homepage loaded')
            //make api call to get characters
            // https://rickandmortyapi.com/api/character
            // install axios after figuring out npm
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                console.log(res.data.results)
                //I have the character data, where do I store it?
                //store it in state
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))

        }, [] //means it runs only once when the page loads
    )
    return (
    <div className={darkMode?"home-container  home-dark":"home-container"}>
        <Search setCharacters={setCharacters}/>
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                characters.map(item=><CharacterCard character={item}
                    key={item.id} />)
                // characters.map(item=><p key={item.id}>{item.name}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage