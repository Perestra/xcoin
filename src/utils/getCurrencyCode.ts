

export const getCurrencyCode = (code: string) => {
    return code.split(' - ')[0]
}