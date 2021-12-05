const { generateText } = require("../util");

describe("Descripción de la agruparación de los test", () => {
    test("Salida de Nombre y Edad", () => {
        const text = generateText("Hernan", 32);
        expect(text).toBe("Hernan (32 years old)");
    });
});
