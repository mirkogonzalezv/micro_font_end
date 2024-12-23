import { initFederation } from '@angular-architects/native-federation';

// Se definen aquí, todos los posibles modulos remotos que vamos a implementar.
initFederation({
  'mfe1': 'http://localhost:3000/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
