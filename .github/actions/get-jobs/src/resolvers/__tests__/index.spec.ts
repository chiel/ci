import { Job } from '../../types';
import hasDockerfile from '../hasDockerfile';
import hasKubernetesManifest from '../hasKubernetesManifest';
import hasTestScript from '../hasTestScript';
import { resolvePackageJobs } from '..';

jest.mock('../hasDockerfile', () => jest.fn());
jest.mock('../hasKubernetesManifest', () => jest.fn());
jest.mock('../hasTestScript', () => jest.fn());

describe('resolvePackageJobs', () => {
	it.each([
		[[Job.DockerBuild, Job.DockerLint, Job.KubernetesDeploy, Job.TestsRun], true, true, true],
		[[Job.DockerBuild, Job.DockerLint], true, false, false],
		[[Job.KubernetesDeploy], false, true, false],
		[[Job.TestsRun], false, false, true],
	])('should return an array of jobs for the given package', (expectedJobs, a, b, c) => {
		(hasDockerfile as jest.Mock).mockReturnValue(a);
		(hasKubernetesManifest as jest.Mock).mockReturnValue(b);
		(hasTestScript as jest.Mock).mockReturnValue(c);

		const jobs = resolvePackageJobs({
			dirName: 'test-package',
			fullPath: '/path/to/packages/test-package',
			name: '@chiel/test-package',
			path: 'packages/test-package',
		});

		expect(jobs).toEqual(expectedJobs);
	});
});
