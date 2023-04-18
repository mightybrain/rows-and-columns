export default class Assets {
	constructor() {
		this._assets = {
			
		};
		this._loaded = 0;
	}

	load() {
		return new Promise(resolve => {
			if (!Assets.data.length) resolve();
			
			Assets.data.forEach(source => {
				const type = source.fileName.split('.').pop();
				if (Assets.imagesTypes.includes(type)) this._loadImage(source, resolve);
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
	static data = [
		{
			fileName: 'star-yellow.png',
			file: require('../assets/images/star-yellow.png'),
		},
		{
			fileName: 'star-blue.png',
			file: require('../assets/images/star-blue.png'),
		},
		{
			fileName: 'star-green.png',
			file: require('../assets/images/star-green.png'),
		},
	];
}