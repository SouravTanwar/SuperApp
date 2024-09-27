import { useState } from "react"
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox.jsx";
import MovieChips from "../components/MovieChips.jsx";

const MOVIES = [
    {
        id: 0,
        movie: "Action",
    },
    {
        id: 1,
        movie: "Drama",
    },
    {
        id: 2,
        movie: "Romance",
    },
    {
        id: 3,
        movie: "Thriller",
    },
    {
        id: 4,
        movie: "Horror",
    },
    {
        id: 5,
        movie: "Western",
    },
    {
        id: 6,
        movie: "Fantasy",
    },
    {
        id: 7,
        movie: "Fiction",
    },
    {
        id: 8,
        movie: "Music",
    },
];

const MovieSelection = () => {

    const [selectedMovies, setSelectedMovies] = useState([])
    const navigate = useNavigate()

    const handleNext=()=>{
        if(selectedMovies.length<3){
            alert("please select atleast 3 movie category")
        }
        else{
            alert("choice selected successfully")
            localStorage.setItem("selectedMovies",JSON.stringify(selectedMovies))
            setSelectedMovies([])
            navigate("/carousel")
        }
        
    }


    return (
        <div style={{display:"flex", width:"100vw", height:"100vh"}}>
            <div style={{width:"45vw"}}>
                <h1>SuperApp</h1>
                <p>Choose your entertainment category</p>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    {
                        selectedMovies.map((category) => (
                            <p key={category.id}>
                                <MovieChips
                                    category={category}
                                    setSelectedMovies={setSelectedMovies}
                                />
                            </p>
                        ))
                    }
                </div>
                {
                    selectedMovies.length < 3 && (
                        <p style={{ color: "red" }}>
                            Minimum 3 category required
                        </p>
                    )
                }
            </div>
            <div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap:"10px",
                        margin:"40px auto"
                    }}
                >
                    {
                        MOVIES.map((category) => (
                            <div key={category.id}>
                                <MovieBox
                                    category={category}
                                    selectedMovies={selectedMovies}
                                    setSelectedMovies={setSelectedMovies}
                                />
                            </div>
                        ))
                    }
                </div>
                <button style={{
                    padding: "5px 10px",
                    margin: "5px",
                    backgroundColor: "#148A08",
                    color: "#FFFFFF",
                    borderRadius: "30px"
                }}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default MovieSelection