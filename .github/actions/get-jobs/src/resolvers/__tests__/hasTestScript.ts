import { hasScript } from '../../utils';
import hasTestScript from '../hasTestScript';

jest.mock('../../utils', () => ({
	hasScript: jest.fn(),
}));

describe('hasTestScript', () => {
	const pkg = {
		dirName: 'test-package',
		name: 'test-package',
		path: '/path/to/packages/test-package',
	};

	it('should return true if the package has a test script', () => {
		(hasScript as jest.Mock).mockReturnValue(true);
		expect(hasTestScript(pkg)).toBeTruthy();
		expect(hasScript).toHaveBeenCalledWith('/path/to/packages/test-package', 'test');
	});

	it('should return false if the package does not have a test script', () => {
		(hasScript as jest.Mock).mockReturnValue(false);
		expect(hasTestScript(pkg)).toBeFalsy();
	});
});
