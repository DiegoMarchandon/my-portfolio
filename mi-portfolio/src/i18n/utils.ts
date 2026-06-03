import es from './es';
import en from './en';

const translations = { es, en };

export type Locale = 'es' | 'en';

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
    if (lang === 'en' || lang === 'es') return lang;
    return 'es';
}