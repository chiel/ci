import hasScript from '../hasScript';

describe('hasScript', () => {
	beforeEach(() =>{
		jest.resetModules();
	});

	it('should return false if the package does not have a package.json', () => {
		expect(hasScript('/path/to/pkg', 'test')).toBeFalsy();
	});

	it('should return false if the package.json has no scripts', () => {
		jest.mock(
			'/path/to/pkg/package.json',
			() => ({}),
			{ virtual: true },
		);
		expect(hasScript('/path/to/pkg', 'test')).toBeFalsy();
		jest.unmock('/path/to/pkg/package.json');
	});

	it('should return false if the package.json has no test script', () => {
		jest.mock(
			'/path/to/pkg/package.json',
			() => ({ scripts: {} }),
			{ virtual: true },
		);
		expect(hasScript('/path/to/pkg', 'test')).toBeFalsy();
		jest.unmock('/path/to/pkg/package.json');
	});

	it('should return true if the package.json has a test script', () => {
		jest.mock(
			'/path/to/pkg/package.json',
			() => ({ scripts: { test: 'jest' } }),
			{ virtual: true },
		);
		expect(hasScript('/path/to/pkg', 'test')).toBeTruthy();
		jest.unmock('/path/to/pkg/package.json');
	});
});
