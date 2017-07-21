/* React imports */
import App from './App'
import React from'react';
import ReactDOM from 'react-dom';
/* react-intl imports */
import { addLocaleData } from 'react-intl';
/* Import basic support for another locale if needed
   ('en' is included by default) */
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
addLocaleData(en);
addLocaleData(es);

/* Define your translations */


/*
  Enable react-intl in your project, initializing it with your locale
  and translations.

  Wrapping your root React component(s) with <IntlProvider/> will give them
  access to <FormattedMessage/ > (it applies recursively to their children
  as well).
*/
 ReactDOM.render(
        <App/>,
    document.getElementById('root')
  );
