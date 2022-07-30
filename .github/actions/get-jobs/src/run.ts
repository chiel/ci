import core from '@actions/core';

import { resolvePackageJobs } from './resolvers';
import { Job, PackageDetails } from './types';
import { getPackageDetails } from './utils';

export default function run() {
	try {
		const packages = core.getInput('packages', { required: true }).split(',');

		const packageDetails = packages.reduce<Record<string, PackageDetails>>((acc, name) => (
			{ ...acc, [name]: getPackageDetails(name) }
		), {});

		console.info('PACKAGE DETAILS:');
		console.info(JSON.stringify(packageDetails, null, '  '));

		const packageJobs = Object.values(packageDetails).reduce((acc, pkg) => (
			{ ...acc, [pkg.name]: resolvePackageJobs(pkg) }
		), {});

		const jobs = Object.entries<Job[]>(packageJobs)
			.reduce<{ [key in Job]?: string[] }>((outerAcc, [name, jobs]) => (
				jobs.reduce((innerAcc, job) => ({
					...innerAcc,
					[job]: [...(innerAcc[job] || []), packageDetails[name]],
				}), outerAcc)
			), {});

		console.info(jobs);
		core.setOutput('jobs', jobs);
	} catch (err: unknown) {
		if (!(err instanceof Error)) {
			core.setFailed('Something went horribly wrong.');
			return;
		}

		core.setFailed(err.message);
	}
}
