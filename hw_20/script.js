// Реализуйте класс PublicService для подсчета коммунальных платежей.

// В классе должны быть реализованы такие методы:
// -- addMeterReadings для добавления показаний счетчиков, принимает 2 аргумента: название показателя и объем потребеления
// -- deleteMeterReadings для удаления показаний счетчиков, принимает 1 аргумент: название показателя
// -- getSum для подсчета суммы платежей исходя из показаний поданых счетчиков и текущих тарифов.

// Тарифы можете придумать свои, или взять из примера.
// Метод addMeterReadings должен быть защищен от передачи некорректных значений. Если при его вызове, было передано название показателя, которое не перечислено в тарифах, то метод должен выбросить ошибку с текстом: Service --название сервиса-- is unavailble. Так же, если показания подаются повторно (метод вызван второй раз с таким же названием показателя), то должна быть выброшена ошибка с текстом: Service --название сервиса-- is already included
// Метод getSum возвращает результат подсчета суммы.
// Все методы должны быть записаны в prototype.

function PublicService () {
  this.meters = {};
  this.tariffs = {
    hotWater: 7,
    coldWater: 1,
    gas: 0.3,
    electricity: 1.6,
  };
}

PublicService.prototype.addMeterReadings = function (meterData, meterName) {
    const keys = Object.keys(this.tariffs);
    if(!keys.includes(meterName)) {
        throw new Error(`Service ${meterName} is unavailble.`);
    } else if (Object.keys(this.meters).includes(meterName)) {
        throw new Error(`Service ${meterName} is already included`);
    } else {
        this.meters[meterName] = meterData;
    }
};

PublicService.prototype.deleteMeterReadings = function (meterName) {
  delete this.meters[meterName];
};

PublicService.prototype.getSum = function () {
    let result = 0;
    for(let key in this.meters) {
        let value = this.meters[key];
        let tariff = this.tariffs[key];
        result += value * tariff;
    }
    return result;
};

const service = new PublicService ();

service.addMeterReadings (100, 'hotWater');
service.addMeterReadings (200, 'coldWater');
service.deleteMeterReadings ('coldWater');
service.addMeterReadings (300, 'electricity');

const res = service.getSum ();
console.log (service)
console.log (res);
