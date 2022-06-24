import getPackageDetails from '../getPackageDetails';

describe('getPackageDetails', () => {
	beforeEach(() => {
		jest.spyOn(process, 'cwd').mockReturnValue('/path/to');
	});

	it('should return a description of each package', () => {
		const descriptions = getPackageDetails('test-package');
		expect(descriptions).toStrictEqual({
			dirName: 'test-package',
			fullPath: '/path/to/packages/test-package',
			name: 'test-package',
			path: 'packages/test-package',
		});
	});

	it('should convert scoped package names for the directory name', () => {
		const descriptions = getPackageDetails('@chiel/test-package');
		expect(descriptions).toStrictEqual({
			dirName: 'test-package',
			fullPath: '/path/to/packages/test-package',
			name: '@chiel/test-package',
			path: 'packages/test-package',
		});
	});
});
