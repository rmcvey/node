'use strict';

const { prepareMainThreadExecution } = require('internal/bootstrap/pre_execution');

prepareMainThreadExecution();

markBootstrapComplete();
// @ssd - third_party_main does not normally get argv populated, add arguments to argv array
process.argv.splice(1, 0, process.argv[0], process.argv[0], ...process.execArgv);

require('_third_party_main');
