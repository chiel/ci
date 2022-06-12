import { accessSync } from 'fs';
import path from 'path';

import { PackageDescription } from '../types';

export function fileExists(file: string): boolean {
	try {
		accessSync(file);
		return true;
	} catch (err) {
		return false;
	}
}

export function getPackageDescriptions(packageNames: string[]): PackageDescription[] {
	return packageNames.map((name: string) => {
		const dirName = name.replace(/^[^\/]+\//, '');
		return {
			dirName,
			name,
			path: path.resolve(process.cwd(), 'packages', dirName),
		};
	});
}
