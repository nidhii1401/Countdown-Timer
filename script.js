

let endDate = new Date("14 Jan,2025 00:00:00").getTime();
let startDate = new Date().getTime();


let x = setInterval(  function updateTimer(){
    let now = new Date().getTime();

    const distaceCover = now - startDate;
    // time -> mili seconds

    const distancePending = endDate - now;

    // /Calculate days, min, hrs, secs

    //  1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMilis = 24 * 60 * 60 * 1000 ;
    const days = Math.floor( distancePending / oneDayInMilis );

    const oneHrInMilis = (60*60*1000);
    const hrs = Math.floor((distancePending % oneDayInMilis ) / oneHrInMilis);

    const oneMinInMili = (60*1000);
    const mins = Math.floor( (distancePending % oneHrInMilis) / oneMinInMili );


    const secs = Math.floor( (distancePending % oneMinInMili ) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;


    // width percentage for progress bar

    const totalDistance = endDate - startDate;

    const percentageDistance = (distaceCover / totalDistance )*100;

    // set width for progress bar

    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY🎉";
        document.getElementById("progress-bar").style.width = "100%";

    }
 
}, 1000);