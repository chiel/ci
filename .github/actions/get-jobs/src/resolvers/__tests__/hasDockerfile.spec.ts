import { fileExists } from '../../utils';
import hasDockerfile from '../hasDockerfile';

jest.mock('../../utils', () => ({
	fileExists: jest.fn(),
}));

describe('hasDockerfile', () => {
	const pkg = {
		dirName: 'test-package',
		name: 'test-package',
		path: '/path/to/packages/test-package',
	};

	it('should return true if the package has a dockerfile', () => {
		(fileExists as jest.Mock).mockReturnValue(true);
		expect(hasDockerfile(pkg)).toBeTruthy();
		expect(fileExists).toHaveBeenCalledWith('/path/to/packages/test-package/Dockerfile');
	});

	it('should return false if the package does not have a dockerfile', () => {
		(fileExists as jest.Mock).mockReturnValue(false);
		expect(hasDockerfile(pkg)).toBeFalsy();
	});
});
