import { PackageDetails } from '../types';
import { hasScript } from '../utils';

export default function hasTestScript(pkg: PackageDetails): boolean {
	return hasScript(pkg.fullPath, 'test');
}
