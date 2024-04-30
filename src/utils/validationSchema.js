import * as yup from 'yup';

const ERRORS = {
	WRONG_EMAIL: 'неверный формат почты',
	EMPTY: 'Поле обязательно для заполнения',
	SHORT_PASSWORD: 'слишком короткий пароль',
	FORMAT_PASSWORD: 'пароль должен содержать латтинские буквы, цифры и символы',
	MATCHING_PASSWORDS: 'пароли не совпадают',
};

export const fieldsScheme = yup.object().shape({
	email: yup.string().required(ERRORS.EMPTY).email(ERRORS.WRONG_EMAIL),
	password: yup
		.string()
		.required(ERRORS.EMPTY)
		.matches(
			/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
			ERRORS.FORMAT_PASSWORD,
		)
		.min(8, ERRORS.SHORT_PASSWORD),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], ERRORS.MATCHING_PASSWORDS),
});
