/**
 *
 * Asynchronously loads the component for RegistrationContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
