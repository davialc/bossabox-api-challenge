export class Tool {
	public readonly id: string;

	public title: string;
	public link: string;
	public description: string;
	public tags: string[];

	constructor(props: Omit<Tool, 'id'>, id?: string) {
		Object.assign(this, props);

		if (!id) {
			this.id = crypto.randomUUID();
		}
	}
}
