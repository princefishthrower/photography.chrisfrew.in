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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageConfigItems_json_1 = __importDefault(require("./imageConfigItems.json"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var chalk_1 = __importDefault(require("chalk"));
var originalImagesPath = "../original-images";
var processedImagePath = "../../src/images";
var ImageDoctor = /** @class */ (function () {
    function ImageDoctor() {
        this.diagnosis = {
            symptoms: [],
            prescriptions: [],
            severity: "healthy"
        };
    }
    ImageDoctor.prototype.examinePatient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var paths, _a, diagnosis, stats, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(chalk_1.default.cyan("\n🏥 Image Doctor - Starting Examination...\n"));
                        paths = {
                            originalImages: path_1.default.join(__dirname, originalImagesPath),
                            srcImages: path_1.default.join(__dirname, processedImagePath)
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.performDiagnostics(paths)];
                    case 2:
                        _a = _b.sent(), diagnosis = _a.diagnosis, stats = _a.stats;
                        this.provideDiagnosis(diagnosis, stats);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        if (error_1 instanceof Error) {
                            console.error(chalk_1.default.red("\n💉 Critical Error:"), error_1.message);
                        }
                        else {
                            console.error(chalk_1.default.red("\n💉 Critical Error: An unknown error occurred"));
                        }
                        process.exit(1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ImageDoctor.prototype.performDiagnostics = function (paths) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, originalImages, srcImages, originalImageNames, srcImageNames, stats;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            fs_1.default.promises.readdir(paths.originalImages),
                            fs_1.default.promises.readdir(paths.srcImages)
                        ])
                        // Clean and prepare samples
                    ];
                    case 1:
                        _a = _b.sent(), originalImages = _a[0], srcImages = _a[1];
                        originalImageNames = originalImages
                            .filter(function (image) { return !image.startsWith('.'); })
                            .map(function (image) { return path_1.default.parse(image).name; });
                        srcImageNames = srcImages
                            .filter(function (image) { return !image.startsWith('.'); })
                            .map(function (image) { return path_1.default.parse(image).name; });
                        stats = {
                            originalCount: originalImageNames.length,
                            srcCount: srcImageNames.length,
                            configCount: imageConfigItems_json_1.default.length
                        };
                        // Examine for symptoms
                        this.checkForMissingImages(originalImageNames, srcImageNames);
                        this.checkExcessSourceImages(originalImageNames, srcImageNames);
                        this.checkImageCounts(stats);
                        this.checkConfigIntegrity(originalImageNames);
                        return [2 /*return*/, { diagnosis: this.diagnosis, stats: stats }];
                }
            });
        });
    };
    ImageDoctor.prototype.checkForMissingImages = function (originalNames, srcNames) {
        var missingImages = originalNames.filter(function (name) { return !srcNames.includes(name); });
        if (missingImages.length > 0) {
            this.diagnosis.severity = "critical";
            this.diagnosis.symptoms.push({
                condition: "Missing Images Detected",
                details: missingImages
            });
            this.diagnosis.prescriptions.push("Rerun 'npm run process-images' which should add the following missing image(s) to the src/images directory: " +
                missingImages.join(", "));
        }
    };
    ImageDoctor.prototype.checkExcessSourceImages = function (originalNames, srcNames) {
        var excessImages = srcNames.filter(function (name) { return !originalNames.includes(name); });
        if (excessImages.length > 0) {
            this.diagnosis.severity = "serious";
            this.diagnosis.symptoms.push({
                condition: "Excess Source Images Detected",
                details: __spreadArray([
                    "Found ".concat(excessImages.length, " images in src/images that don't exist in original-images. They are likely old generations or duplicates with a similar name:")
                ], excessImages.map(function (name) { return "- ".concat(name); }), true).join('\n')
            });
            this.diagnosis.prescriptions.push("Remove the following images from src/images as they have no original source: " +
                excessImages.join(", "));
        }
    };
    ImageDoctor.prototype.checkImageCounts = function (stats) {
        if (stats.configCount !== stats.originalCount) {
            this.diagnosis.severity = "serious";
            var configNames = imageConfigItems_json_1.default.map(function (item) {
                return path_1.default.parse(item.path.replace("../images/", "")).name;
            });
            // Get the actual original image names with their extensions
            var originalImageFiles_1 = fs_1.default.readdirSync(path_1.default.join(__dirname, originalImagesPath))
                .filter(function (file) { return !file.startsWith('.'); })
                .map(function (file) { return path_1.default.parse(file).name.toLowerCase(); });
            var configOnlyImages = configNames.filter(function (name) {
                return !originalImageFiles_1.includes(name.toLowerCase());
            });
            var details = __spreadArray([
                "Config items (".concat(stats.configCount, ") \u2260 Original images (").concat(stats.originalCount, ")"),
                configOnlyImages.length > 0 ? "\nThe following images are configured but missing from original-images:" : ""
            ], configOnlyImages.map(function (name) { return "- ".concat(name); }), true).filter(Boolean).join('\n');
            this.diagnosis.symptoms.push({
                condition: "Configuration Mismatch",
                details: details
            });
            if (configOnlyImages.length > 0) {
                this.diagnosis.prescriptions.push("Add the following missing images to the original-images directory: " +
                    configOnlyImages.join(", "));
            }
            else {
                this.diagnosis.prescriptions.push("Remove excess entries from imageConfigItems.json to match the original images");
            }
        }
    };
    ImageDoctor.prototype.checkConfigIntegrity = function (originalNames) {
        var configNames = imageConfigItems_json_1.default.map(function (item) {
            return path_1.default.parse(item.path.replace("../images/", "")).name;
        });
        var unconfiguredImages = originalNames.filter(function (name) { return !configNames.includes(name); });
        if (unconfiguredImages.length > 0) {
            this.diagnosis.severity = "serious";
            this.diagnosis.symptoms.push({
                condition: "Unconfigured Images",
                details: unconfiguredImages
            });
            this.diagnosis.prescriptions.push("Add configuration entries for: " + unconfiguredImages.join(", "));
        }
    };
    ImageDoctor.prototype.provideDiagnosis = function (diagnosis, stats) {
        console.log(chalk_1.default.cyan("📊 Vital Signs:"));
        console.log("Original Images: ".concat(stats.originalCount));
        console.log("Source Images: ".concat(stats.srcCount));
        console.log("Config Entries: ".concat(stats.configCount, "\n"));
        if (diagnosis.symptoms.length > 0) {
            console.log(chalk_1.default.yellow("🔍 Symptoms Detected:"));
            diagnosis.symptoms.forEach(function (symptom) {
                console.log("\n".concat(chalk_1.default.yellow(symptom.condition), ":"));
                console.log(symptom.details);
            });
            console.log(chalk_1.default.green("\n💊 Prescribed Treatment:"));
            diagnosis.prescriptions.forEach(function (prescription) {
                console.log("- ".concat(prescription));
            });
        }
        else {
            console.log(chalk_1.default.green("\n✨ Clean Bill of Health!"));
            console.log("All image assets are properly configured and ready for production.");
        }
    };
    return ImageDoctor;
}());
// Begin examination
new ImageDoctor().examinePatient();
