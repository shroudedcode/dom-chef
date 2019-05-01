// Adapted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts

interface Attributes {
	key?: string | number;
}

export function h<P extends {}>(
	type: DocumentFragment | string,
	props?: Attributes & P | null,
	...children: Node[]
): Element | DocumentFragment;
