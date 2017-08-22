/* React imports */
import App from './App'
import React from'react';
import ReactDOM from 'react-dom';
/* react-intl imports */
import { addLocaleData } from 'react-intl';
/* Import basic support for another locale if needed
   ('en' is included by default) */
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import reducers from './reducers'
import { IntlProvider } from 'react-intl';

addLocaleData(en);
addLocaleData(es);

/* Define your translations */
console.log(localStorage["lang"])

if(!localStorage.getItem("lang"))
  localStorage.setItem("lang", navigator.language )
const store = createStore(reducers)

/*
  Enable react-intl in your project, initializing it with your locale
  and translations.

  Wrapping your root React component(s) with <IntlProvider/> will give them
  access to <FormattedMessage/ > (it applies recursively to their children
  as well).
*/ /*let i18nConfig = {
    messages: englishMessages.messages,
    locale: englishMessages.locale
};
 console.log(i18nConfig.messages)*/

/*function toogleLang(){
  if(localStorage["lang"]==="es"){
    i18nConfig.messages=spanishMessages.messages;
    i18nConfig.locale="es"
  }
  else if(localStorage["lang"]==="en"){
    i18nConfig.locale="en"
    i18nConfig.messages=englishMessages.messages
  }
    console.log(localStorage["lang"])
    console.log(i18nConfig.messages)
}*/
  function mapStateToProps(state){
  const { locale, messages } = state.i18n;
  return { locale: locale, messages };  }

const IntlProviderWithStore = connect(mapStateToProps)(IntlProvider)

 ReactDOM.render(
     <Provider store={store}>
      <IntlProviderWithStore>
        <App/>
       </IntlProviderWithStore>    
      </Provider>

,    document.getElementById('root')
  );
