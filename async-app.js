const fetch = require('node-fetch');

// fetch('https://api.chucknorris.io/jokes/search?query=crazy')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })


const jokes = async (fetch) => {
    const res = await fetch('https://api.chucknorris.io/jokes/search?query=crazy');
    const data = await res.json();
    return data
}

jokes(fetch)
// .then(data => {
//     console.log(data)
// })

module.exports = jokes;