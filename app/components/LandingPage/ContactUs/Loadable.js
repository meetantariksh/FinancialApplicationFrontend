/**
 *
 * Asynchronously loads the component for ContactUs
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
