"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentC = ComponentC;
const react_1 = __importDefault(require("react"));
const ComponentZ_1 = require("./ComponentZ");
function ComponentC({ name = "ComponentC" }) {
    return (react_1.default.createElement("div", { className: "component-c" },
        react_1.default.createElement("div", { className: "component-c-name" }, name),
        react_1.default.createElement(ComponentZ_1.ComponentZ, null)));
}
//# sourceMappingURL=ComponentC.js.map