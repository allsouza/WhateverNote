export function formatDayMonthYear(dateParam){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date(dateParam)
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

export function formatDayMonth(dateParam){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date(dateParam)
        return `${months[date.getMonth()]} ${date.getDate()}`
    }