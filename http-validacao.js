import fetch from "node-fetch"

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`
                }))
        return arrayStatus
    } catch (erro) {
        manejaErros(erro.massage)
    }
}

function geraArrayDeURLs(arrayLinks) {
    //loop para cada {chave : valor}
    //objeto -> [valor]
    //Object.values(objeto)
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}


export default async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    // spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultados
}