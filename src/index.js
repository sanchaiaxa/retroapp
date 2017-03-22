import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import Login from './components/PALogin';
// AppContainer is a necessary wrapper component for HMR

// import { AppComponent } from './components';

injectTapEventPlugin();

const render = (Component) => {
  ReactDOM.render(
    // <AppContainer>
      // <Component />
    // </AppContainer>,
    <Login></Login>,
    document.getElementById('root')
  );
};

 render(null);

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/app/app.component', () => {
//     render(AppComponent)
//   });
// }