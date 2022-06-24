export enum Job {
	DockerBuild = 'docker-build',
	DockerLint = 'docker-lint',
	KubernetesDeploy = 'kubernetes-deploy',
	TestsRun = 'tests-run',
};

export interface PackageDetails {
	dirName: string;
	name: string;
	path: string;
}
