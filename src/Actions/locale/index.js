import C from './constants'

export const ChangeToEsLocale = (locale=null) => ({
    type: C.SetLocaleEs
})

export const ChangeToEnLocale = (locale=null) => ({
    type: C.SetLocaleEn
})