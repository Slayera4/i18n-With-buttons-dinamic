import spanishMessages from './languages/es'
import englishMessages from './languages/en'
const initialState={
    locale: spanishMessages.locale,
    messages: spanishMessages.messages
}
    if(localStorage["lang"]==="en"){
      initialState.locale=englishMessages.locale;
      initialState.messages=englishMessages.messages
    }
    else if (localStorage["lang"]==="es"){
      initialState.locale=spanishMessages.locale;
      initialState.messages=spanishMessages.messages
    }
    else{
        initialState.locale=spanishMessages.locale;
      initialState.messages=spanishMessages.messages
    }
export default function(state=initialState,action={}){
    switch(action.type){
        case "es":
        return{
            locale:"es",
            messages: spanishMessages.messages,
        }
        case "en":
        return{
            locale:"en",
            messages:englishMessages.messages
        }
        default: return state
    }
}