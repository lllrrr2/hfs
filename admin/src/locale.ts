import 'dayjs/locale/af'
import 'dayjs/locale/bi'
import 'dayjs/locale/de-ch'
import 'dayjs/locale/en'
import 'dayjs/locale/fr-ch'
import 'dayjs/locale/hy-am'
import 'dayjs/locale/ky'
import 'dayjs/locale/mt'
import 'dayjs/locale/ro'
import 'dayjs/locale/sv'
import 'dayjs/locale/tzm'
import 'dayjs/locale/am'
import 'dayjs/locale/bm'
import 'dayjs/locale/de'
import 'dayjs/locale/eo'
import 'dayjs/locale/fr'
import 'dayjs/locale/id'
import 'dayjs/locale/lb'
import 'dayjs/locale/my'
import 'dayjs/locale/ru'
import 'dayjs/locale/sw'
import 'dayjs/locale/ug-cn'
import 'dayjs/locale/ar-dz'
import 'dayjs/locale/bn-bd'
import 'dayjs/locale/dv'
import 'dayjs/locale/es-do'
import 'dayjs/locale/fy'
import 'dayjs/locale/is'
import 'dayjs/locale/lo'
import 'dayjs/locale/nb'
import 'dayjs/locale/rw'
import 'dayjs/locale/ta'
import 'dayjs/locale/uk'
import 'dayjs/locale/ar-iq'
import 'dayjs/locale/bn'
import 'dayjs/locale/el'
import 'dayjs/locale/es-mx'
import 'dayjs/locale/ga'
import 'dayjs/locale/it-ch'
import 'dayjs/locale/lt'
import 'dayjs/locale/ne'
import 'dayjs/locale/sd'
import 'dayjs/locale/te'
import 'dayjs/locale/ur'
import 'dayjs/locale/ar-kw'
import 'dayjs/locale/bo'
import 'dayjs/locale/en-au'
import 'dayjs/locale/es-pr'
import 'dayjs/locale/gd'
import 'dayjs/locale/it'
import 'dayjs/locale/lv'
import 'dayjs/locale/nl-be'
import 'dayjs/locale/se'
import 'dayjs/locale/tet'
import 'dayjs/locale/uz-latn'
import 'dayjs/locale/ar-ly'
import 'dayjs/locale/br'
import 'dayjs/locale/en-ca'
import 'dayjs/locale/es-us'
import 'dayjs/locale/gl'
import 'dayjs/locale/ja'
import 'dayjs/locale/me'
import 'dayjs/locale/nl'
import 'dayjs/locale/si'
import 'dayjs/locale/tg'
import 'dayjs/locale/uz'
import 'dayjs/locale/ar-ma'
import 'dayjs/locale/bs'
import 'dayjs/locale/en-gb'
import 'dayjs/locale/es'
import 'dayjs/locale/gom-latn'
import 'dayjs/locale/jv'
import 'dayjs/locale/mi'
import 'dayjs/locale/nn'
import 'dayjs/locale/sk'
import 'dayjs/locale/th'
import 'dayjs/locale/vi'
import 'dayjs/locale/ar-sa'
import 'dayjs/locale/ca'
import 'dayjs/locale/en-ie'
import 'dayjs/locale/et'
import 'dayjs/locale/gu'
import 'dayjs/locale/ka'
import 'dayjs/locale/mk'
import 'dayjs/locale/oc-lnc'
import 'dayjs/locale/sl'
import 'dayjs/locale/tk'
import 'dayjs/locale/x-pseudo'
import 'dayjs/locale/ar-tn'
import 'dayjs/locale/cs'
import 'dayjs/locale/en-il'
import 'dayjs/locale/eu'
import 'dayjs/locale/he'
import 'dayjs/locale/kk'
import 'dayjs/locale/ml'
import 'dayjs/locale/pa-in'
import 'dayjs/locale/sq'
import 'dayjs/locale/tl-ph'
import 'dayjs/locale/yo'
import 'dayjs/locale/ar'
import 'dayjs/locale/cv'
import 'dayjs/locale/en-in'
import 'dayjs/locale/fa'
import 'dayjs/locale/hi'
import 'dayjs/locale/km'
import 'dayjs/locale/mn'
import 'dayjs/locale/pl'
import 'dayjs/locale/sr-cyrl'
import 'dayjs/locale/tlh'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/az'
import 'dayjs/locale/cy'
import 'dayjs/locale/en-nz'
import 'dayjs/locale/fi'
import 'dayjs/locale/hr'
import 'dayjs/locale/kn'
import 'dayjs/locale/mr'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/sr'
import 'dayjs/locale/tr'
import 'dayjs/locale/zh-hk'
import 'dayjs/locale/be'
import 'dayjs/locale/da'
import 'dayjs/locale/en-sg'
import 'dayjs/locale/fo'
import 'dayjs/locale/ht'
import 'dayjs/locale/ko'
import 'dayjs/locale/ms-my'
import 'dayjs/locale/pt'
import 'dayjs/locale/ss'
import 'dayjs/locale/tzl'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/bg'
import 'dayjs/locale/de-at'
import 'dayjs/locale/en-tt'
import 'dayjs/locale/fr-ca'
import 'dayjs/locale/hu'
import 'dayjs/locale/ku'
import 'dayjs/locale/ms'
import 'dayjs/locale/rn'
import 'dayjs/locale/sv-fi'
import 'dayjs/locale/tzm-latn'
import 'dayjs/locale/zh'
import { findDefined } from './misc'

const dayjs_locales = ['af', 'ar', 'ar-dz', 'ar-kw', 'ar-ly', 'ar-ma', 'ar-sa', 'ar-tn', 'az', 'be', 'bg', 'bm', 'bn', 
    'bo', 'br', 'bs', 'ca', 'cs', 'cv', 'cy', 'da', 'de', 'de-at', 'de-ch', 'dv', 'el', 'en', 'en-au', 'en-ca', 'en-gb', 
    'en-ie', 'en-il', 'en-nz', 'en-SG', 'eo', 'es', 'es-do', 'es-us', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'fr-ca', 
    'fr-ch', 'fy', 'ga', 'gd', 'gl', 'gom-latn', 'gu', 'he', 'hi', 'hr', 'hu', 'hy-am', 'id', 'is', 'it', 'it-ch', 
    'ja', 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'lb', 'lo', 'lt', 'lv', 'me', 'mi', 'mk', 'ml', 'mn', 'mr', 
    'ms', 'ms-my', 'mt', 'my', 'nb', 'ne', 'nl', 'nl-be', 'nn', 'oc-lnc', 'pa-in', 'pl', 'pt', 'pt-br', 'ro', 'ru', 
    'sd', 'se', 'si', 'sk', 'sl', 'sq', 'sr', 'sr-cyrl', 'ss', 'sv', 'sw', 'ta', 'te', 'tet', 'tg', 'th', 'tl-ph', 
    'tlh', 'tr', 'tzl', 'tzm', 'tzm-latn', 'ug-cn', 'uk', 'ur', 'uz', 'uz-latn', 'vi', 'x-pseudo', 'yo', 'zh-cn', 
    'zh-hk', 'zh-tw']

function lang2locale(lang: string): string | undefined {
    return dayjs_locales.includes(lang) && lang
        || {
            zn: 'zh-cn',
            no: 'nb',
        }[lang]
        || lang.includes('-') && lang2locale(lang.split('-')[0])
        || undefined
}

export function getLocale() {
    return findDefined([navigator.language, ...navigator.languages], lang2locale)
}
