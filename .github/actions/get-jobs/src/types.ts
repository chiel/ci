export enum Job {
	DockerBuild = 'docker-build',
	DockerLint = 'docker-lint',
	KubernetesDeploy = 'kubernetes-deploy',
	LinterRun = 'linter-run',
	TestsRun = 'tests-run',
};

export interface PackageDetails {
	bareName: string;
	fullPath: string;
	name: string;
	path: string;
}
