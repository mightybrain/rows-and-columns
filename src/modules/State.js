import levels from '../assets/json/levels.json';

export default class State {
	constructor() {
		this._level = 0;
	}

	async loadPlayerStats() {
		const { level } = await YSDK.getPlayerStats();
		if (level) this.setLevel(level);
	}

	increaseLevel() {
		const nextLevel = this._level + 1;
		if (levels.levels[nextLevel]) this.setLevel(nextLevel);
		else this.setLevel(0);
	}

	resetLevel() {
		this.setLevel(0);
	}

	setLevel(level) {
		this._level = level;
	}

	getLevel() {
		return this._level;
	}
}