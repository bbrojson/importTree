import { FunctionDeclaration, SourceFile, VariableDeclaration } from "ts-morph";

export type TreeNodeType = {
  id: string;
  file: SourceFile;
  variable: VariableDeclaration | FunctionDeclaration | null;
};
