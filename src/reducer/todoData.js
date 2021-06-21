function data(data = {
    index: 2,
    list: [
        {
            id: 1,
            title: "给学员留一个大惊喜",
            done: true
        },
        {
            id: 2,
            title: "今晚上王者",
            done: false
        }
    ]
}, action) {
    switch (action.type) {
        case "add":
            return {
                index: data.index + 1,
                list: [
                    ...data.list,
                    {
                        id: data.index + 1,
                        title: action.title,
                        done: false
                    }
                ]
            }
        case "remove":
            return {
                index: data.index,
                list: data.list.filter(item => item.id !== action.id)
            }
        case "clear":
            return {
                index: data.index,
                list: data.list.filter(item => item.done === false)
            }
        //editCompleted
        case "changeDone":
            return {
                index: data.index,
                list: data.list.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            done: action.done
                        }
                    }
                    return item
                })
            }
        case "editCompleted":
            return {
                index: data.index,
                list: data.list.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            title: action.title
                        }
                    }
                    return item
                })
            }
        default:
            return data
    }
}

export { data }