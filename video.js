window.onload = function (ev) {
    var keys=document.querySelectorAll(".key");
    var hash = {
        49: {
            div: 0,
            sound:400+400*(1/8)
        },
        50: {
            div: 1,
            sound:400+400*(2/8)
        },
        51: {
            div: 2,
            sound:400+400*(3/8)
        },
        52: {
            div: 3,
            sound:400+400*(4/8)
        },
        53: {
            div: 4,
            sound:400+400*(5/8)
        },
        54: {
            div: 5,
            sound:400+400*(6/8)
        },
        55: {
            div: 6,
            sound:400+400*(7/8)
        },
        56: {
            div: 7,
            sound:400+400*(1)
        }

    }
    var audio=new AudioContext();
    var os;
    var flag=true;

    document.onkeydown = function (ev) {
        var key = ev.keyCode;
        if(!flag){
            return
        }
        flag=false

        os=audio.createOscillator();
        var as=audio.createAnalyser();
        var gain=audio.createGain();
        os.connect(as)
        os.connect(gain)
        gain.connect(audio.destination);

        os.frequency.setValueAtTime(hash[key].sound,audio.currentTime)
        os.start(0)


        keys[hash[key].div].style.boxShadow="0 0 10px #000"

    }

    document.onkeyup = function (ev) {
        flag=true;
        var key = ev.keyCode;
        os.stop(audio.currentTime);

        keys[hash[key].div].style.boxShadow="none"

    }
}