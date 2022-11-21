import { createBrowserRouter } from 'react-router-dom';

//Main Layout Import
import Layout from '../layout/Layout';

//Views Import
import Category from '../views/Category';
import Item from '../views/Item';
import NotFound from '../views/NotFound';
import App from '../App';

//Routes definition
//Category and Item will have dynamic URL to later show specific info with useParams Hook

// Use a Layout and children in order to have a main template for displaying different pages/views

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        //define this children Route as index for parent route
        element: <App />,
      },
      {
        path: 'category/:category',
        element: <Category />,
      },
      {
        path: 'item/:id',
        element: <Item />,
      },
    ],
  },
]);
