var expect    = require("chai").expect;
var cpf = require("../js/exportCpf");

describe("Valida CPF", function() {
  describe("Verifica Formato Valido", function() {
    it("calcula digitos verificadores", function() {
      
      var valido   = cpf.TestaCPF("61468096834");
      var invalido   = cpf.TestaCPF("41389119092");

      expect(valido).to.equal(true);
      expect(invalido).to.equal(false);

    });
  });

  describe("Extrai Numeros do CPF", function() {
    it("remove pontos e traço", function() {

      var resp = cpf.extraiNumerosCpf("614.680.968-34");
      

      expect(resp).to.equal("61468096834");

    });
  });

  describe("Formata CPF", function() {
    it("insere pontos e traço", function() {
      var resp = cpf.formataCpf("61468096834");
      expect(resp).to.equal("614.680.968-34");
    });
  });
  
  /*
  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var red   = converter.hexToRgb("ff0000");
      var green = converter.hexToRgb("00ff00");
      var blue  = converter.hexToRgb("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
  */
});