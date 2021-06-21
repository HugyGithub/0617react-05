export function count(count = 10, action) {
    switch (action.type) {
        case "plus":
            return count + action.nub
        case "mius":
            return count - action.nub
        default:
            return count
    }
}