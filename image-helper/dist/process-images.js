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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var dotenv_1 = __importDefault(require("dotenv"));
var client_s3_1 = require("@aws-sdk/client-s3");
// Load environment variables
dotenv_1.default.config();
// Space configuration
var SPACE_NAME = "coffee-app";
var SPACE_REGION = "sfo2";
var SPACE_ENDPOINT = "https://".concat(SPACE_REGION, ".digitaloceanspaces.com");
var FOLDER_PREFIX = "photography.chrisfrew.in/";
// Image processing configuration
var MAX_WIDTH = 1750;
// Directory paths
var ORIGINAL_IMAGES_DIR = path_1.default.join(process.cwd(), "original-images");
var PROCESSED_IMAGES_DIR = path_1.default.join(process.cwd(), "../src/images");
var ensureDirectoryExists = function (directory) {
    if (!fs_1.default.existsSync(directory)) {
        fs_1.default.mkdirSync(directory, { recursive: true });
        console.log("Created directory: ".concat(directory));
    }
};
var getSpaceClient = function () {
    return new client_s3_1.S3Client({
        endpoint: SPACE_ENDPOINT,
        region: SPACE_REGION,
        credentials: {
            accessKeyId: process.env.DO_SPACES_KEY || '',
            secretAccessKey: process.env.DO_SPACES_SECRET || ''
        }
    });
};
var downloadImages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var client, totalFiles, skippedFiles, downloadedFiles, failedFiles, paginator, _a, paginator_1, paginator_1_1, page, objects, _i, objects_1, obj, filename, localPath, stats, Body, chunks, _b, _c, _d, chunk, e_1_1, buffer, err_1, e_2_1, err_2;
    var _e, e_2, _f, _g, _h, e_1, _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _l.trys.push([0, 31, , 32]);
                client = getSpaceClient();
                totalFiles = 0;
                skippedFiles = 0;
                downloadedFiles = 0;
                failedFiles = 0;
                paginator = (0, client_s3_1.paginateListObjectsV2)({ client: client }, {
                    Bucket: SPACE_NAME,
                    Prefix: FOLDER_PREFIX
                });
                console.log('\nStarting download process...');
                _l.label = 1;
            case 1:
                _l.trys.push([1, 24, 25, 30]);
                _a = true, paginator_1 = __asyncValues(paginator);
                _l.label = 2;
            case 2: return [4 /*yield*/, paginator_1.next()];
            case 3:
                if (!(paginator_1_1 = _l.sent(), _e = paginator_1_1.done, !_e)) return [3 /*break*/, 23];
                _g = paginator_1_1.value;
                _a = false;
                page = _g;
                objects = page.Contents;
                if (!objects)
                    return [3 /*break*/, 22];
                _i = 0, objects_1 = objects;
                _l.label = 4;
            case 4:
                if (!(_i < objects_1.length)) return [3 /*break*/, 22];
                obj = objects_1[_i];
                if (!obj.Key || obj.Key.endsWith('/'))
                    return [3 /*break*/, 21];
                filename = path_1.default.basename(obj.Key);
                totalFiles++;
                if (!/\.(jpg|jpeg|png|tif|tiff)$/i.test(filename)) {
                    console.log("Skipping non-image file: ".concat(filename));
                    return [3 /*break*/, 21];
                }
                localPath = path_1.default.join(ORIGINAL_IMAGES_DIR, filename);
                if (fs_1.default.existsSync(localPath)) {
                    stats = fs_1.default.statSync(localPath);
                    if (stats.size > 0) {
                        console.log("File already exists and has content: ".concat(filename));
                        skippedFiles++;
                        return [3 /*break*/, 21];
                    }
                    else {
                        console.log("File exists but is empty, re-downloading: ".concat(filename));
                        fs_1.default.unlinkSync(localPath);
                    }
                }
                console.log("Downloading: ".concat(filename));
                _l.label = 5;
            case 5:
                _l.trys.push([5, 20, , 21]);
                return [4 /*yield*/, client.send(new client_s3_1.GetObjectCommand({
                        Bucket: SPACE_NAME,
                        Key: obj.Key
                    }))];
            case 6:
                Body = (_l.sent()).Body;
                if (!Body) return [3 /*break*/, 19];
                chunks = [];
                _l.label = 7;
            case 7:
                _l.trys.push([7, 12, 13, 18]);
                _b = true, _c = (e_1 = void 0, __asyncValues(Body));
                _l.label = 8;
            case 8: return [4 /*yield*/, _c.next()];
            case 9:
                if (!(_d = _l.sent(), _h = _d.done, !_h)) return [3 /*break*/, 11];
                _k = _d.value;
                _b = false;
                chunk = _k;
                chunks.push(chunk);
                _l.label = 10;
            case 10:
                _b = true;
                return [3 /*break*/, 8];
            case 11: return [3 /*break*/, 18];
            case 12:
                e_1_1 = _l.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 18];
            case 13:
                _l.trys.push([13, , 16, 17]);
                if (!(!_b && !_h && (_j = _c.return))) return [3 /*break*/, 15];
                return [4 /*yield*/, _j.call(_c)];
            case 14:
                _l.sent();
                _l.label = 15;
            case 15: return [3 /*break*/, 17];
            case 16:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 17: return [7 /*endfinally*/];
            case 18:
                buffer = Buffer.concat(chunks);
                fs_1.default.writeFileSync(localPath, buffer);
                console.log("Successfully downloaded: ".concat(filename));
                downloadedFiles++;
                _l.label = 19;
            case 19: return [3 /*break*/, 21];
            case 20:
                err_1 = _l.sent();
                console.error("Failed to download ".concat(filename, ":"), err_1);
                failedFiles++;
                return [3 /*break*/, 21];
            case 21:
                _i++;
                return [3 /*break*/, 4];
            case 22:
                _a = true;
                return [3 /*break*/, 2];
            case 23: return [3 /*break*/, 30];
            case 24:
                e_2_1 = _l.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 30];
            case 25:
                _l.trys.push([25, , 28, 29]);
                if (!(!_a && !_e && (_f = paginator_1.return))) return [3 /*break*/, 27];
                return [4 /*yield*/, _f.call(paginator_1)];
            case 26:
                _l.sent();
                _l.label = 27;
            case 27: return [3 /*break*/, 29];
            case 28:
                if (e_2) throw e_2.error;
                return [7 /*endfinally*/];
            case 29: return [7 /*endfinally*/];
            case 30:
                console.log('\nDownload Summary:');
                console.log("Total files processed: ".concat(totalFiles));
                console.log("Files skipped (already exist): ".concat(skippedFiles));
                console.log("Files successfully downloaded: ".concat(downloadedFiles));
                console.log("Files failed to download: ".concat(failedFiles));
                return [3 /*break*/, 32];
            case 31:
                err_2 = _l.sent();
                console.error("Error downloading images:", err_2);
                throw err_2;
            case 32: return [2 /*return*/];
        }
    });
}); };
var processImages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, processedFiles, skippedFiles, failedFiles, _i, files_1, file, base, sourceFilePath, targetImagePath, image, metadata, aspectRatio, height, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.default.promises.readdir(ORIGINAL_IMAGES_DIR)];
            case 1:
                files = _a.sent();
                processedFiles = 0;
                skippedFiles = 0;
                failedFiles = 0;
                console.log('\nStarting image processing...');
                _i = 0, files_1 = files;
                _a.label = 2;
            case 2:
                if (!(_i < files_1.length)) return [3 /*break*/, 8];
                file = files_1[_i];
                if (file === ".DS_Store") {
                    skippedFiles++;
                    return [3 /*break*/, 7];
                }
                base = path_1.default.parse(file).name;
                sourceFilePath = path_1.default.join(ORIGINAL_IMAGES_DIR, file);
                targetImagePath = path_1.default.join(PROCESSED_IMAGES_DIR, "".concat(base, ".jpg"));
                _a.label = 3;
            case 3:
                _a.trys.push([3, 6, , 7]);
                image = (0, sharp_1.default)(sourceFilePath);
                return [4 /*yield*/, image.metadata()];
            case 4:
                metadata = _a.sent();
                if (!metadata.width || !metadata.height) {
                    console.log("Warning: Skipping ".concat(sourceFilePath, " because it has no dimensions"));
                    skippedFiles++;
                    return [3 /*break*/, 7];
                }
                aspectRatio = metadata.width / metadata.height;
                if (aspectRatio === 0) {
                    console.log("Warning: Skipping ".concat(sourceFilePath, " because it has no aspect ratio"));
                    skippedFiles++;
                    return [3 /*break*/, 7];
                }
                height = Math.floor(MAX_WIDTH / aspectRatio);
                return [4 /*yield*/, image
                        .resize(MAX_WIDTH, height)
                        .toFormat('jpeg')
                        .toFile(targetImagePath)];
            case 5:
                _a.sent();
                console.log("Successfully processed: ".concat(file));
                processedFiles++;
                return [3 /*break*/, 7];
            case 6:
                err_3 = _a.sent();
                console.error("Error processing ".concat(file, ":"), err_3);
                failedFiles++;
                return [3 /*break*/, 7];
            case 7:
                _i++;
                return [3 /*break*/, 2];
            case 8:
                console.log('\nProcessing Summary:');
                console.log("Total files processed: ".concat(processedFiles));
                console.log("Files skipped: ".concat(skippedFiles));
                console.log("Files failed: ".concat(failedFiles));
                return [2 /*return*/];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!process.env.DO_SPACES_KEY || !process.env.DO_SPACES_SECRET) {
                    throw new Error("DO_SPACES_KEY and DO_SPACES_SECRET environment variables must be set");
                }
                ensureDirectoryExists(ORIGINAL_IMAGES_DIR);
                ensureDirectoryExists(PROCESSED_IMAGES_DIR);
                console.log("Starting download process from Digital Ocean...");
                return [4 /*yield*/, downloadImages()];
            case 1:
                _a.sent();
                console.log("\nStarting image processing...");
                return [4 /*yield*/, processImages()];
            case 2:
                _a.sent();
                console.log("\nAll operations completed successfully!");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Fatal error:", error_1);
                process.exit(1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
if (require.main === module) {
    main();
}
