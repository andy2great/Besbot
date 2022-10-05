/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/config.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfigs = void 0;
exports.AppConfigs = {
    brain: {
        name: process.env.host_brain || 'localhost',
        port: process.env.host_brain ? 80 : 8080
    },
    ears: {
        name: process.env.host_ears || 'localhost',
        port: process.env.host_ears ? 80 : 8082
    },
    mouth: {
        name: process.env.host_mouth || 'localhost',
        port: process.env.host_mouth ? 80 : 8081
    },
    version: {
        name: process.env.host_version || 'localhost',
        port: process.env.host_version ? 80 : 80
    },
    bridge: {
        name: process.env.host_bridge || 'localhost',
        port: process.env.host_bridge ? 80 : 8083
    }
};


/***/ }),

/***/ "./libs/helpers/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/helpers/src/lib/host-communication.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/helpers/src/lib/mqtt-client.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./libs/helpers/src/lib/tcp-client.ts"), exports);


/***/ }),

/***/ "./libs/helpers/src/lib/host-communication.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.speak = void 0;
const fs = __webpack_require__("node:fs");
const speak = (message) => {
    if (fs.existsSync('/hostpipe/pipe')) {
        console.log('test');
        const wstream = fs.createWriteStream('/hostpipe/pipe');
        wstream.write(`echo "${message}" | festival --tts`);
        wstream.close();
    }
    else {
        console.log('file does not exist');
    }
};
exports.speak = speak;


/***/ }),

/***/ "./libs/helpers/src/lib/mqtt-client.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MQTTClient = void 0;
const mqtt = __webpack_require__("mqtt");
class MQTTClient {
    constructor() {
        this.connect = (url, username, password) => {
            this.mqttClient = mqtt.connect(url, {
                username,
                password,
            });
            this.mqttClient.on('connect', () => {
                console.log('connected');
            });
        };
        this.notify = (topic, message) => {
            if (!this.mqttClient)
                return;
            this.mqttClient.subscribe(topic);
            this.mqttClient.publish(topic, message);
        };
        this.listen = (listenTopic, callback) => {
            if (!this.mqttClient)
                return;
            this.mqttClient.subscribe(listenTopic);
            this.mqttClient.on('message', (topic, message) => {
                if (listenTopic !== topic)
                    return;
                callback(message.toString());
            });
        };
    }
}
exports.MQTTClient = MQTTClient;
_a = MQTTClient;
MQTTClient.getInstance = () => {
    if (_a._instance) {
        return _a._instance;
    }
    _a._instance = new MQTTClient();
    return _a._instance;
};


/***/ }),

/***/ "./libs/helpers/src/lib/tcp-client.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TCPClient = void 0;
const net = __webpack_require__("node:net");
class TCPClient {
    constructor() {
        this.listeners = [];
        this.connect = (port) => {
            this.server = net.createServer(this.onClientConnection);
            this.server.listen(port, () => {
                console.log(`Server started on port ${port}`);
            });
            return TCPClient;
        };
        this.listen = (listener) => {
            this.listeners.push(listener);
        };
        this.send = (port, address, info) => {
            const client = new net.Socket();
            client.connect(port, address, () => {
                client.write(JSON.stringify(info));
                client.end();
            });
        };
        this.onClientConnection = (sock) => {
            sock.on('data', data => {
                const json = JSON.parse(data.toString());
                const destinations = this.listeners.filter(listener => listener.destination === json.destination);
                for (const destination of destinations)
                    destination.callback(json.message);
            });
            const serverResp = 'ok';
            sock.write(serverResp);
            sock.end();
        };
    }
}
exports.TCPClient = TCPClient;
_a = TCPClient;
TCPClient.getInstance = () => {
    if (_a._instance) {
        return _a._instance;
    }
    _a._instance = new TCPClient();
    return _a._instance;
};


/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mqtt":
/***/ ((module) => {

module.exports = require("mqtt");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "node:fs":
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:net":
/***/ ((module) => {

module.exports = require("node:net");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__("./libs/helpers/src/index.ts");
const express = __webpack_require__("express");
const config_1 = __webpack_require__("./apps/config.ts");
helpers_1.MQTTClient.getInstance().connect('mqtt://localhost:1883');
const app = express();
app.use(express.json());
app.listen(config_1.AppConfigs.brain.port, () => {
    console.log(`Listening at http://localhost:${config_1.AppConfigs.brain.port}/`);
});
helpers_1.MQTTClient.getInstance().listen('beslogic/mouth/say', message => {
    helpers_1.TCPClient.getInstance().send(config_1.AppConfigs.mouth.port, config_1.AppConfigs.mouth.name, {
        destination: 'say',
        message,
    });
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map