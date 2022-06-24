import run from '../run';

jest.mock('../run', () => jest.fn());

describe('index', () => {
	it('should run the action', () => {
		require('..');
		expect(run).toHaveBeenCalledWith();
	});
});
