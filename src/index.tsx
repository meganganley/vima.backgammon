import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Welcome from './Welcome';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Welcome/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
