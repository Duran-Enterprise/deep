<script lang="ts">
	/**
	 * Button component.
	 *
	 * @component
	 * @example
	 * <Button
	 *   elementType="primary"
	 *   mode="light"
	 *   size="medium"
	 *   disabled={false}
	 *   text="Click Me!"
	 *   customClass="my-custom-class"
	 *   customStyle="color: red;"
	 *   ariaLabel="Custom Button"
	 * />
	 *
	 * @param {string} elementType - The type of button ("primary" or "secondary").
	 * @param {string} mode - The mode of the button ("dark" or "light").
	 * @param {string} size - The size of the button ("small", "medium", or "large").
	 * @param {boolean} disabled - Whether the button is disabled.
	 * @param {string} text - The text displayed on the button.
	 * @param {object} customAttributes - Custom attributes to apply to the button.
	 * @param {string} customClass - Custom CSS class to apply to the button.
	 * @param {string} customStyle - Custom inline CSS styles to apply to the button.
	 * @param {string} ariaLabel - ARIA label for accessibility.
	 * @param {function} onclick - The function to call when the button is clicked.
	 */
	import type { ButtonProps } from '$lib/types/enums/props';

	export let elementType: ButtonProps['elementType'] = 'primary';
	export let mode: ButtonProps['mode'] = 'light';
	export let size: ButtonProps['size'] = 'medium';
	export let disabled: ButtonProps['disabled'] = false;
	export let text: ButtonProps['text'] = 'Click Me!';
	export let ariaLabel: ButtonProps['ariaLabel'] = '';
	export let customClass: ButtonProps['customClass'] = '';
	export let customStyle: ButtonProps['customStyle'] = '';
	export let customAttributes: ButtonProps['customAttributes'] = { 'data-test': 'true' };
	export let onclick: () => void;
	function handleButtonClick() {
		onclick();
	}
</script>

<button
	class="{elementType} {mode} {size} {customClass}{disabled ? 'disabled' : ''}"
	style={customStyle}
	on:click={handleButtonClick}
	aria-label={ariaLabel}
	{...customAttributes}
>
	<p>
		{text}
	</p>
</button>

<style>
	button {
		overflow: hidden;
		position: relative;
		display: inline-block;
		padding: 8px 24px;
		text-align: center;
		border-radius: 15px;
		width: 199px;
		height: 48px;
		border: none;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		box-sizing: border-box;

		transition: 0.5s;

		box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
	}
	p {
		font-weight: bold;
	}
	button:after {
		content: '»';
		position: absolute;
		opacity: 0;
		top: 14px;
		right: -20px;
		transition: 0.5s;
	}

	button:hover {
		padding-right: 24px;
		padding-left: 8px;
	}

	button:hover:after {
		opacity: 1;
		right: 10px;
	}

	.primary {
		background-color: var(--primary);
		color: var(--black);
	}
	.secondary.light {
		background-color: var(--light-contrast);
		color: var(--black);
	}
	.secondary.dark {
		background-color: var(--dark-contrast);
		color: var(--white);
	}
	.small {
		width: 150px;
		height: 36px;
	}
	.medium {
		width: 199px;
		height: 48px;
	}
	.large {
		width: 250px;
		height: 60px;
	}
	button:hover {
		transform: scale(var(--hover-scale));
	}
	.primary:hover {
		background-color: var(--primary-hover);
		color: var(--white);
	}
</style>
