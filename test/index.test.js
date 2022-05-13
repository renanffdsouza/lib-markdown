import pegaArquivo from "../index";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('Deve ser uma função',() => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultados', async () =>{
        const resultado = await pegaArquivo('./test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    
})

