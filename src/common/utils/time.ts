export function tempoParaSegundos(tempo:string){
    const [h = '0', m='0', s='0'] = tempo.split(":");
    const horasEmSegundos = Number(h) * 3600;
    const minutosEmSegundos = Number(m) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(s)
}