import { PackageDescription } from '../types';
import hasDockerfile from './hasDockerfile';
import hasKubernetesManifest from './hasKubernetesManifest';

type Resolver = (pkg: PackageDescription) => boolean;

const resolvers: Record<string, Resolver> = {
	'docker-build': hasDockerfile,
	'docker-lint': hasDockerfile,
	'kubernetes-deploy': hasKubernetesManifest,
};

export default resolvers;
