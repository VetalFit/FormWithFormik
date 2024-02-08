//import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup'

/* const validate = values => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Обательное поле'
	} else if (values.name.length < 5) {
		errors.name = 'Минимальное число символов 5'
	}

	if (!values.email) {
		errors.email = 'Обательное поле'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Неправильный email адрес';
	}

	return errors
} */

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<input {...props} {...field} />
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</>
	)
}

const MyCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });
	return (
		<>
			<label className="checkbox">
				<input type="checkbox" {...props} {...field} />
				{children}
			</label>
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</>
	)
}

const CustomForm = () => {

	/* const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			amount: 0,
			currency: '',
			text: '',
			terms: false
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, 'Минимум 5 символов')
				.required('Обательное поле'),
			email: Yup.string()
				.email('Неправильный email адоес')
				.required('Обательное поле'),
			amount: Yup.number()
				.min(5, 'Минимум 5 символов')
				.required('Обательное поле'),
			currency: Yup.string()
				.required('Выберите валюту'),
			text: Yup.string()
				.min(10, 'Минимум 10 символов'),
			terms: Yup.boolean()
				.required('Необходимо согласие')
				.oneOf([true], 'Необходимо согласие')
		}),
		onSubmit: values => console.log(JSON.stringify(values, null, 2))
	}) */

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				amount: 0,
				currency: '',
				text: '',
				terms: false
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(5, 'Минимально 5 символов')
					.required('Обязательно поле'),
				email: Yup.string()
					.email('Неправильный email адрес')
					.required('Обязательно поле'),
				amount: Yup.number()
					.min(5, 'Минимално 5 символов')
					.required('Обязательно поле'),
				currency: Yup.string()
					.required('Введите валюту'),
				text: Yup.string()
					.min(10, 'Минимум 10 символов')
					.required('Обязательно поле'),
				terms: Yup.boolean()
					.required('Необходимо согласие')
					.oneOf([true], 'Необходимо согласие')
			})}
			onSubmit={values => console.log(JSON.stringify(values, null, 2))}
		>
			<Form className="form">
				<h2>Отправить пожертвование</h2>
				{/* <label htmlFor="name">Ваше имя</label>
				<Field
					id="name"
					name="name"
					type="text"
				 value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur} 
				/> */}
				{/* {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null} */}
				<MyTextInput
					label="Ваше имя"
					id="name"
					name="name"
					type="text"
				/>
				{/* <ErrorMessage className="error" name="name" component="div" />
				<label htmlFor="email">Ваша почта</label>
				<Field
					id="email"
					name="email"
					type="email"
				 value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				/> */}
				{/* {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null} */}
				{/* <ErrorMessage className="error" name="email" component="div" /> */}
				<MyTextInput
					label="Ваша почта"
					id="email"
					name="email"
					type="email"
				/>
				<label htmlFor="amount">Количество</label>
				<Field
					id="amount"
					name="amount"
					type="number"
				/* value={formik.values.amount}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur} */
				/>
				{/* {formik.errors.amount && formik.touched.amount ? <div className='error'>{formik.errors.amount}</div> : null} */}
				<ErrorMessage className="error" name="amount" component="div" />
				<label htmlFor="currency">Валюта</label>
				<Field
					id="currency"
					name="currency"
					as="select"
				/* value={formik.values.currency}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur} */
				>
					<option value="">Выберите валюту</option>
					<option value="USD">USD</option>
					<option value="UAH">UAH</option>
					<option value="RUB">RUB</option>
				</Field>
				{/* {formik.errors.currency && formik.touched.currency ? <div className='error'>{formik.errors.text}</div> : null} */}
				<ErrorMessage className="error" name="currency" component="div" />
				<label htmlFor="text">Ваше сообщение</label>
				<Field
					id="text"
					name="text"
					as="textarea"
				/* value={formik.values.text}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur} */
				/>
				{/* {formik.errors.text && formik.touched.text ? <div className='error'>{formik.errors.text}</div> : null} */}
				<ErrorMessage className="error" name="text" component="div" />
				{/* <label className="checkbox">
					<Field
						name="terms"
						type="checkbox"
					 value={formik.values.terms}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur} 
					/>
					Соглашаетесь с политикой конфиденциальности?
				</label> */}
				{/* {formik.errors.terms && formik.touched.terms ? <div className='error'>{formik.errors.terms}</div> : null} */}
				{/* <ErrorMessage className="error" name="terms" component="div" /> */}
				<MyCheckbox
					name="terms">
					Соглашаетесь с политикой конфиденциальности?
				</MyCheckbox>
				<button type="submit">Отправить</button>
			</Form>
		</Formik >
	)
}

export default CustomForm;