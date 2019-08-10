import { calcImageHeight } from '@utils/helper'

interface WaterFallOptions {
    imgWidth: number;
    restHeight: number;
    gap: number;
    baseTop: number;
}

// 瀑布流计算
function waterFall (list=[], options={} as WaterFallOptions) {
    const { imgWidth=345, restHeight=200, gap=20, baseTop=0 } = options
    const columns: number[] = []

    const newList = list.map((item, i) => {
        const imgHeight: number = calcImageHeight(item.cover_resolution, imgWidth)
        const newItem = { ...item }
        let minIndex = 0
        const totalHeight = imgHeight + restHeight + gap
        if (i < 2) {
            columns.push(baseTop + totalHeight)
            newItem.top = baseTop
            minIndex = i
        } else {
            const minHeight = Math.min.apply(null, columns)
            minIndex = columns.indexOf(minHeight)
            columns[minIndex] += totalHeight
            newItem.top = minHeight
        }
        newItem.left = (imgWidth + gap) * minIndex
        newItem.imgHeight = imgHeight

        return newItem
    })

    return {
        maxHeight: Math.max.apply(null, columns),
        items: newList
    }
}

export {
    waterFall
}
