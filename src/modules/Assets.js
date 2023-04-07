export default class Assets {
	constructor() {
		this._assets = {};
		this._loaded = 0;
	}

	load() {
		return new Promise(resolve => {
			if (!Assets.data.length) resolve();
			
			Assets.data.forEach(source => {
				const type = source.fileName.split('.').pop();
				if (Assets.imagesTypes.includes(type)) this._loadImage(source, resolve);
				if (Assets.soundsTypes.includes(type)) this._loadSound(source, resolve);
			})
		})
	}

	_increaseLoaded(resolve) {
		this._loaded += 1;
		if (this._loaded === Assets.data.length) resolve();
	}

	_loadImage(source, resolve) {
		const image = new Image();

		image.addEventListener('load', () => {
			this._assets[source.fileName] = image;
			this._increaseLoaded(resolve);
		})

		image.src = source.file;
	}

	get(fileName) {
		return this._assets[fileName];
	}

	static imagesTypes = ['png'];
	static data = [];
}