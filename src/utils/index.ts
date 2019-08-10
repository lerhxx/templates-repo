import Taro from "@tarojs/taro"

function changePage(url) {
    const pages = Taro.getCurrentPages()
    let targetIndex = -1

    pages.forEach((page, index) => {
        url.indexOf(page.route) > -1 && ( targetIndex = index )
    })

    if (targetIndex > -1) {
        Taro.navigateBack({ delta: pages.length - targetIndex - 1 })
        return
    }

    Taro.navigateTo({ url })
}

function serializeParams(params={}) {
    let str = ''
    for(let k in params) {
        str += `${k}=${params[k]}&`
    }
    return str
}

function goToHome() {
    changePage('/pages/home/index')
}

// 商品详情
function goToLogin(id?: string|number) {
    changePage(`/login/login/index`)
}

export {
    changePage,
    goToHome,
    goToLogin
}
