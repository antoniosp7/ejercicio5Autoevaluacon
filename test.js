var assert = require("assert"),
 Punto = require("./Punto.js");

describe('Carga', function(){
it('se debe haber cargado la librería', function(){
    assert(Punto, "Cargado");
});

describe('Crea', function(){
it('el punto creado debe coincidir con el valor esperado', function(){
    var nuevo_punto = new Punto(5,5);
    assert.equal(nuevo_punto.x, 5);
});
});

describe('Creación errónea', function(){
    it('el punto creado no debe coincidir con el valor esperado', function(){
        var nuevo_punto = new Punto(5,5);
        assert.equal(nuevo_punto.x, 4);
    });
    });

describe('CDistancia', function(){
    it('la distancia es la esperada', function(){
            var nuevo_punto_1 = new Punto(5,5);
            var nuevo_punto_2 = new Punto(10,10);
            var distancia = Punto.distancia(nuevo_punto_1,nuevo_punto_2)
            console.log(distancia)
            assert.equal(distancia, 7.0710678118654755);
    });
    });
});