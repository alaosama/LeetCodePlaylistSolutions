/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let pre = 0;
    let curr = 1;
    yield pre;
    yield curr;
    while (true) {
        const next = pre + curr;
        yield next;
        pre = curr;
        curr= next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
