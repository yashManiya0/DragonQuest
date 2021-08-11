const time_int = document.getElementsByClassName("time-int");
const secs1 = time_int[0];
const secs2 = time_int[1];
const secs3 = time_int[2];
const secs4 = time_int[3];
const secs5 = time_int[4];
const secs6 = time_int[5];
const secs7 = time_int[6];

let counter;
var score = 0;
var answered = [];

const marks10 = ["1-6", "2-5", "3-3", "4-4", "5-6", "6-2", "7-3"];
const marks20 = ["1-3", "2-1", "3-1", "4-6", "5-4", "6-5", "7-5"];
const marks40 = ["1-1", "2-3", "3-5", "4-1", "5-1", "6-3", "7-6"];
const marks60 = ["1-2", "2-4", "3-6", "4-2", "5-2", "6-1", "7-4"];
const marks80 = ["1-5", "2-2", "3-2", "4-3", "5-5", "6-4", "7-1"];
const marks90 = ["1-4", "2-6", "3-4", "4-5", "5-3", "6-6", "7-2"];


function startTimer(time, secs) {
    counter = setInterval(timer, 1000);

    function timer() {
        if (time < 0) {
            clearInterval(counter);
            selectFirst(secs);

        } else {
            if (time < 10) {
                time = "0" + time;
            }
            secs.textContent = time;
            time = parseInt(time) - 1;
        }

    }
}

function selectFirst(secs) {
    secs.style.color = "white";
    secs.style.background = "red";
    let n = secs.parentElement.parentElement.parentElement.className[13];
    document.getElementsByClassName("option" + n + "-1")[0].style.border = "5px solid rgb(104, 255, 200)";
}

function timer1() {
    if (secs1.textContent == 20) { startTimer(20, secs1); }
}

function next_2() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option1");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            selected = i.className.slice(-3, );
            d += 1;
            break;
        }
    }
    if (d == 1) {
        document.getElementsByClassName("question-box-1")[0].style.visibility = "hidden";
        document.getElementsByClassName("question-box-2")[0].style.visibility = "visible";
        let c = 0;
        var options = document.getElementsByClassName("option2");
        for (i of options) {
            if (i.style.border == "5px solid rgb(104, 255, 200)") {
                c += 1;
                break;
            }
        }
        if (c == 0) {
            startTimer(parseInt(secs2.textContent), secs2);
            if (!(answered.includes(1))) {
                add_marks(selected);
                answered.push(1);
            }
        }
    } else {
        alert("Please answer the current question to go on the next question.")
    }

}

function next_3() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option2");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            d += 1;
            selected = i.className.slice(-3, );
            break;
        }
    }
    if (d == 1) {
        document.getElementsByClassName("question-box-2")[0].style.visibility = "hidden";
        document.getElementsByClassName("question-box-3")[0].style.visibility = "visible";
        let c = 0;
        var options = document.getElementsByClassName("option3");
        for (i of options) {
            if (i.style.border == "5px solid rgb(104, 255, 200)") {
                c += 1;
                break;
            }
        }
        if (c == 0) {
            startTimer(parseInt(secs3.textContent), secs3);
            if (!(answered.includes(2))) {
                add_marks(selected);
                answered.push(2);
            }
        }
    } else {
        alert("Please answer the current question to go on the next question.")
    }

}


function next_4() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option3");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            d += 1;
            selected = i.className.slice(-3, );
            break;
        }
    }
    if (d == 1) {
        document.getElementsByClassName("question-box-3")[0].style.visibility = "hidden";
        document.getElementsByClassName("question-box-4")[0].style.visibility = "visible";
        let c = 0;
        var options = document.getElementsByClassName("option4");
        for (i of options) {
            if (i.style.border == "5px solid rgb(104, 255, 200)") {
                c += 1;
                break;
            }
        }
        if (c == 0) {
            startTimer(parseInt(secs4.textContent), secs4);
            if (!(answered.includes(3))) {
                add_marks(selected);
                answered.push(3);
            }
        }
    } else {
        alert("Please answer the current question to go on the next question.")
    }

}

function next_5() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option4");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            d += 1;
            selected = i.className.slice(-3, );
            break;
        }
    }
    if (d == 1) {
        document.getElementsByClassName("question-box-4")[0].style.visibility = "hidden";
        document.getElementsByClassName("question-box-5")[0].style.visibility = "visible";
        let c = 0;
        var options = document.getElementsByClassName("option5");
        for (i of options) {
            if (i.style.border == "5px solid rgb(104, 255, 200)") {
                c += 1;
                break;
            }
        }
        if (c == 0) {
            startTimer(parseInt(secs5.textContent), secs5);
            if (!(answered.includes(4))) {
                add_marks(selected);
                answered.push(4);
            }
        }
    } else {
        alert("Please answer the current question to go on the next question.")
    }

}

