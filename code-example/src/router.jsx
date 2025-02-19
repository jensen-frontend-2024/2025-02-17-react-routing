import { createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';

// Every time the URL in the broswer changes, the RouterProvider will try and match that URL agains something in this router object. When it gets a match, it will render the corresponding component defined on the element attribute.
export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
  },
  {
    element: (
      <section>
        <h1>404 Page. The URL does not have any matches</h1>
      </section>
    ),
    path: '*', // The asterix string matches everything, so see this as a fallback route.
  },
]);
