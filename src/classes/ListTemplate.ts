import { HasFormatter } from '../interfaces/HasFormatter';

export class ListTemplate {
	constructor(private container: HTMLUListElement) {}

	render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
		const li = document.createElement('li');
		const h2 = document.createElement('h2');
		const h4 = document.createElement('h4');
		const p = document.createElement('p');
		const date = new Date();
		h2.innerText = date.toString();
		h4.innerText = heading;
		p.innerText = item.format();
		li.append(h2);
		li.append(h4);
		li.append(p);

		if (pos === 'start') {
			this.container.prepend(li);
		} else {
			this.container.append(li);
		}
	}
}
