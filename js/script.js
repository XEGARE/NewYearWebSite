$(document).ready(function () {

function get_time() {
    var time = new Date()
    var newYear = new Date((parseInt(time.getFullYear()) + 1) + '-01-01 00:00:00')
    var totalRemains = newYear - time
    
    if (totalRemains>1){
        var RemainsSec = parseInt(totalRemains/1000)
        var RemainsFullDays = parseInt(RemainsSec/(24*60*60))
        var secInLastDay = RemainsSec - RemainsFullDays*24*3600
        var RemainsFullHours = parseInt(secInLastDay/3600)
        if (RemainsFullHours < 10) {
            RemainsFullHours="0"+RemainsFullHours
        };
        var secInLastHour = secInLastDay - RemainsFullHours*3600
        var RemainsMinutes = parseInt(secInLastHour/60)
        if (RemainsMinutes < 10) {
            RemainsMinutes="0"+RemainsMinutes
        };
        var lastSec=secInLastHour-RemainsMinutes*60
        if (lastSec < 10) {
            lastSec="0"+lastSec
        };
    }
    $("#day").html(RemainsFullDays)
    $("#hour").html(RemainsFullHours)
    $("#minute").html(RemainsMinutes)
    $("#second").html(lastSec)

    setTimeout(get_time,1000);
}

get_time()
})
