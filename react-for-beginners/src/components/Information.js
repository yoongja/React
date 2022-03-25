import PropTypes from "prop-types"; // prop-type이 무엇이 있는지를 명시해주기
import { Link } from "react-router-dom";
import styles from "./Information.module.css";

function Information({id,coverImg,year,title,summary,genres}){
    return(
        <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

//prop을 통해 파일 분리하기

Information.propTypes ={
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}//movie component의 proptype 설정해주기

export default Information