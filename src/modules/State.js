import YSDK from './YSDK';

export default class State {
	constructor({ levels }) {
		this._levels = levels;

		this._levelsScores = {

		};
		this._levelsMoves = {

		};
	}

	async resetPlayerStats() {
		this._levelsMoves = {};
		this._levelsScores = {};
		//await YSDK.savePlayerStats(this._levelsMoves);
	}

	async loadPlayerStats() {
		const levelsMoves = await YSDK.getPlayerStats();
		if (levelsMoves) {
			this._levelsMoves = levelsMoves;

			for (let id in levelsMoves) {
				this._levelsScores[id] = this._levels.getLevelScore(levelsMoves[id], id);
			}
		}
	}

	getRating() {
		return Object.values(this._levelsScores).reduce((total, item) => total + item, 0);
	}

	async setLevelResult(levelId, moves, score) {
		const prevMoves = this._levelsMoves[levelId];
		if (!prevMoves || prevMoves > moves) {
			this._levelsScores[levelId] = score;
			this._levelsMoves[levelId] = moves;
			//await YSDK.savePlayerStats(this._levelsMoves);
		}
	}

	getLevelPrevScore(levelId) {
		return this._levelsScores[levelId];
	}

	getLevelPrevMoves(levelsId) {
		return this._levelsMoves[levelsId];
	}
}