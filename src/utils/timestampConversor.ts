

export const timestampConversor = (timestamp: number) => {
    const conversor = new Date(timestamp * 1000)
    return conversor.toLocaleString().split(',')[0]
}