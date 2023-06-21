"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3_MODULE_OPTIONS_TOKEN = exports.S3_MODULE_CONNECTION = exports.S3_CONNECTION_TOKEN = exports.getS3OptionToken = exports.getS3ConnectionToken = exports.AitS3Module = exports.S3Service = void 0;
var s3_service_1 = require("./services/s3.service");
Object.defineProperty(exports, "S3Service", { enumerable: true, get: function () { return s3_service_1.S3Service; } });
var s3_module_1 = require("./ioc/s3.module");
Object.defineProperty(exports, "AitS3Module", { enumerable: true, get: function () { return s3_module_1.AitS3Module; } });
var tokenizer_1 = require("./utils/tokenizer");
Object.defineProperty(exports, "getS3ConnectionToken", { enumerable: true, get: function () { return tokenizer_1.getS3ConnectionToken; } });
Object.defineProperty(exports, "getS3OptionToken", { enumerable: true, get: function () { return tokenizer_1.getS3OptionToken; } });
var s3_constant_1 = require("./constants/s3.constant");
Object.defineProperty(exports, "S3_CONNECTION_TOKEN", { enumerable: true, get: function () { return s3_constant_1.S3_CONNECTION_TOKEN; } });
Object.defineProperty(exports, "S3_MODULE_CONNECTION", { enumerable: true, get: function () { return s3_constant_1.S3_MODULE_CONNECTION; } });
Object.defineProperty(exports, "S3_MODULE_OPTIONS_TOKEN", { enumerable: true, get: function () { return s3_constant_1.S3_MODULE_OPTIONS_TOKEN; } });