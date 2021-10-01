forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        func(element);
    }
}