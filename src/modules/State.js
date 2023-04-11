import YSDK from './YSDK';

export default class State {
	constructor() {
		this._levelsResult = {};
	}

	async loadPlayerStats() {
		const levelsResult = await YSDK.getPlayerStats();
		if (levelsResult) this._levelsResult = levelsResult;
	}

	getRating() {
		return Object.values(this._levelsResult).reduce((total, item) => total + item, 0);
	}

	async setLevelResult(levelId, result) {
		const prevResult = this._levelsResult[levelId];
		if (!prevResult || prevResult < result) {
			this._levelsResult[levelId] = result;
			//await YSDK.savePlayerStats(this._levelsResult);
		}
	}

	getLevelResult(levelId) {
		return this._levelsResult[levelId];
	}
}