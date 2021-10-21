import {body, themeSelectorBtn} from './variables'
import {setToLocalStorage, getFromLocalStorage} from './helper'

export function initializeTheme() {
    const theme = getFromLocalStorage('theme')
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    console.log(systemTheme);

    body.className = ''
    body.classList.add(theme)
}


export function themeToggle() {

    themeSelectorBtn.addEventListener("click", () => {
        const classArr = ["dark", "light", "custom"];
    
        const arrLength = classArr.length;
    
        for (let i = 0; i < arrLength; i++) {
            if (body.classList.contains(classArr[i])) {
                body.classList.toggle(classArr[i], false);
                
                const itemNo = i !== arrLength - 1 ? i+1 : 0;

                body.classList.toggle(classArr[itemNo], true)

                setToLocalStorage('theme', classArr[itemNo])
                return;
            }
        }
    });
}