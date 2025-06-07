"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageC = PageC;
const react_1 = __importDefault(require("react"));
const ComponentA_1 = require("./ComponentA");
function PageC({ name = "PageC" }) {
    return (react_1.default.createElement("div", { className: "page-c" },
        react_1.default.createElement("div", { className: "page-c-name" }, name),
        react_1.default.createElement(ComponentA_1.ComponentA, null)));
}
//# sourceMappingURL=PageC.js.map