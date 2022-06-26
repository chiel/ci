import { hasScript } from '../../utils';
import hasLintScript from '../hasLintScript';

jest.mock('../../utils', () => ({
	hasScript: jest.fn(),
}));

describe('hasLintScript', () => {
	const pkg = {
		dirName: 'test-package',
		fullPath: '/path/to/packages/test-package',
		name: 'test-package',
		path: 'packages/test-package',
	};

	it('should return true if the package has a lint script', () => {
		(hasScript as jest.Mock).mockReturnValue(true);
		expect(hasLintScript(pkg)).toBeTruthy();
		expect(hasScript).toHaveBeenCalledWith('/path/to/packages/test-package', 'lint');
	});

	it('should return false if the package does not have a test script', () => {
		(hasScript as jest.Mock).mockReturnValue(false);
		expect(hasLintScript(pkg)).toBeFalsy();
	});
});
