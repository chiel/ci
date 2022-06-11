import { accessSync } from 'fs';

import { PackageDescription } from '../types';

export default function hasKubernetesManifest(pkg: PackageDescription): boolean {
	try {
		accessSync(`${pkg.path}/.k8s.template.yaml`);
		return true;
	} catch (err) {
		return false;
	}
}
