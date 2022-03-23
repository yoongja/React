import {
    BrowserRouter as Router,
    Routes,
    Route
}from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function Movie() {
    return (
        <Router> {/*router를 만든다 */}
            <Routes> 
            <Route path="/movie" element={<Detail/>}/>
          </Routes>
          <Routes> {/*switch 가 react-router-dom이 버전 6으로 업그레이드 되며 routes로 바뀜 */}
            <Route path="/" element={<Home/>}/>{/*router 안에 route를 만들어서 user가 "/"url에 있는 경우 home route를 렌더링 해준다*/}
          </Routes>
        </Router>
      );
}

export default Movie;
//Movie.js 는 이제 새로운 component를 render 하게 되는데 이를통해 home을 보여줄지 detail을 보여줄지 정하게 된다