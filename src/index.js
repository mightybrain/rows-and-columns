import styles from './assets/styles/index.styl';

import Game from './modules/Game';
import YSDK from './modules/YSDK';

addEventListener('DOMContentLoaded', async () => {
	await YSDK.initYSDK();
	await YSDK.initPlayer();

	new Game(document.getElementById('colored-tiles'));
})