/**
 * Este es el template del SDK introducido en javascript-sdk-design.
 *
 * Template Init
 * ==============
 * Este es un template que ofrece un objeto orientado a objetos (OOP).
 *
 * Para más información sobre templates de SDK, visita la página de javascript-sdk-design:
 * https://github.com/hueitan/javascript-sdk-design/tree/master/Template
 */

// Importación de estilos CSS.
import './style.css';

(function (window) {
    // Variables para almacenar elementos del DOM y configuración del cliente.
	var customer, lmBubble, lmBubbleCta, lmBubbleChatWrapper, lmBubbleIframe;
    
    /**
     * Constructor del SDK.
     * @param {Object} config - Configuración del cliente para inicializar el SDK.
     */
	var SDK = function (config) {
		customer = config;
		cookie.write('customer_saas', customer);
		console.log('Instanciando?', customer);
		SDK.prototype.builderBubble();
		SDK.prototype.loadListeners();
		return;
	};

    /**
     * Función para construir la burbuja de chat en la interfaz de usuario.
     * Esta función verifica si ya existe una burbuja de chat y, de no ser así, la crea y añade al DOM.
     */
	SDK.prototype.builderBubble = function () {
		const checkExisteBubble = document.getElementById('lm-chat-open');
		if (!checkExisteBubble) {
			const htmlRaw = [
				// '<div class="lm animate__animated animate__fadeIn" id="lm-chat-open">',
				// ' <div class="lm-chat lm-chat-close animate__animated animate__bounceInUp" id="lm-chat-wrapper">',
				'   <iframe src="" id="my-iframe" frameborder="0" style="width:500px; height:700px; position: absolute; bottom: 0; right: 0;"></iframe>',
				// ' </div>',
				// ' <div class="lm-cta-open" id="lm-cta-bubble"></div>',
				// ' <div class="lm-hi"><span>Hola! aqui estoy</span></div>',
				// '</div>',
			].join('');
			const htmlDivElement = document.createElement('div');
			htmlDivElement.innerHTML = htmlRaw;
			document.body.appendChild(htmlDivElement);
			return;
		}
		console.log('Construir burbuja');
	};

    /**
     * Función para cargar los listeners (escuchadores de eventos) necesarios para el funcionamiento del chat.
     * Se encarga de inicializar los elementos del DOM y asignar el manejador de eventos al botón de la burbuja.
     */
	SDK.prototype.loadListeners = function () {
		// lmBubble = document.querySelector('#lm-chat-open');
		// lmBubbleCta = document.querySelector('#lm-cta-bubble');
		// lmBubbleChatWrapper = document.querySelector('#lm-chat-wrapper');
		lmBubbleIframe = document.querySelector('#my-iframe');
        lmBubbleIframe.src = 'http://localhost:3000'; // Esta linea la agregue yo

		// lmBubbleCta.addEventListener('click', checkIframeStatus);
	};

    /**
     * Función para verificar el estado del iframe.
     * Cambia la clase del contenedor del chat y gestiona la carga del iframe según su estado actual.
     */
	function checkIframeStatus() {
		const iframeState = lmBubbleChatWrapper.classList.contains('lm-chat-open');

		if (lmBubbleIframe.getAttribute('litener') !== 'true') {
			lmBubbleIframe.addEventListener('load', () => {
				lmBubbleIframe.setAttribute('litener', 'true');
				passEvents('connect_tenant', customer);
			});
		}
        
		// Alternar la visualización del iframe y la burbuja de chat.
		if (!iframeState) {
			lmBubbleChatWrapper.classList.remove('lm-chat-close');
			lmBubbleChatWrapper.classList.add('lm-chat-open');
			lmBubble.classList.add('open');            
			lmBubbleIframe.src = `${process.env.WIDGET}`;
			return;
		}

		if (iframeState) {
			lmBubbleChatWrapper.classList.remove('lm-chat-open');
			lmBubbleChatWrapper.classList.add('lm-chat-close');
			lmBubbleIframe.src = undefined;
			lmBubble.classList.remove('open');
			return;
		}
	}

        /**
     * Envía eventos al iframe.
     * Esta función se utiliza para comunicar información del SDK al iframe mediante postMessage.
     * @param {string} key - Clave del evento a enviar.
     * @param {any} value - Valor asociado al evento.
     */
	function passEvents(key, value) {
		var obj = {
			setItem: key,
			value: value,
		};
		lmBubbleIframe.contentWindow.postMessage(JSON.stringify(obj), '*');
	}

    /**
     * Objeto para manejar las cookies.
     * Proporciona funciones para escribir, leer y eliminar cookies.
     */
	var cookie = {
		/**
		 * Escribe una cookie.
		 * @param {string} name - Nombre de la cookie.
		 * @param {string} value - Valor de la cookie.
		 * @param {number} [days=730] - Duración de la cookie en días (por defecto 730 días).
		 * @param {string} [domain] - Dominio para la cookie.
		 * @param {string} [path='/'] - Path para la cookie.
		 */
		write: function (name, value, days, domain, path) {
			var date = new Date();
			days = days || 730; // Dos años por defecto
			path = path || '/';
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			var expires = '; expires=' + date.toGMTString();
			var cookieValue = name + '=' + value + expires + '; path=' + path;
			if (domain) {
				cookieValue += '; domain=' + domain;
			}
			document.cookie = cookieValue;
		},
		/**
		 * Lee una cookie por su nombre.
		 * @param {string} name - Nombre de la cookie a leer.
		 * @returns {string} Valor de la cookie, o cadena vacía si no se encuentra.
		 */
		read: function (name) {
			var allCookie = '' + document.cookie;
			var index = allCookie.indexOf(name);
			if (name === undefined || name === '' || index === -1) return '';
			var ind1 = allCookie.indexOf(';', index);
			if (ind1 == -1) ind1 = allCookie.length;
			return unescape(allCookie.substring(index + name.length + 1, ind1));
		},
		/**
		 * Elimina una cookie por su nombre.
		 * @param {string} name - Nombre de la cookie a eliminar.
		 */
		remove: function (name) {
			if (this.read(name)) {
				this.write(name, '', -1, '/');
			}
		},
	};

    // Obtención de la configuración desde el objeto global de window o una variable de entorno.
	const config = window.SDK
		? window.SDK.config
		: `${process.env.CUSTOMER}`;
    
    // Instanciación del SDK con la configuración obtenida.
	new SDK(config);
})(window, undefined);

