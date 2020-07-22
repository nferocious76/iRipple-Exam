function topProduct(products) {
    let topProduct = [];

    for (const product of products) {
        const tmpProd = Object.entries(product)[0];
        if (topProduct.length == 0) {
            topProduct = tmpProd;
        }else{
            if (topProduct[1] < tmpProd[1]) {
                topProduct = tmpProd;
            }
        }
    }

    return topProduct.length == 0 ? 'No Data' : topProduct[0];
}

function bottomProduct(products) {
    let botProduct = [];

    for (const product of products) {
        const tmpProd = Object.entries(product)[0];
        if (botProduct.length == 0) {
            botProduct = tmpProd;
        }else{
            if (botProduct[1] > tmpProd[1]) {
                botProduct = tmpProd;
            }
        }
    }

    return botProduct.length == 0 ? 'No Data' : botProduct[0];
}

function zeroProfitProduct(products) {
    let zeroPos = [];

    for (const product of products) {
        const tmpProd = Object.entries(product)[0];

        if (zeroPos.length == 0) {
            zeroPos = tmpProd;
        }else{

            if (tmpProd[1] > 0) {
                if (zeroPos[1] < 0) {
                    zeroPos = tmpProd;
                }else{
                    if (zeroPos[1] > tmpProd[1]) {
                        zeroPos = tmpProd;
                    }
                }
            }
        }
    }

    return zeroPos.length == 0 ? 'No Data' : zeroPos[0];
}

const products = [
    { 'Product A': -75 },
    { 'Product B': -70 },
    { 'Product C': 98 },
    { 'Product D': 5 },
    { 'Product E': -88 },
    { 'Product F': 29 }
];

const top = topProduct(products);
console.log('top: ', top);

const bot = bottomProduct(products);
console.log('bot: ', bot);

const zero = zeroProfitProduct(products);
console.log('zero: ', zero);