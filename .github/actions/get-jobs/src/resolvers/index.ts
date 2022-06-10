import { PackageDescription } from '../types';

type Resolver = (pkg: PackageDescription) => boolean;

const resolvers: Record<string, Resolver> = {};

export default resolvers;
