import { PackageDescription } from '../types';
import hasDockerfile from './hasDockerfile';
import hasJestConfig from './hasJestConfig';
import hasKubernetesManifest from './hasKubernetesManifest';

type Resolver = (pkg: PackageDescription) => boolean;

const resolvers: Record<string, Resolver> = {
	'docker-build': hasDockerfile,
	'docker-lint': hasDockerfile,
	'jest-run': hasJestConfig,
	'kubernetes-deploy': hasKubernetesManifest,
};

export default resolvers;
