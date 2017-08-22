import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';

//import {connect} from 'react-redux'


/* let i18nConfig = {
    locale: spanishMessages.locale,
    messages: spanishMessages.messages
};*/



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
       /* switch (lang) {
            case 'es': i18nConfig.messages = spanishMessages.messages; localStorage.setItem("lang", "es" ); break;
            case 'en': i18nConfig.messages = englishMessages.messages; localStorage.setItem("lang", "en" ); break;
            default: i18nConfig.messages = spanishMessages.messages; break;
        }
        this.setState({  });
        i18nConfig.locale = lang;*/
        if(lang==="es"){
          this.props.dispatch({type:"es"})
          localStorage.setItem("lang", "es" );
        }
        else if(lang==="en"){
          this.props.dispatch({type:"en"})
          localStorage.setItem("lang", "en" );
        }
        console.log(this.props.i18n.messages)
        console.log(this.props.i18n.locale)
        console.log(localStorage["lang"])        
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

export default connect(({i18n})=>({i18n}))(App);
