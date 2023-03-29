export default class Assets {
	constructor() {
		this._assets = {};
		this._loaded = 0;
	}

	load() {
		return new Promise(resolve => {
			if (!Assets.DATA.length) resolve();
			
			Assets.DATA.forEach(source => {
				const type = source.url.split('.').pop();
				if (Assets.IMAGES_TYPES.includes(type)) this._loadImage(source, resolve);
			})
		})
	}

	_increaseLoaded(resolve) {
		this._loaded += 1;
		if (this._loaded === Assets.DATA.length) resolve();
	}

	_loadImage(source, resolve) {
		const image = new Image();

		image.addEventListener('load', () => {
			this._assets[source.url] = image;
			this._increaseLoaded(resolve);
		})

		image.src = source.data;
	}

	get(url) {
		return this._assets[url];
	}

	static IMAGES_TYPES = ['png'];
	static DATA = [];
}