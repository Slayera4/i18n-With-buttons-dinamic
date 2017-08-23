import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';
import {ChangeToEsLocale, ChangeToEnLocale} from './Actions/locale'
import {ChangeToEsMessages, ChangeToEnMessages} from './Actions/messages'


//import {connect} from 'react-redux'


/* let i18nConfig = {
    locale: spanishMessages.locale,
    messages: spanishMessages.messages
};*/



  function mapDispatchToProps(dispatch, ownProps) {
        /*
    return {ChangeMessages(lang){
      if (lang==="en"){
                console.log("Español")

        dispatch(ChangeToEnMessages())
                          }
          else if(lang==="es"){
          dispatch(ChangeToEsMessages())
                                }
    },
        ChangeLocale(lang){
                if (lang==="en"){
        dispatch(ChangeToEnLocale())
                          }
          else if(lang==="es"){
          dispatch(ChangeToEsLocale())
                                }
        }                          
  }*/
  return {
    changeLanguage(lang) {
        localStorage.setItem("lang", lang)
      if (lang === "en") {
        dispatch(ChangeToEnMessages());
        dispatch(ChangeToEnLocale());
      } else {
        dispatch(ChangeToEsLocale());
        dispatch(ChangeToEsMessages());
      }
    }
  }
    
    
  }
          
class App extends Component {

componentWillMount(){
/*
    switch (localStorage["lang"]) {
              case 'es': this.props.dispatch({type:"es"}); break;
              case 'en': this.props.dispatch({type:"en"});break;
              default: this.props.dispatch({type:"en"}); break;
          }*/

}
onChangeLanguage(lang){
          this.props.changeLanguage(lang);  

       /* switch (lang) {
            case 'es': i18nConfig.messages = spanishMessages.messages; localStorage.setItem("lang", "es" ); break;
            case 'en': i18nConfig.messages = englishMessages.messages; localStorage.setItem("lang", "en" ); break;
            default: i18nConfig.messages = spanishMessages.messages; break;
        }
        this.setState({  });
        i18nConfig.locale = lang;*/
}
    /*  onChange(lang){
        this.onChangeLanguage(lang)
        this.props.app()
      }*/

  render() {
    return (
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
    );
  }
}

export default connect(null, mapDispatchToProps)(App);