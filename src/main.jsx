import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import { AppComponent } from './components';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppComponent);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app/AppComponent', () => {
    render(AppComponent)
  });
}