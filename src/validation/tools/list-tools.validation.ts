import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
import { ListToolsDTO } from '../../services/tools/find/list-tools.dto';
yup.setLocale(pt);

export const CreateToolsSchema = yup.object<
	Record<keyof ListToolsDTO, yup.AnySchema>
>({ title: yup.string().required() });
