import { FunctionDeclaration, SourceFile, VariableDeclaration } from "ts-morph";

export type TreeNodeType = {
  file: SourceFile;
  variable: VariableDeclaration | FunctionDeclaration | null;
};
