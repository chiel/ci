import { PackageDescription } from '../types';
import hasDockerfile from './hasDockerfile';

type Resolver = (pkg: PackageDescription) => boolean;

const resolvers: Record<string, Resolver> = {
	'docker-lint': hasDockerfile,
};

export default resolvers;
