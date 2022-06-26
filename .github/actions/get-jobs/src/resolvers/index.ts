import { Job, PackageDetails } from '../types';
import hasDockerfile from './hasDockerfile';
import hasKubernetesManifest from './hasKubernetesManifest';
import hasLintScript from './hasLintScript';
import hasTestScript from './hasTestScript';

type Resolver = (pkg: PackageDetails) => boolean;

const resolvers: Record<Job, Resolver> = {
	[Job.DockerBuild]: hasDockerfile,
	[Job.DockerLint]: hasDockerfile,
	[Job.KubernetesDeploy]: hasKubernetesManifest,
	[Job.LinterRun]: hasLintScript,
	[Job.TestsRun]: hasTestScript,
};

export function resolvePackageJobs(pkg: PackageDetails): Job[] {
	return (Object.entries(resolvers) as [Job, Resolver][])
		.filter(([, resolver]) => resolver(pkg))
		.map(([job]) => job);
}
