import type { HTMLButtonAttributes } from 'svelte/elements';
import type { AriaLabel } from './AriaLabel';

export type ElementType = 'primary' | 'secondary';
export type Mode = 'dark' | 'light';
export type Size = 'small' | 'medium' | 'large';
export interface ButtonProps {
	elementType?: ElementType;
	mode?: Mode;
	size?: Size;
	disabled?: boolean;
	text?: string;
	ariaLabel?: AriaLabel;
	customClass?: string;
	customStyle?: string;
	customAttributes?: HTMLButtonAttributes;
}
