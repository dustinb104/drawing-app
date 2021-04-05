window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    //let colorInput = document.getElementById("color");
    
    

    // resizing
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    canvas.height = 690;
    canvas.width = 1580;

    // variables
    let painting = false;
    let erasing = false;
    let color = value;
    

    var background = new Image();
        background.src = localStorage.getItem("canvasData");

        background.onload = function(){
            ctx.drawImage(background,0,0);
        }

    function startPostion(){
        painting = true;
        draw(e);

    }

    function endPostion(){
        painting = false;
        ctx.beginPath();
        
    }

    function newBackground(){
        var background = new Image();
        background.src = newImage;

        background.onload = function(){
            ctx.drawImage(background,0,0);
        }
    }

    function draw(e){

        switch (value){
            case "pencil":
                color = "black";
                break;
            case "redPen":
                color = "red";
                break;
            case "bluePen":
                color = "blue";
                break;
            case "greenPen":
                color = "green";
                break;
            case "erase":
                color = "white";
                break;
        }

        if(painting){ 
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.strokeStyle = color;

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

