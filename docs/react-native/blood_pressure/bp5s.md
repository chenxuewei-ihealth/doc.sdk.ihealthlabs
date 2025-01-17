---
title: BP5S
sidebar_position: 3
---

## Device Version

### 1. HardVersion 1.0.0

### 2. HardVersion 2.0.0
This version and above HardVersion support the offline data time correction function: when obtaining offline data, the "isRightTime" field is added. This field marks whether the historical data needs time correction (0: no need; 1: need correction). The device time and device system time can be obtained through the "getFunction" interface. Using the time difference between these two times and adding it to the time of the data that needs correction gives the correct time.

## API Reference

### Import BP5S Module

```js
import {
  BP5SModule,
  BPProfileModule
} from '@ihealth/ihealthlibrary-react-native';
```

### Add and remove listener

```js
// add
notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    console.log(event);
});

// remove
notifyListener.remove();
```

### start a measurement

The API is asyn function. It will return message until finish measurement.

```js
BP5SModule.startMeasure(mac);

notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {
        console.log("zero adjustment");

    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {
        console.log("zero adjustment is done");

    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {
        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);

    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {
        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);
        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);
        console.log(event[BPProfileModule.PULSEWAVE_BP]);

    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {
        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);
        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);
        console.log(event[BPProfileModule.PULSE_BP]);
        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);
        console.log(event[BPProfileModule.DATAID]);

    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {
        console.log(event[BPProfileModule.ERROR_NUM_BP]);
        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);
    }
});
```

### cancel current measurement

```js
BP5SModule.stopMeasure(mac);
```

### get battery

```js
BP5SModule.getBattery(mac);

notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {
        console.log(event[BPProfileModule.BATTERY_BP]);
    }
});
```

### enable offline mode

```js
BP5SModule.enbleOffline(mac);
```

### disable offline mode

```js
BP5SModule.disableOffline(mac);
```

### is enable offline mode

```js
BP5SModule.isEnableOffline(mac);

notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_SET_MODE) {
        console.log(event[BPProfileModule.ACTION_SET_MODE]);
    }
});
```

### get quantity of data stored in the bp5 device

```js
BP5SModule.getOfflineNum(mac);

notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {
        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);
    }
});
```

### get data stored in the bp5 device

```js
BP5SModule.getOfflineData(mac);

notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {
        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];
        if (dataArray == undefined) {
            result = "There is not offline data in device"
        }else {
            for (let i = 0; i < dataArray.length; i++) {
                let offlineData = dataArray[i];

                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);
                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);
                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);
                console.log(offlineData[BPProfileModule.PULSE_BP]);
                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);
                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);
                console.log(offlineData[BPProfileModule.DATAID]);
            }
        }
    }
});
```

### disconnect device

```js
BP5SModule.disConnect(mac);
```

### get all connected devices

```js
BP5SModule.getAllConnectedDevices();
```
```js
BP5SModule.deleteData();

// Return value
const notifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {
    if (e.action === BPProfileModule.ACTION_DELETE_ALL_MEMORY_SUCCESS) {
        console.log("Finish data transfer");
    }
});
```