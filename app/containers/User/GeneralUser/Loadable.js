/**
 *
 * Asynchronously loads the component for GeneralUser
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
