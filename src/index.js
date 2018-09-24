/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let triangles = 0;
    let ignoredIndexes = [];
    for ( let i = 0; i < preferences.length; i++ ){
        let first;
        let second;
        let third;
        if(ignoredIndexes.includes(i)){
            continue;
        }
        first = preferences[i];
        if( ignoredIndexes.includes(first - 1)){
            continue;
        }
        else{
            second = preferences[first - 1];
        }
        if( ignoredIndexes.includes(second - 1)){
            continue;
        }
        else{
            third = preferences[second - 1];
        }
        if( (third == i + 1) && (first !== second) && (second!== first) ){
            triangles++;
            ignoredIndexes.push(i);
            ignoredIndexes.push(first - 1);
            ignoredIndexes.push(second - 1);
        }
    }
    return triangles;
};
