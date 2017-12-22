/**
 *
 * Asynchronously loads the component for GeneralUserRegistration
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
