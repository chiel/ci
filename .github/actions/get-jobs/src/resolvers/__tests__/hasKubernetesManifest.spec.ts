import { fileExists } from '../../utils';
import hasKubernetesManifest from '../hasKubernetesManifest';

jest.mock('../../utils', () => ({
	fileExists: jest.fn(),
}));

describe('hasKubernetesManifest', () => {
	const pkg = {
		bareName: 'test-package',
		fullPath: '/path/to/packages/test-package',
		name: 'test-package',
		path: 'packages/test-package',
	};

	it('should return true if the package has a dockerfile', () => {
		(fileExists as jest.Mock).mockReturnValue(true);
		expect(hasKubernetesManifest(pkg)).toBeTruthy();
		expect(fileExists).toHaveBeenCalledWith('/path/to/packages/test-package/.k8s.template.yaml');
	});

	it('should return false if the package does not have a dockerfile', () => {
		(fileExists as jest.Mock).mockReturnValue(false);
		expect(hasKubernetesManifest(pkg)).toBeFalsy();
	});
});
