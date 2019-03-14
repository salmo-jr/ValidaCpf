var fs = require('fs');

// file is included here:
eval(fs.readFileSync('js/Cpf.js')+'');

module.exports.formataCpf = formataCpf;  
module.exports.extraiNumerosCpf = extraiNumerosCpf;  
module.exports.TestaCPF = TestaCPF;