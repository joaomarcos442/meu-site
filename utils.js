function ehTextoValido(valor) {
    return typeof valor === 'string' && valor.trim().length > 0;
}

function validarEmail(email) {
    if (!ehTextoValido(email)) {
        return false;
    }

    const emailFormatado = email.trim();

    return emailFormatado.includes('@') && emailFormatado.includes('.');
}

function validarCampoVazio(campo) {
    return ehTextoValido(campo);
}

function limitarTexto(texto, limite) {
    if (typeof texto !== 'string') {
        return '';
    }

    if (typeof limite !== 'number' || limite < 0) {
        return texto;
    }

    return texto.length > limite ? texto.substring(0, limite) : texto;
}

module.exports = {
    validarEmail,
    validarCampoVazio,
    limitarTexto
};
