// Activity Selection Problem - Done
//     input: startTimes = [1, 3, 0, 5, 8, 5], endTimes = [2, 4, 6, 7, 9, 9]
//     output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 7 ], [ 8, 9 ] ]

function activitySelection(startTimes, endTimes) {
    let activities = [];
    for(let i = 0; i < startTimes.length; i++) {
        activities.push([startTimes[i], endTimes[i]]);
    }
    
    activities.sort(function (a, b) {return a[1] - b[1]});

    let selectedActivities = [activities[0]];
    let lastEndTime = activities[0][1];
    
    for(let i = 0; i < startTimes.length; i++) {
        if(activities[i][0] >= lastEndTime) {
            selectedActivities.push(activities[i]);
            lastEndTime = activities[i][1];
        }
    }
    return selectedActivities;
}

const startTimes = [1, 3, 0, 5, 8, 5];
const endTimes = [2, 4, 6, 7, 9, 9];

const result = activitySelection(startTimes, endTimes);
console.log(result);