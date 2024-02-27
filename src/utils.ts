export function replaceNumber(number: string) {
    return `${Number(number).toLocaleString('ru')} руб.`
}