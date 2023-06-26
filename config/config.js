var db_table = 'config1';
var db = require('../modules/db.js');
var env = {};

exports.debug = process.env.DEBUG || false;

exports.env = function() {
  return env;
}
exports.owner = {
 'name': 'Alex De A',
'id': '10241176'
}
setConfig();

function setConfig(){
  db.getAllDocuments(db_table, function(res){
    env = {};
    for (var conf in res){
        env[res[conf].config1] = {};
        for (var r in res[conf]){
            if (r != 'config1' && r != '_id'){
                env[res[conf].config1][r] = res[conf][r];
            }
        }
    }
  });
}

exports.setConfig = setConfig;
exports.bot_name = 'GMBot';
exports.delay_time = 1000;
