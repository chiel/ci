import path from 'path';

import { PackageDescription } from '../types';

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
