import spanishMessages from '../../languages/es'
import englishMessages from '../../languages/en'
import C from './constants'
let i18n = {locale: spanishMessages.locale}

    if(localStorage["lang"]==="en"){
      i18n.locale=englishMessages.locale;
    }
    else if (localStorage["lang"]==="es"){
      i18n.locale=spanishMessages.locale;
    }
    else{
      i18n.locale=spanishMessages.locale;
    }
    if(!localStorage.getItem("lang"))
  localStorage.setItem("lang", navigator.language )
export default function(state=i18n,action={}){
    switch(action.type){
        case C.SetLocaleEs:
        return{
            locale: spanishMessages.locale,
        }
        case C.SetLocaleEn:
        return{
            locale:spanishMessages.locale,
        }
        default: return state
    }
}