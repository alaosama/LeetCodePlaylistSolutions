/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
    let start = Date.now();
    return new Promise(resolve => {
        setTimeout(() => {
            let end = Date.now();
            let elapsed = end - start;
            let remaning = Math.max(0, 30 - elapsed);
            setTimeout(() => resolve(millis), remaning);
        }, millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
