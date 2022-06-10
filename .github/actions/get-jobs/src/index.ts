import core from '@actions/core';

import resolvers from './resolvers';
import { getPackageDescriptions } from './utils';

function run() {
	try {
		const packageNames = core.getInput('packages', { required: true }).split(',');
		const packages = getPackageDescriptions(packageNames);

		const jobs = Object.entries(resolvers).reduce((acc, [job, resolver]) => {
			const jobPackages = packages.filter(pkg => resolver(pkg)).map(pkg => pkg.dirName);
			if (!jobPackages.length) return acc;
			return { ...acc, [job]: jobPackages };
		}, {});

		console.log('jobs', jobs);
		core.setOutput('jobs', JSON.stringify(jobs));
	} catch (err: unknown) {
		if (!(err instanceof Error)) {
			core.setFailed('Something went horribly wrong');
			return;
		}

		core.setFailed(err.message);
	}
}

run();
