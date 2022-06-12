import { PackageDescription } from '../types';
import { fileExists } from '../utils';

export default function hasDockerfile(pkg: PackageDescription): boolean {
	return fileExists(`${pkg.path}/Dockerfile`);
}
