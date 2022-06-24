import path from 'path';

import { PackageDetails } from '../types';

export default function getPackageDetails(name: string): PackageDetails {
	const dirName = name.replace(/^[^\/]+\//, '');
	const p = `packages/${dirName}`;
	return { dirName, name, fullPath: path.resolve(process.cwd(), p), path: p };
}
