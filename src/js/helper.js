export const getFromLocalStorage = property => localStorage.getItem(property)


export const setToLocalStorage = (property, value) => {
    localStorage.setItem(property, value)
}