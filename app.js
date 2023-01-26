class App 
{
    runapplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        
        this.achtergrond(0,0,g);
        this.sneeuwpop(100,100,g);
        this.houseApplication(50,400,g);
        this.houseApplication(500,400,g);
        this.weg(500,700,g);

    }

   

    achtergrond(x,y,g)
    {

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(x+0,y+600);
        g.lineTo(x+0,y+0);
        g.lineTo(x+1000,y+0);
        g.lineTo(x+1000,y+600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x+0,y+600);
        g.lineTo(x+1000,y+600);
        g.lineTo(x+1000,y+1000);
        g.lineTo(x+0,y+1000);
        g.closePath();
        g.stroke();
        g.fill()
        
     
    }

    
        

    houseApplication(x,y,g)
    {
        
        //line
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+150,y+50);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+300,y+300);
        g.lineTo(x+100,y+250);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+400,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+300,y+300);
        g.lineTo(x+400,y+250);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+300,y+200);
        g.lineTo(x+400,y+150);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "White";
        g.moveTo(x+370,y+120);
        g.lineTo(x+335,y+130);
        g.lineTo(x+340,y+170);
        g.lineTo(x+380,y+150);
        g.closePath();
        g.stroke();
        g.fill()

        
        

    
    }


    sneeuwpop(x,y,g)
    {   
        g.beginPath();
        g.fillStyle = "white";
        g.arc(525, 645, 45, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(525, 750, 60, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.arc(525, 565, 35, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "black";
        g.arc(525, 625, 5, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(525, 646, 5, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(525, 668, 5, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(512, 560, 5, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(540, 584, 3, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(515, 586, 3, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(527, 587, 3, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(504, 580, 3, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "Black";
        g.arc(537, 560, 5, 0, 2 * Math.PI);
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Orange";
        g.moveTo(x+425,y+470);
        g.lineTo(x+425,y+480);
        g.lineTo(x+450,y+475);
        g.closePath();
        g.stroke();
        g.fill()

       
    }
   
    weg(g,x,y)
    {
        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(x+0,y+200);
        g.lineTo(x+1000,y+200);
        g.lineTo(x+1000,y+1000);
        g.lineTo(x+0,y+1000);
        g.closePath();
        g.stroke();
        g.fill()

    }

    
}       

let app = new App();
app.runapplication();