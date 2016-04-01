import {render} from 'react-dom';
import routes from '../routes';
import iso from 'iso';

function renderRoute(serverState) {
  routes.dispatch(serverState, (state, component) => {
    render(component, document.getElementById('app'));
  });
}

iso.bootstrap(state => {
  renderRoute(state);
});
