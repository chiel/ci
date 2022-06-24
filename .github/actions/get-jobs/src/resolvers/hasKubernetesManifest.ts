import { PackageDetails } from '../types';
import { fileExists } from '../utils';

export default function hasKubernetesManifest(pkg: PackageDetails): boolean {
	return fileExists(`${pkg.path}/.k8s.template.yaml`);
}
