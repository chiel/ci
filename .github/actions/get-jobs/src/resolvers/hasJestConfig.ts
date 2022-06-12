import { PackageDescription } from '../types';
import { fileExists } from '../utils';

export default function hasJestConfig(pkg: PackageDescription): boolean {
	return fileExists(`${pkg.path}/jest.config.js`);
}
