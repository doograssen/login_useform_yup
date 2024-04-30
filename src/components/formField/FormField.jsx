import { useState } from "react";
import { ShowPass } from "../showPass/ShowPass";

export const FormField = ({name, label, type, register, error}) => {
	const [fieldType, setFieldType] = useState(type);

	return (
		<div className="form-block">
			<label htmlFor={name}>{label}*</label>
			<input
				id={name}
				className="form-input"
				type={ type === 'text' ? type : fieldType }
				placeholder={label}
				{...register}
			/>
			{ type === 'password' &&  <ShowPass state={fieldType} setState={setFieldType}/>}
			{error && <div className="form-error">{error}</div>}
		</div>
	);
}
