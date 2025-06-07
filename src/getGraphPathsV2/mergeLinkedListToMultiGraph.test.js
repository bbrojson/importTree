"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mergeLinkedListToMultiGraph_1 = require("./mergeLinkedListToMultiGraph");
const assert = __importStar(require("assert"));
// Mock ts-morph classes
class MockSourceFile {
    path;
    constructor(path) {
        this.path = path;
    }
    getFilePath() {
        return this.path;
    }
    getBaseName() {
        return this.path.split("/").pop() || "";
    }
}
class MockVariableDeclaration {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
suite("mergeLinkedListToMultiGraph", () => {
    // Helper function to create a TreeNodeType
    const createNode = (path, variableName) => {
        const file = new MockSourceFile(path);
        const variable = variableName
            ? new MockVariableDeclaration(variableName)
            : null;
        return { file, variable };
    };
    test("should create a graph with single linked list", () => {
        const linkedLists = [
            [
                createNode("/src/file1.ts", "var1"),
                createNode("/src/file2.ts", "var2"),
                createNode("/src/file3.ts", "var3"),
            ],
        ];
        const graph = (0, mergeLinkedListToMultiGraph_1.mergeLinkedListToMultiGraph)(linkedLists);
        assert.strictEqual(graph.getNodes().length, 3);
        assert.strictEqual(graph.getEdges().length, 2);
        const edges = graph.getEdges();
        assert.strictEqual(edges[0].from, "/src/file1.ts");
        assert.strictEqual(edges[0].to, "/src/file2.ts");
        assert.strictEqual(edges[0].label, "var2");
        assert.strictEqual(edges[1].from, "/src/file2.ts");
        assert.strictEqual(edges[1].to, "/src/file3.ts");
        assert.strictEqual(edges[1].label, "var3");
    });
    test("should create a graph with multiple linked lists", () => {
        const linkedLists = [
            [
                createNode("/src/file1.ts", "var1"),
                createNode("/src/file2.ts", "var2"),
            ],
            [
                createNode("/src/file1.ts", "var3"),
                createNode("/src/file3.ts", "var4"),
            ],
        ];
        const graph = (0, mergeLinkedListToMultiGraph_1.mergeLinkedListToMultiGraph)(linkedLists);
        assert.strictEqual(graph.getNodes().length, 3);
        assert.strictEqual(graph.getEdges().length, 2);
        const edges = graph.getEdges();
        assert.strictEqual(edges[0].from, "/src/file1.ts");
        assert.strictEqual(edges[0].to, "/src/file2.ts");
        assert.strictEqual(edges[0].label, "var2");
        assert.strictEqual(edges[1].from, "/src/file1.ts");
        assert.strictEqual(edges[1].to, "/src/file3.ts");
        assert.strictEqual(edges[1].label, "var4");
    });
    test("should handle nodes without variables", () => {
        const linkedLists = [
            [
                createNode("/src/file1.ts"),
                createNode("/src/file2.ts"),
                createNode("/src/file3.ts", "var1"),
            ],
        ];
        const graph = (0, mergeLinkedListToMultiGraph_1.mergeLinkedListToMultiGraph)(linkedLists);
        assert.strictEqual(graph.getNodes().length, 3);
        assert.strictEqual(graph.getEdges().length, 2);
        const edges = graph.getEdges();
        assert.strictEqual(edges[0].from, "/src/file1.ts");
        assert.strictEqual(edges[0].to, "/src/file2.ts");
        assert.strictEqual(edges[0].label, undefined);
        assert.strictEqual(edges[1].from, "/src/file2.ts");
        assert.strictEqual(edges[1].to, "/src/file3.ts");
        assert.strictEqual(edges[1].label, "var1");
    });
    test("should handle empty linked lists", () => {
        const linkedLists = [];
        const graph = (0, mergeLinkedListToMultiGraph_1.mergeLinkedListToMultiGraph)(linkedLists);
        assert.strictEqual(graph.getNodes().length, 0);
        assert.strictEqual(graph.getEdges().length, 0);
    });
    test("should handle linked lists with single nodes", () => {
        const linkedLists = [
            [createNode("/src/file1.ts", "var1")],
        ];
        const graph = (0, mergeLinkedListToMultiGraph_1.mergeLinkedListToMultiGraph)(linkedLists);
        assert.strictEqual(graph.getNodes().length, 1);
        assert.strictEqual(graph.getEdges().length, 0);
    });
});
//# sourceMappingURL=mergeLinkedListToMultiGraph.test.js.map