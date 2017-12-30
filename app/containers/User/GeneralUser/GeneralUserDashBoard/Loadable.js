/**
 *
 * Asynchronously loads the component for GeneralUserDashBoard
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
