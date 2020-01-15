//Given a collection of intervals, merge all overlapping intervals. 
 var merge = function(intervals) {
     for(let i = 0; i < intervals.length; i++) {
         if(intervals[i][1] > intervals[i+1][0]) {
             intervals[i] = [intervals[i][0], intervals[i+1][1]];
             return;
         }
     }
 } 

 var merge2 = function(intervals) {
    if (!intervals.length) return intervals;
    intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
    var prev = intervals[0];
    var res = [prev];
    for(var curr of intervals) {
        if(curr.start <= prev.end) {
            prev.end = Math.max(prev.end, curr.end)
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res;
 }

var merge3 = function(intervals) {
    if(!intervals.length ===0) {
        return [];
    }
    intervals.sort(function(a, b) {
        a.start === b.start ? a.end - b.end : a.start - b.start;
    })
    const result = [intervals[0]];
    for(let i = 0; i < intervals.elngth; i++) {
        let time = result[result.length - 1];
        if(intervals[i].start <= time.end) {
            if(interals[i].end < time.end) {
                time.end = intervals[i].end;
            }
        } else {
            result.push(intervals[i]);
        }
    }
    return result; 
}

var merge4 = function(intervals) {
    // 1. Sort
    intervals.sort((a, b) => a[0] - b[0]);
    // 2. Traverse
    if(!intervals.length)
        return [];
    let begin = intervals[0][0],
        end = intervals[0][1];
    let res = [];
        
    for(let i = 1; i < intervals.length; ++i) {
        if(intervals[i][0] > end) {
            res.push([begin, end]);
            begin = intervals[i][0];
            end = intervals[i][1]
        } else {
            end = Math.max(end, intervals[i][1])
        }
    }
    res.push([begin, end]);

    return res;
}