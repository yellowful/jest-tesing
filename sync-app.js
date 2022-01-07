const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
]

// searchInput要從parameter傳進去，比較方便測試，這也就是為什麼要寫pure function的另一個原因了。
const googleSearch = (searchInput, db) => {
    const matches = db.filter(item => item.includes(searchInput))
    return matches.length > 3 ? matches.slice(0,3) : matches
}

// console.log(googleSearch('soup',googleDatabase));

module.exports = googleSearch;