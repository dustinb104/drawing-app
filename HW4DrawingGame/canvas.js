window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    

    // resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variables
    let painting = false;
    let erasing = false;
    

    function startPostion(){
        painting = true;
        draw(e);

    }

    function endPostion(){
        painting = false;
        ctx.beginPath();
        console.log(value);
    }

    

    function draw(e){
        if(painting && value == "pencil"){
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "black";

            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
        else if(painting && value == "redPen"){
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "red";

            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
        else if(painting && value == "bluePen"){
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "blue";

            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
        else if(painting && value == "greenPen"){
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = "green";

            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
        else if(painting && value == "erase"){
            ctx.lineWidth = 40;
            ctx.lineCap = "round";
            ctx.strokeStyle = "white";

            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
    }
    // event listeners
    canvas.addEventListener('mousedown', startPostion);
    canvas.addEventListener('mouseup', endPostion);
    canvas.addEventListener('mousemove', draw);
   

})

