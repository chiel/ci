import { PackageDetails } from '../types';
import { fileExists } from '../utils';

export default function hasDockerfile(pkg: PackageDetails): boolean {
	return fileExists(`${pkg.path}/Dockerfile`);
}
