export default class YSDK {
  static ysdk = null;
  static player = null;
  
  static async initYSDK() {
    return YaGames
      .init()
      .then(ysdk => {
        YSDK.ysdk = ysdk;
        ysdk.features.LoadingAPI?.ready();
        console.log('Yandex SDK initialized');
      })
      .catch(err => {
        console.log('Ошибка при инициализации YSDK');
      });
  }
  
  static async initPlayer() {
    return YSDK.ysdk
      .getPlayer({ scopes: false })
      .then(player => {
        YSDK.player = player;
        console.log('Player initialized');
        console.log(YSDK.player);
      })
      .catch(err => {
        console.log('Ошибка при инициализации объекта Player');
      });
  }
  
  static async savePlayerStats(data) {
    return YSDK.player
      .setStats(data)
      .then(() => {
        console.log('Player data is saved');
      })
      .catch(err => {
        console.log('Ошибка при сохранении данных игрока');
      });
  }
  
  static async getPlayerStats() {
    return YSDK.player
      .getStats()
      .then(data => {
        console.log('Получены сохраненные данные игрока');
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log('Ошибка при получении данных игрока');
      });
  }
}