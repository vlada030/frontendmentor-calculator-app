export const getFromLocalStorage = property => localStorage.getItem(property)


export const setToLocalStorage = (property, value) => {
    localStorage.setItem(property, value)
}

export const checkFontSize = elem => {
    const textLength = elem.innerText.length
    
    const isMobileDevice = elem.parentNode.offsetWidth <= 327

    if (!isMobileDevice && textLength > 15) {
        elem.style.fontSize = '26px'
        elem.style.wordWrap = 'break-word'
        elem.style.wordBreak = 'break-all'
        return
    }

    if (isMobileDevice && textLength > 15) {
        elem.style.fontSize = '20px'
        elem.style.wordWrap = 'break-word'
        elem.style.wordBreak = 'break-all'
        return
    }    

    elem.style.fontSize = '32px'
}

export const commaSeparatedNumber = str => {
    let tempArr = [];
    const integerPart = str.split(".")[0];
    const decimalPart = str.includes('.') ? `.${str.split(".")[1]}` : ''

    integerPart
        .split("")
        .reverse()
        .forEach((el, ind, arr) => {
            tempArr.push(el);

            if ((ind - 2) % 3 === 0 && ind !== 0 && ind !== arr.length - 1) {
                tempArr.push(",");
            }
        });

    return `${tempArr.reverse().join("")}${decimalPart}`;
}; 