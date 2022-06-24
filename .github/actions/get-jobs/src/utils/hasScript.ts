export default function hasScript(pkgPath: string, scriptName: string): boolean {
	try {
		const json = require(`${pkgPath}/package.json`);
		return !!json.scripts?.[scriptName];
	} catch (err) {
		return false;
	}
}
