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
import { IntlProvider } from 'react-intl';
import {combineReducers} from 'redux';
import spanishMessages from './languages/es'
import englishMessages from './languages/en'
import CL from './Reducers/locale/constants'
import CM from './Reducers/messages/constants'

addLocaleData(en);
addLocaleData(es);

/* Define your translations */



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
*/


    if(!localStorage.getItem("lang"))
  localStorage.setItem("lang", navigator.language )
  function locale(state="es",action={}){
    if(localStorage["lang"]==="en"){
      state=englishMessages.locale;
    }
    else if (localStorage["lang"]==="es"){
      state=spanishMessages.locale;
    }
    else{
      state=spanishMessages.locale;
    }
    
    switch(action.type){
        case CL.SetLocaleEs:
        return spanishMessages.locale
        case CL.SetLocaleEn:
        return englishMessages.locale
        default: return  state
    }

}
export default function messages(state={...englishMessages.messages},action={}){
    if(localStorage["lang"]==="en"){
      state=englishMessages.messages
    }
    else if (localStorage["lang"]==="es"){
      state=spanishMessages.messages
    }
    else{
      state=spanishMessages.messages
    }
    
    switch(action.type){
        case CM.SetMessagesEs:
        return {...spanishMessages.messages}
        case CM.SetMessagesEn:
        return {...englishMessages.messages}
        default: return state
    }


}
const reducers= combineReducers({
    messages,
    locale
})
const store = createStore(reducers)
  function mapStateToProps(state){
  const { locale, messages } = state;
  /*
  store: {
    locale: {
      locale
    }
  }
  */
  console.log(state)
  return { locale, messages }  }

const IntlProviderWithStore = connect(mapStateToProps)(IntlProvider)
    if(!localStorage.getItem("lang"))
  localStorage.setItem("lang", navigator.language )
 ReactDOM.render(
     <Provider store={store}>
      <IntlProviderWithStore>
        <App/>
       </IntlProviderWithStore>    
      </Provider>

,    document.getElementById('root')
  );
