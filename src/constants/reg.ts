export const comeUpReg = /iphone\s*x/i

export const emojiReg = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig

export const htmlFilterREG = {
    empty: /<[^>]+><\/[^>]+>/g,
    imgFontFamily: /(<img.*?)(font-family:[^>]*?;)(.*?>)/g,
    spanFontFamily: /(<span.*?)(font-family:[^>]*?;)(.*?>)/g,
    style: /<style>[\s\S]*?<\/style>/g
}
