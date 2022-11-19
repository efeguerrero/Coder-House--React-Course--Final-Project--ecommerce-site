import { createBrowserRouter } from 'react-router-dom';

//Views Import
import Category from '../views/Category';
import Item from '../views/Item';
import NotFound from '../views/NotFound';
import App from '../App';

//Routes definition
//Category and Item will have dynamic URL to later show specific info with useParams Hook

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: 'category/:category',
    element: <Category />,
    errorElement: <NotFound />,
  },
  {
    path: 'item/:id',
    element: <Item />,
    errorElement: <NotFound />,
  },
]);
