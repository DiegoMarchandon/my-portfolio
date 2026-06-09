import es from './es';
import en from './en';
import pt from './pt';


const translations = { es, en, pt };

export type Locale = 'es' | 'en' | 'pt';

export function t(locale: Locale, key: string): any {
    const keys = key.split('.');
    let result: any = translations[locale];
    for (const k of keys) {
        result = result?.[k];
    }
    return result ?? key;
}
 
export function getLocaleFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');
    if (lang === 'en' || lang === 'es' || lang === 'pt') return lang;
    return 'es';
}