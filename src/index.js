import styles from './assets/styles/index.styl';

import Game from './modules/Game';

addEventListener('DOMContentLoaded', () => {
	new Game(document.getElementById('colored-tiles'));
})