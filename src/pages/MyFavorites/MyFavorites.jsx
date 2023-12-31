import React, { useContext } from 'react'
import "./MyFavorites.css"
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { FavoritesContext } from '../../contexts/FavoritesContext'





function MyFavorites() {
    const {favorites}  = useContext(FavoritesContext)
  return (
    <div className="favorites-container">
        <h1>My Favorite Characters</h1>
        <div className="favorite-characters">
            {
                favorites.length > 0?
                favorites.map(item=><CharacterCard character={item}
                    key={item.id} />) 
                    : <p>You have not selected any favorites yet</p>
            }
        </div>
    </div>
  )
}

export default MyFavorites