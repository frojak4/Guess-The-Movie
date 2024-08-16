


export const printHearts = (hearts) => {
    if (hearts === 3) {
        return [fullHeart, fullHeart, fullHeart]
    } else if (hearts === 2) {
        return [fullHeart, fullHeart, emptyHeart]
    } else if (hearts === 1) {
        return [fullHeart, emptyHeart, emptyHeart]
    } else if (hearts === 0) {
        return [emptyHeart, emptyHeart, emptyHeart]
    } else return '';
}

const fullHeart = {
    symbol: "♡",
    color: "hsl(120, 100%, 40%)",
}

const emptyHeart = {
    symbol: "♡",
    color: "red",
}