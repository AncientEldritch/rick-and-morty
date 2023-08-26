import { useState, createContext, useEffect } from "react";

//create this context "thing"
export const FavoritesContext  = createContext()

export default function FavoritesContextProvider(props){

    //create my global state
    const [favorites, setFavorites] = useState([])

    //need a function to add a character to favorites

    useEffect(
        ()=>{
            //get the value from local storage
            const storedFavorites  =  localStorage.getItem('favoritesList')
            console.log(storedFavorites)
            //check if something was there
            if (storedFavorites) {
                //use this value for state
                setFavorites(JSON.parse(storedFavorites))
            }
        }, []
    )

    useEffect(
        () => {
            //save favorites to local storage
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites]
    )

    const addCharacter = (charToAdd) => {
        console.log('adding', charToAdd)
        // I need to add this obejct to favorites state
        //create new array with all the old stuff and the new object
        let newFavorites  = [...favorites, charToAdd]
        //update my state to this
        setFavorites(newFavorites)
    }

    //need function to remove a character
    const removeCharacter = (charId) => {
        console.log("removing", charId)
        //keep all that are not this id
        let newFavorites =  favorites.filter(item=>item.id != charId)
        //update state to this
        setFavorites(newFavorites)

    }

    return(
        <FavoritesContext.Provider value={{addCharacter, favorites, removeCharacter}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}