import React from 'react'

const MovieChips = ({category, setSelectedMovies}) => {

    const handleDelete=(category)=>{
        setSelectedMovies((selectedMovies)=>selectedMovies.filter((movie)=>movie!=category))
    }

    return (
        <button
            style={{
                display:"flex",
                width:"100px",
                justifyContent:"space-between",
                padding:"5px 10px",
                margin:"5px",
                backgroundColor:"#148A08",
                color:"#FFFFFF",
                borderRadius:"30px"
            }}
        >
            {category.movie} <span style={{color:"#FFFFFF"}} onClick={()=>handleDelete(category)}>X</span>
        </button>
    )
}

export default MovieChips