// find occurences in arrary
function numberOfOccurencesInArray(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            count++;
        }
    }
    return count;
}