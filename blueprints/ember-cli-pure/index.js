module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('pure');
  }
};
