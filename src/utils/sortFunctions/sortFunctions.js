export const sortByNames = (a, b) => {
    if (a.image.slice(a.image.indexOf('/') + 1, a.image.indexOf('_') - 8).split('-').join('') >
        b.image.slice(b.image.indexOf('/') + 1, b.image.indexOf('_') - 8).split('-').join('')) return 1
    else if (a.image.slice(a.image.indexOf('/') + 1, a.image.indexOf('_') - 8).split('-').join('') <
        b.image.slice(b.image.indexOf('/') + 1, b.image.indexOf('_') - 8).split('-').join('')) return -1
    else if (a.image.slice(a.image.indexOf('_') - 7, a.image.indexOf('_')) >
        b.image.slice(b.image.indexOf('_') - 7, b.image.indexOf('_'))) return 1
    else return -1
}

export const sortByCategory = (a, b) => {
    if (a.category > b.category) return 1
    else if (a.category < b.category) return -1
    else if (a.category === b.category) return sortByNames(a, b)
}