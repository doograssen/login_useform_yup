import './signup.css';
import { FormField } from '../formField/FormField';
import { useForm } from 'react-hook-form';
import { fieldsScheme } from '../../utils/validationSchema'
import { yupResolver } from '@hookform/resolvers/yup';

export const SignUp = () => {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { touchedFields, isValid, errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordConfirm: '',
		},
		resolver: yupResolver(fieldsScheme),
		mode: 'onTouched',
	});

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<FormField
				name="email"
				label="Email"
				type="text"
				register={register('email')}
				error={errors.email?.message}
				/>
			<FormField
				name="password"
				label="Пароль"
				type="password"
				register={register('password', {
					onChange: () => touchedFields.passwordConfirm && trigger('passwordConfirm'),
				})}
				error={errors.password?.message}
				/>
			<FormField
				name="passwordConfirm"
				label="Повторить пароль"
				type="password"
				register={register('passwordConfirm')}
				error={errors.passwordConfirm?.message}
				/>
			<button className="form-submit" type="submit" disabled={!isValid}>Зарегистрироваться</button>
		</form>
	);
}

