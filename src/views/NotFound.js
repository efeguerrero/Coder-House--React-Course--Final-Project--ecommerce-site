import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>404</h1>
      <p>Pagina no encontrada</p>
      <button>Volver al Home</button>
    </div>
  );
};
export default NotFound;
