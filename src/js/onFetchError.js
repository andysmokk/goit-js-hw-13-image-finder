"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { error } from '@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';
const core_1 = require("@pnotify/core");
require("@pnotify/core/dist/PNotify.css");
require("@pnotify/core/dist/BrightTheme.css");
function onFetchError() {
    (0, core_1.error)({
        text: 'Nothing found. Enter a new query!',
        delay: 2000,
    });
}
exports.default = onFetchError;
