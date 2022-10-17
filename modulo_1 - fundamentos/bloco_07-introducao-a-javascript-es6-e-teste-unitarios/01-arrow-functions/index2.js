const substituaX = (nome) => {
    const frase = `Tryber x aqui!`
    // const fraseAlterada = frase.replace('x', nome);
    // console.log(fraseAlterada)
    return frase.split('x').join(nome);
}
const minhasSKills = (a) => {
const skills = ['framework', 'css', 'html']
let frase = `${substituaX(a)}
minhas tres principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]} `
    console.log(frase)
}
minhasSKills('jesue')