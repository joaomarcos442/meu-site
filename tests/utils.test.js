const { validarEmail, validarCampoVazio, limitarTexto } = require('../utils');

describe('Validação de email', () => {
    test('email válido', () => {
        expect(validarEmail('teste@email.com')).toBe(true);
    });

    test('email inválido', () => {
        expect(validarEmail('testeemail.com')).toBe(false);
    });

    test('email vazio', () => {
        expect(validarEmail('')).toBe(false);
    });
});

describe('Validação de campo vazio', () => {
    test('campo preenchido', () => {
        expect(validarCampoVazio('João')).toBe(true);
    });

    test('campo vazio', () => {
        expect(validarCampoVazio('')).toBe(false);
    });

    test('campo com espaços', () => {
        expect(validarCampoVazio('   ')).toBe(false);
    });
});

describe('Limite de texto', () => {
    test('texto menor que limite', () => {
        expect(limitarTexto('Oi', 10)).toBe('Oi');
    });

    test('texto maior que limite', () => {
        expect(limitarTexto('Texto muito grande', 5)).toBe('Texto');
    });

    test('texto vazio', () => {
        expect(limitarTexto('', 5)).toBe('');
    });
});
