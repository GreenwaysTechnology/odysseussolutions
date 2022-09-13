
function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
}

async function main() {
    try {
        // const response = await getPosts()
        // const posts = await response.json()
        // console.log(posts)
        const posts = await (await getPosts()).json()
        console.log(posts)

    }
    catch (err) {
        console.log(err)
    }
}
main()