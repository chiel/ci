import { accessSync } from 'fs';

import { PackageDescription } from '../types';

export default function hasDockerfile(pkg: PackageDescription): boolean {
	try {
		accessSync(`${pkg.path}/Dockerfile`);
		return true;
	} catch (err) {
		return false;
	}
}
