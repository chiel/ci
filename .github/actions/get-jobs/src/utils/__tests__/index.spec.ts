import fileExists from '../fileExists';
import getPackageDetails from '../getPackageDetails';
import hasScript from '../hasScript';
import * as utils from '..';

describe('utils', () => {
	it('should export all utils', () => {
		expect(utils.fileExists).toBe(fileExists);
		expect(utils.getPackageDetails).toBe(getPackageDetails);
		expect(utils.hasScript).toBe(hasScript);
	});
});
