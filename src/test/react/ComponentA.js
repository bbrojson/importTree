"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentA = ComponentA;
const react_1 = __importDefault(require("react"));
const ComponentB_1 = require("./ComponentB");
const ComponentC_1 = require("./ComponentC");
const ComponentD_1 = require("./ComponentD");
function ComponentA({ name = "ComponentA" }) {
    return (react_1.default.createElement("div", { className: "component-a" },
        react_1.default.createElement("div", { className: "component-a-name" }, name),
        react_1.default.createElement("div", { className: "component-a-children" },
            react_1.default.createElement(ComponentB_1.ComponentB, null),
            react_1.default.createElement(ComponentC_1.ComponentC, null),
            react_1.default.createElement(ComponentD_1.ComponentD, null))));
}
//# sourceMappingURL=ComponentA.js.map