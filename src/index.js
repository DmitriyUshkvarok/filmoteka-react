import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import store from './redux/store';
import './index.css';
import { LanguageProvider } from 'components/context/languageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/filmoteka-react">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
