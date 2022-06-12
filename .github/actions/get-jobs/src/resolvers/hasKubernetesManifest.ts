import { PackageDescription } from '../types';
import { fileExists } from '../utils';

export default function hasKubernetesManifest(pkg: PackageDescription): boolean {
	return fileExists(`${pkg.path}/.k8s.template.yaml`);
}
