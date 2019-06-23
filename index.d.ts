/**
 * TypeScript type definitions for JavaScript libraries and Node Packages (npm)
 *
 * @description https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
 * @example
 *
 * declare module 'lodash'
 * declare module 'chance'
 * declare module 'my-npm-package'
 *
 * */

export declare abstract class DirectiveKeys {
	static isUnique: string;
	static default: string;
	static relation: string;
	static db: string;
	static index: string;
	static indexes: string;
	static sequence: string;
	static relationTable: string;
	static scalarList: string;
	static isId: string;
	static isCreatedAt: string;
	static isUpdatedAt: string;
	static isEmbedded: string;
}