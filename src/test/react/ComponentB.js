"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentB = ComponentB;
const react_1 = __importDefault(require("react"));
function ComponentB({ name = "ComponentB" }) {
    return react_1.default.createElement("div", { className: "component-b" }, name);
}
//# sourceMappingURL=ComponentB.js.map