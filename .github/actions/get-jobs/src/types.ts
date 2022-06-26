export enum Job {
	DockerBuild = 'docker-build',
	DockerLint = 'docker-lint',
	KubernetesDeploy = 'kubernetes-deploy',
	LinterRun = 'linter-run',
	TestsRun = 'tests-run',
};

export interface PackageDetails {
	dirName: string;
	fullPath: string;
	name: string;
	path: string;
}
