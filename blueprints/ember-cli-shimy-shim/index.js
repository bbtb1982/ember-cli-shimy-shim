/* eslint-env node */
module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackageToProject('npm-shimy-shim');
  },
};
