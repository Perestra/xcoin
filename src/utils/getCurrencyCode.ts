

export const getCurrencyCode = (code: string, index: number) => {
    return code?.split?.(' - ')[index]
}