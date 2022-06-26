import { PackageDetails } from '../types';
import { hasScript } from '../utils';

export default function hasLintScript(pkg: PackageDetails): boolean {
	return hasScript(pkg.fullPath, 'lint');
}
