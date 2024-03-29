"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var MAX_WIDTH = 1750;
var processImages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var originalImagesPath, targetImagesPath, files, _i, files_1, file, base, sourceFilePath, targetImagePath, image, metadata, aspectRatio, height, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                originalImagesPath = path_1.default.join(__dirname, '../../original-images');
                targetImagesPath = path_1.default.join(__dirname, '../../src/images');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, fs_1.default.promises.readdir(originalImagesPath)];
            case 2:
                files = _a.sent();
                _i = 0, files_1 = files;
                _a.label = 3;
            case 3:
                if (!(_i < files_1.length)) return [3 /*break*/, 7];
                file = files_1[_i];
                if (file === '.DS_Store') {
                    return [3 /*break*/, 6];
                }
                base = path_1.default.parse(file).name;
                sourceFilePath = path_1.default.join(originalImagesPath, file);
                targetImagePath = path_1.default.join(targetImagesPath, "".concat(base, ".jpg"));
                image = (0, sharp_1.default)(sourceFilePath);
                return [4 /*yield*/, image.metadata()];
            case 4:
                metadata = _a.sent();
                aspectRatio = metadata.width / metadata.height;
                if (aspectRatio === 0) {
                    console.log("\n\nWARNING! Skipping ".concat(sourceFilePath, " because it has no aspect ratio\n\n"));
                    return [3 /*break*/, 6];
                }
                height = Math.floor(MAX_WIDTH / aspectRatio);
                return [4 /*yield*/, image
                        .resize(MAX_WIDTH, height)
                        .toFile(targetImagePath)];
            case 5:
                _a.sent();
                console.log("Successfully converted ".concat(sourceFilePath, " to ").concat(targetImagePath));
                _a.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 3];
            case 7:
                console.log('Done!');
                return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                console.error('Error processing images:', error_1);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
processImages();
