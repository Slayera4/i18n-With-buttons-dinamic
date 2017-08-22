import spanishMessages from './languages/es'
import englishMessages from './languages/en'
import i18nConfig from './i18nConfig'
export default function toogleLang(){
  if(localStorage["lang"]==="es"){
    i18nConfig.messages=spanishMessages.messages
  }
  else if(localStorage["lang"]==="en"){
    i18nConfig.messages=englishMessages.messages
  }
}