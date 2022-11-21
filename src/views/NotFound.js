import { useRouteError } from 'react-router-dom';

//Logo Import
import mainLogo from '../assets/logos/logostefanos.png';

//React-Router-Dom Import (Logo link back home)
import { Link } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="errorContainer">
      <Link to="/">
        <img className="errorLogo" src={mainLogo} alt="Stefanos Loco" />
      </Link>
      <h1 className="errorCode">Error 404 :( </h1>
      <p className="errorText">La página que buscas no existe</p>
      <Link to="/">
        <button className="errorBackBtn">Volver al Home</button>
      </Link>
    </div>
  );
};
export default NotFound;
