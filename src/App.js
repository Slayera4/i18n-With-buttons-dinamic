import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';
//import {connect} from 'react-redux'
import spanishMessages from './languages/es'
import englishMessages from './languages/en'
import { IntlProvider } from 'react-intl';


 let i18nConfig = {
    locale: spanishMessages.locale,
    messages: spanishMessages.messages
};



class App extends Component {

componentWillMount(){

    switch (localStorage["lang"]) {
              case 'es': i18nConfig.messages = spanishMessages.messages; break;
              case 'en': i18nConfig.messages = englishMessages.messages; break;
              default: i18nConfig.messages = spanishMessages.messages; break;
          }
}
onChangeLanguage(lang){
        switch (lang) {
            case 'es': i18nConfig.messages = spanishMessages.messages; localStorage.setItem("lang", "es" ); break;
            case 'en': i18nConfig.messages = englishMessages.messages; localStorage.setItem("lang", "en" ); break;
            default: i18nConfig.messages = spanishMessages.messages; break;
        }
        this.setState({ locale: lang });
        i18nConfig.locale = lang;
        console.log(localStorage["lang"])
}

  render() {
    return (
    <IntlProvider locale={localStorage["lang"]} messages={i18nConfig.messages}>
      <div className="App">
        <div className="App-header">
          <button onClick={()=>this.onChangeLanguage('es')}><FormattedMessage id="app.buttonEs"/></button>
          <button onClick={()=>this.onChangeLanguage('en')}><FormattedMessage id="app.buttonEn"/></button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2><FormattedMessage id="app.welcome"/></h2>
        </div>
        <p className="App-intro">
          <FormattedMessage id={"app.greeting_message1"} /><code><FormattedMessage id="app.aaa"/></code><FormattedMessage id="app.greeting_message2"/>
        </p>
      </div>
      </IntlProvider>
    );
  }
}

export default (App);
