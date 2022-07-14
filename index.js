function qSort(array, left, right) {
    let middle = Math.round((left + right) / 2);
    let i = left;
    let j = right;
    if (i > j) return
    while (i <= j) {
        if (array[i] <= array[middle]) {
            i++;
        } else if (array[j] >= array[middle]) {
            j--;
        } else {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--
        }
    }
    if (middle < j) {
        [array[middle], array[j]] = [array[j], array[middle]];
        middle = j;
    }
    if (middle > i) {
        [array[middle], array[i]] = [array[i], array[middle]];
        middle = i;
    }
    qSort(array, left, middle - 1)
    qSort(array, middle + 1, right)
}

function main() {
    let array = [9, 7, 12, 55, 4, 8, 3, 2, 1, 0, 11, 5, 6]
    qSort(array, 0, array.length - 1)
    console.log(array, "<== array after sort")
}

main();
