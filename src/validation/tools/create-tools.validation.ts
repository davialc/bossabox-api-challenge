import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
import { CreateToolsDTO } from '../../services/tools/create/create-tools.dto';
yup.setLocale(pt);

export const CreateToolsSchema = yup.object<
	Record<keyof CreateToolsDTO, yup.AnySchema>
>({
	title: yup.string().required(),
	description: yup.string().required(),
	link: yup.string().required(),
	tags: yup.array().of(yup.string()).required(),
});
