import path from 'path';

import { PackageDetails } from '../types';

export default function getPackageDetails(name: string): PackageDetails {
	const dirName = name.replace(/^[^\/]+\//, '');
	return { dirName, name, path: path.resolve(process.cwd(), 'packages', dirName) };
}
