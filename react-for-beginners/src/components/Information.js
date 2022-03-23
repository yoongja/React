import PropTypes from "prop-types"; // prop-type이 무엇이 있는지를 명시해주기
import { Link } from "react-router-dom";

function Information({CoverImg,title,summary,genres}){
    return(
    <div>
        <img src={CoverImg} alt={title}/>
        <h2>
            <Link to="/movie">{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
        </ul>
    </div>
    );
}

//prop을 통해 파일 분리하기

Information.propTypes ={
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}//movie component의 proptype 설정해주기

export default Information