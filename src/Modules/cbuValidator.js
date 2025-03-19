class CBUValidator {
  validarLargoCBU(numero) {
    if (numero.length != 22) {
      return false;
    }
    return true;
  }

  validarBloque1(bloque1) {
    if (bloque1.length != 8) {
      return false;
    }
    var banco = bloque1.substr(0, 3);
    var digitoVerificador1 = bloque1[3];
    var sucursal = bloque1.substr(4, 3);
    var digitoVerificador2 = bloque1[7];
    var suma = banco[0] * 7 + banco[1] * 1 + banco[2] * 3 + digitoVerificador1 * 9 + sucursal[0] * 7 + sucursal[1] * 1 + sucursal[2] * 3;
    var diferencia = 10 - (suma % 10);
    return diferencia == digitoVerificador2;
  }

  validarBloque2(bloque2) {
    if (bloque2.length != 14) {
      return false;
    }
    var digitoVerificador = bloque2[13];
    var suma =
      bloque2[0] * 3 +
      bloque2[1] * 9 +
      bloque2[2] * 7 +
      bloque2[3] * 1 +
      bloque2[4] * 3 +
      bloque2[5] * 9 +
      bloque2[6] * 7 +
      bloque2[7] * 1 +
      bloque2[8] * 3 +
      bloque2[9] * 9 +
      bloque2[10] * 7 +
      bloque2[11] * 1 +
      bloque2[12] * 3;
    var diferencia = (10 - (suma % 10)) % 10;
    return diferencia == digitoVerificador;
  }

  validarCBU(nrocbu) {
    return this.validarLargoCBU(nrocbu) && this.validarBloque1(nrocbu.substr(0, 8)) && this.validarBloque2(nrocbu.substr(8, 14));
  }
}

module.exports = CBUValidator;
