const findMatching = (names,passed) => {
    return names.filter((element) => element.toUpperCase() === passed.toUpperCase())

}



const fuzzyMatch = (names,firstLetters) => {
    return names.filter((element) => element.toUpperCase().indexOf(firstLetters[0].toUpperCase()) === 0)
}

const matchName = (names, match) => {
    return names.filter((element) => element.name === match)
}
