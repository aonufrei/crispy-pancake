export const prepareNumber = (num) => {
    if (num >= 1000 && num < 1000000) {
        return `${(num / 1000.0).toFixed(1)}K`;
    } else if (num >= 1000000 && num < 1000000000) {
        return `${(num / 1000000.0).toFixed(1)}M`;
    } else if (num >= 1000000000) {
        return `${(num / 1000000000.0).toFixed(1)}B`;
    }

    return `${num}`;
}