import levels from '../assets/json/levels.json';

import Random from './Random';

export default class State {
	constructor({ assets }) {
		this._assets = assets;

		this._level = 1;
		this._gold = 0;
	}

	increaseLevel() {
		const nextLevel = this._level + 1;
		if (levels[nextLevel]) this._level = nextLevel;
		else this._level = 1;
	}

	resetLevel() {
		this._level = 1;
	}

	setRandomLevel() {
		const levelsKeys = Object.keys(levels);

		let level = null;

		do {
			const randomIndex = Random.getRandomFromRange(0, levelsKeys.length - 1);
			level = parseInt(levelsKeys[randomIndex]);
		} while (level === this._level)
		
		this._level = level;
	}

	setLevel(level) {
		this._level = level;
	}

	getLevel() {
		return this._level;
	}
}