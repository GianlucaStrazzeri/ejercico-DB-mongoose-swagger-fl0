// importaremos los diferentes archivos y los exportaremos
const basicInfo = require('./basicInfo');
const tasks = require ("./tasks.js");
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
};
