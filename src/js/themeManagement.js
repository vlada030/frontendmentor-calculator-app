import {body, themeSelectorSlider} from './variables'
import {setToLocalStorage, getFromLocalStorage} from './helper'

const classArr = ["dark", "light", "custom"];

export function initializeTheme() {
    
    const localTheme = getFromLocalStorage('theme')
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'

    // localy saved has precedence over system theme
    const theme = localTheme ? localTheme : systemTheme

    body.className = ''
    themeSelectorSlider.value = classArr.indexOf(theme)
    body.classList.add(theme)
}
// HOW TO STYLE RANGE INPUT, EVENT LISTENER...
// https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html
export function themeToggle() {
    themeSelectorSlider.addEventListener("change", () => {

        const rangeValue = themeSelectorSlider.value
        const selectedClass = classArr[rangeValue]
        
        body.className = ''
        body.classList.add(selectedClass)
        setToLocalStorage('theme', selectedClass)
    });
}