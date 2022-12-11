import useAxios from '../../../hooks/useAxios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	banner: yup.string().required(),
});

export default function UpdateBanner({ name }) {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});
	const http = useAxios();
	async function updateBanner(data) {
		try {
			const response = await http.put(`profiles/${name}/media`, data);
			console.log('response', response);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<form onSubmit={handleSubmit(updateBanner)}>
			<input {...register('banner')} placeholder="http://BannerURLGoesHere.com" id="banner" />
			<button className="cta special btn-primary">Update</button>
		</form>
	);
}
