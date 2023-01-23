import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={'/page-1'}>Page 1</Link><br />
      <Link to={'/page-2'}>Page 2</Link><br />
      <Link to={'/page-3'}>Page 3</Link><br />
      <Link to={'/page-4'}>Page 4</Link><br />
      <Link to={'/less'}>LESS</Link><br />
      <Link to={'/sass'}>Sass</Link><br />
    </div>
  );
}

export default Home;