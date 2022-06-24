import { accessSync } from 'fs';

import fileExists from '../fileExists';

jest.mock('fs', () => ({
	accessSync: jest.fn(),
}));

describe('fileExists', () => {
	it('should return true if the file exists', () => {
		(accessSync as jest.Mock).mockImplementation();

		const exists = fileExists('file');
		expect(accessSync).toHaveBeenCalledWith('file');
		expect(exists).toBeTruthy();
	});

	it('should return false if the file does not exist', () => {
		(accessSync as jest.Mock).mockImplementation(() => {
			throw new Error('Boop');
		});

		const exists = fileExists('file');
		expect(exists).toBeFalsy();
	});
});
