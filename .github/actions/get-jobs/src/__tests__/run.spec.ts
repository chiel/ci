import core from '@actions/core';

import { resolvePackageJobs } from '../resolvers';
import run from '../run';
import { Job } from '../types';
import { getPackageDetails } from '../utils';

jest.mock('@actions/core', () => ({
	getInput: jest.fn(),
	setFailed: jest.fn(),
	setOutput: jest.fn(),
}));

jest.mock('../resolvers', () => ({
	resolvePackageJobs: jest.fn(),
}))

jest.mock('../utils', () => ({
	getPackageDetails: jest.fn(),
}));

describe('run', () => {
	it('should output all the jobs that need to be run', () => {
		jest.spyOn(console, 'info').mockImplementation();
		(core.getInput as jest.Mock).mockReturnValue('@chiel/test-a,@chiel/test-b,@chiel/test-c');
		(getPackageDetails as jest.Mock).mockImplementation(name => ({ name }));
		(resolvePackageJobs as jest.Mock)
			.mockReturnValueOnce([Job.DockerBuild, Job.DockerLint])
			.mockReturnValueOnce([Job.DockerBuild, Job.KubernetesDeploy])
			.mockReturnValueOnce([Job.TestsRun]);

		run();

		const expectedJobs = {
			[Job.DockerBuild]: [
				expect.objectContaining({ name: '@chiel/test-a' }),
				expect.objectContaining({ name: '@chiel/test-b' }),
			],
			[Job.DockerLint]: [expect.objectContaining({ name: '@chiel/test-a' })],
			[Job.KubernetesDeploy]: [expect.objectContaining({ name: '@chiel/test-b' })],
			[Job.TestsRun]: [expect.objectContaining({ name: '@chiel/test-c' })],
		};

		expect(core.getInput).toHaveBeenCalledWith('packages', { required: true });
		expect(console.info).toHaveBeenCalledWith(expectedJobs);
		expect(core.setOutput).toHaveBeenCalledWith('jobs', expectedJobs);
	});

	it('should set a failed message if an error is thrown that is not an Error instance', () => {
		(core.getInput as jest.Mock).mockImplementation(() => {
			throw 'Oh shiet';
		});

		run();
		expect(core.setFailed).toHaveBeenCalledWith('Something went horribly wrong.');
	});

	it('should set a failed message if a proper error is thrown', () => {
		(core.getInput as jest.Mock).mockImplementation(() => {
			throw new Error('Oh no!');
		});

		run();
		expect(core.setFailed).toHaveBeenCalledWith('Oh no!');
	});
});