function next_6() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option5");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            d += 1;
            selected = i.className.slice(-3, );
            break;
        }
    }
    if (d == 1) {
        document.getElementsByClassName("question-box-5")[0].style.visibility = "hidden";
        document.getElementsByClassName("question-box-6")[0].style.visibility = "visible";
        let c = 0;
        var options = document.getElementsByClassName("option6");
        for (i of options) {
            if (i.style.border == "5px solid rgb(104, 255, 200)") {
                c += 1;
                break;
            }
        }
        if (c == 0) {
            startTimer(parseInt(secs6.textContent), secs6);
            if (!(answered.includes(5))) {
                add_marks(selected);
                answered.push(5);
            }
        }
    } else {
        alert("Please answer the current question to go on the next question.")
    }

}

function next_7() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option6");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            d += 1;
            selected = i.className.slice(-3, );
            break;
        }
    }
    if (d == 1) {
        document.getElementsByClassName("question-box-6")[0].style.visibility = "hidden";
        document.getElementsByClassName("question-box-7")[0].style.visibility = "visible";
        let c = 0;
        var options = document.getElementsByClassName("option7");
        for (i of options) {
            if (i.style.border == "5px solid rgb(104, 255, 200)") {
                c += 1;
                break;
            }
        }
        if (c == 0) {
            startTimer(parseInt(secs7.textContent), secs7);
            if (!(answered.includes(6))) {
                add_marks(selected);
                answered.push(6);
            }
        }
    } else {
        alert("Please answer the current question to go on the next question.")
    }

}

function prev_1() {
    document.getElementsByClassName("question-box-2")[0].style.visibility = "hidden";
    document.getElementsByClassName("question-box-1")[0].style.visibility = "visible";
    clearInterval(counter);
}

function prev_2() {
    document.getElementsByClassName("question-box-3")[0].style.visibility = "hidden";
    document.getElementsByClassName("question-box-2")[0].style.visibility = "visible";
    clearInterval(counter);

}

function prev_3() {
    document.getElementsByClassName("question-box-4")[0].style.visibility = "hidden";
    document.getElementsByClassName("question-box-3")[0].style.visibility = "visible";
    clearInterval(counter);

}

function prev_4() {
    document.getElementsByClassName("question-box-5")[0].style.visibility = "hidden";
    document.getElementsByClassName("question-box-4")[0].style.visibility = "visible";
    clearInterval(counter);

}

function prev_5() {
    document.getElementsByClassName("question-box-6")[0].style.visibility = "hidden";
    document.getElementsByClassName("question-box-5")[0].style.visibility = "visible";
    clearInterval(counter);

}

function prev_6() {
    document.getElementsByClassName("question-box-7")[0].style.visibility = "hidden";
    document.getElementsByClassName("question-box-6")[0].style.visibility = "visible";
    clearInterval(counter);

}

function select(a) {
    let n = a[6];
    let c = 0;
    let options = document.getElementsByClassName("option" + n);
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            c += 1;
            break;
        }
    }
    if (c == 0) {
        document.getElementsByClassName(a)[0].style.border = "5px solid rgb(104, 255, 200)";
        clearInterval(counter)
        document.querySelector(".question-box-" + n + " .time-str").textContent = "Done before";
    }
}

function add_marks(selected) {
    console.log(selected);
    if (marks10.includes(selected)) {
        score += 10;
    } else if (marks20.includes(selected)) {
        score += 20;
    } else if (marks40.includes(selected)) {
        score += 40;
    } else if (marks60.includes(selected)) {
        score += 60;
    } else if (marks80.includes(selected)) {
        score += 80;
    } else if (marks90.includes(selected)) {
        score += 90;
    } else {
        score += 40;
    }
    console.log(score);
}

function release_score() {
    console.log("Congrats you scored " + score);
    if (score <= 130) {
        console.log("Your spirit dragon should be Storm-Cutter")
        window.location.href = "stormcutter.html";
    } else if (130 < score && score <= 250) {
        console.log("Your spirit dragon should be Bewilder Beast")
        window.location.href = "bewilder.html";
    } else if (250 < score && score <= 380) {
        console.log("Your spirit dragon should be Night Fury")
        window.location.href = "nightfury.html";
    } else if (380 < score && score <= 480) {
        console.log("Your spirit dragon should be Zippleback")
        window.location.href = "zippleback.html";
    } else if (480 < score && score <= 580) {
        console.log("Your spirit dragon should be DeathGripper")
        window.location.href = "deathgripper.html";
    } else {
        console.log("Your spirit dragon should be Fireworm")
        window.location.href = "fireworm.html";
    }
}

function submit() {
    let d = 0;
    let selected;
    var options = document.getElementsByClassName("option7");
    for (i of options) {
        if (i.style.border == "5px solid rgb(104, 255, 200)") {
            d += 1;
            selected = i.className.slice(-3, );
            break;
        }
    }
    if (d == 1) {
        add_marks(selected);
        document.getElementsByClassName("question-box-7")[0].style.visibility = "visible";
        release_score();
    } else {
        alert("Please answer the current question to go on the next question.")
    }
}