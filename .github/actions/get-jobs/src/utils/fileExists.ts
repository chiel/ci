import { accessSync } from 'fs';

export default function fileExists(file: string): boolean {
	try {
		accessSync(file);
		return true;
	} catch (err) {
		return false;
	}
}
