export const getId = (url?: string): string => {
    if (!url) return '';
    return url.split('/')[url.split('/').length - 2]
}


export const debounce = (func: () => void, delay: number) => {
    let timerId: number;
    return (...args: []) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    }
}