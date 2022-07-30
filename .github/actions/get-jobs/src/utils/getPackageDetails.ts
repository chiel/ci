/* istanbul ignore file */

import { PackageDetails } from '../types';

export default function getPackageDetails(name: string): PackageDetails {
	const cwd = process.cwd();
	const bareName = name.replace(/^[^\/]+\//, '');
	const pkgJsonPath = require.resolve(`${name}/package.json`, { paths: [cwd] });
	const fullPath = pkgJsonPath.replace('/package.json', '');
	const path = fullPath.replace(`${cwd}/`, '');
	return { bareName, fullPath, name, path };
}
