import spanishMessages from '../../languages/es'
import englishMessages from '../../languages/en'
import C from './constants'
let i18n = { messages : undefined}

    if(localStorage["lang"]==="en"){
     i18n.messages = englishMessages.messages
    }
    else if (localStorage["lang"]==="es"){
      i18n.messages = spanishMessages.messages
    }
    else{
      i18n.messages=spanishMessages.messages
    }


export default function(state=i18n,action={}){
    switch(action.type){
        case C.SetMessagesEs:
        return{
            messages: spanishMessages.messages,
        }
        case C.SetMessagesEn:
        return{
            messages: englishMessages.messages
        }
        default: return state
    }

}