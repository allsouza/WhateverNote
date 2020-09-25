export const fetchNotebooks = () => (
    $.ajax({
        url: `/api/noteboooks`
    })
)

export const fetchNotebook = id => (
    $.ajax({
        url: `/api/noteboooks/${id}`
    })
)

export const createNotebook = notebook => (
    $.ajax({
        url: `/api/noteboooks`,
        method: "POST",
        data: {notebook}
    })
)

export const updateNotebook = notebook => (
    $.ajax({
        url: `/api/noteboooks/${notebook.id}`,
        method: "PATCH",
        data: {notebook}
    })
)

export const deleteNotebook = id => (
    $.ajax({
        url: `/api/noteboooks/${id}`,
        method: "DELETE"
    })
)