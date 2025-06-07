"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageM = PageM;
const react_1 = __importDefault(require("react"));
const ComponentZ_1 = require("./ComponentZ");
function PageM({ name = "PageM" }) {
    return (react_1.default.createElement("div", { className: "page-m" },
        react_1.default.createElement("div", { className: "page-m-name" }, name),
        react_1.default.createElement(ComponentZ_1.ComponentZ, null)));
}
//# sourceMappingURL=PageM.js.map