import { useState ,useEffect } from "react";
import Information from "../components/Information";

function Home(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }; //async와 await를 사용하여 비동기 프로그래밍 만들기

    useEffect(() => {
        getMovies();
    },[]);//useEffect를 통해 api 를 한번만 가져오기

    /*
    useEffect(()=> {
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then((response) => response.json())
        .then((json) => {
            setLoading(false);
            setMovies(json.data.movies);
        });
    },[])//api로 부터 response를 받게되고, 받아온 response에서 json파일을 얻는다
    */

    return (<div>
        {loading ? (
        <h1>Loading...</h1>
        ) : (
                <div>
                    {movies.map((movie) => (
                        <Information 
                        key={movie.id}
                        id = {movie.id}
                        year={movie.year}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title} 
                        summary={movie.summary} 
                        genres={movie.genres} />
                    ))}
                </div>
            )}
        </div>//key값은 react.js에서만, map 안에서 component들을 render할때 사용하는 것이다.
    );
}//home route는 기본적으로 movie component 전체를 가지고 있게 된다.
export default Home;