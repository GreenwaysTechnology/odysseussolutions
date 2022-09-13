function fetch(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function main() {
    // fetch('GET', 'https://jsonplaceholder.typicode.com/posts')
    // .then(function (posts) {
    //     console.log(posts);
    // })
    // .catch(function (err) {
    //     console.error('Augh, there was an error!', err.statusText);
    // });
    try {
        const posts = await fetch('GET', 'https://jsonplaceholder.typicode.com/posts')
        console.log(posts)
    }
    catch (err) {
        console.log(err)
    }
}
main()
