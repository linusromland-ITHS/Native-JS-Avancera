filter = (arr, func) => {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(func(element)) filteredArray.push(element);
    }
    return filteredArray;
}