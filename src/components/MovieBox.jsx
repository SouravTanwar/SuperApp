import React from 'react'

const MovieBox = ({category, selectedMovies, setSelectedMovies}) => {

    const handleMovie=(category)=>{

        if(!selectedMovies.includes(category)){  
            setSelectedMovies([...selectedMovies, category])
        } 
        else{
            setSelectedMovies(selectedMovies.filter((movie)=>movie !== category)) ;
        }
        

    }

    return (
        <div
            style={{
                display:"flex",
                height:"200px",
                width:"200px",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#6CD061",
                border:`4px solid ${selectedMovies.includes(category) ? "red":"black"}`,
                borderRadius:"20px",
            }}

            onClick={()=>handleMovie(category)}
        >
            <h1>{category.movie}</h1>
        </div>
    )
}

export default MovieBox