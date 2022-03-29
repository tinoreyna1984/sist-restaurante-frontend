import React, {useState} from 'react';
import MensajesIngles from './../lang/en.json';
import MensajesEspañol from './../lang/es.json';
import MensajesPortugues from './../lang/pt.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
	let localePorDefecto;
	let mensajesPorDefecto;
	const lang = localStorage.getItem('lang');

	if(lang){
		localePorDefecto = lang

		if(lang === 'es'){
			mensajesPorDefecto = MensajesEspañol;
		} else if(lang === 'en'){
			mensajesPorDefecto = MensajesIngles
		} else if(lang === 'pt'){ // portugues
			mensajesPorDefecto = MensajesPortugues
		} else {
			localePorDefecto = 'en'
			mensajesPorDefecto = MensajesIngles
		}
	}

	const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
	const [locale, establecerLocale] = useState(localePorDefecto);

	const establecerLenguaje = (lenguaje) => {
		switch (lenguaje){
			case 'es':
				establecerMensajes(MensajesEspañol);
				establecerLocale('es');
				localStorage.setItem('lang', 'es');
				break;
			case 'en':
				establecerMensajes(MensajesIngles);
				establecerLocale('en');
				localStorage.setItem('lang', 'en');
				break;
			case 'pt': // portugues
				establecerMensajes(MensajesPortugues);
				establecerLocale('pt');
				localStorage.setItem('lang', 'pt');
				break;
			default:
				establecerMensajes(MensajesIngles);
				establecerLocale('en');
				localStorage.setItem('lang', 'en');
		}
	}

	return (
		<langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
 
export {LangProvider, langContext};