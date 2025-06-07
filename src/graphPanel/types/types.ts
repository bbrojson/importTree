import { FunctionDeclaration, VariableDeclaration } from "ts-morph";

export type TreeNodeType = {
  file: string;
  variable: VariableDeclaration | FunctionDeclaration | null;
};
