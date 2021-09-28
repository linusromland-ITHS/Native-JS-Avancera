reverse = array => {

    let arr = (array).reduceRight((previous, current) => {
        previous.push(current);
        return previous;
    }, []);

    return arr
}