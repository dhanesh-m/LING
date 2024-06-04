import { config } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

export const glueStackConfig = createConfig({
	...config,
	components: {
		...config.components,
		Button: {
			...config.components.Button,
			theme: {
				...config.components.Button.theme,
				borderRadius: '$lg',
				// _text: {
				// 	// ...config.components.Button.theme._text,
				// 	fontWeight: '$normal',
				// },
			},
		},
		Text: {
			...config.components.Text,
			theme: {
				...config.components.Text.theme,
				defaultProps: {
					color: '$black',
				},
			},
		},
	},

	tokens: {
		...config.tokens,
		colors: {
			...config.tokens.colors,
			primary0: '#e8f4ea',
			primary50: '#d2c1f7',
			primary100: '#b298eb',
			primary200: '#a681f0',
			primary300: '#9971eb',
			primary400: '#805dc9',
			primary500: '#9662FF',
			primary600: '#9662FF',
			primary700: '#824fe8',
			primary800: '#7845de',
			primary900: '#6e38d9',
			primary950: '#5f2dc2',
		},
		fonts: {
			heading: 'Lexend Deca',
			body: 'Lexend Deca',
			mono: 'Lexend Deca',
		},
	},
});
