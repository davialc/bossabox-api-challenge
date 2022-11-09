import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
import { DeleteToolsDTO } from '../../services/tools/delete/delete-tools.dto';
yup.setLocale(pt);

export const DeleteToolsSchema = yup.object<
	Record<keyof DeleteToolsDTO, yup.AnySchema>
>({
	id: yup.string().required(),
});
