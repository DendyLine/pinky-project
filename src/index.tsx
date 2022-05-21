import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root')!);


const rerenderTree = (store: TStore) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App store={store} dispatch={store.dispatch.bind(store)} state={store.getState()} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderTree(store);
store.subscribe(rerenderTree);