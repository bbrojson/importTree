"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = Root;
const react_1 = __importDefault(require("react"));
const PageC_1 = require("./PageC");
const PageM_1 = require("./PageM");
function Root({ name = "Root" }) {
    return (react_1.default.createElement("div", { className: "root-component" },
        react_1.default.createElement("div", { className: "root-name" }, name),
        react_1.default.createElement("div", { className: "root-children" },
            react_1.default.createElement(PageC_1.PageC, null),
            react_1.default.createElement(PageM_1.PageM, null))));
}
//# sourceMappingURL=Root.js.map