function debounce(fn, gap=1500) {
    let timer
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, gap)
    }
}

export {
    debounce
}
