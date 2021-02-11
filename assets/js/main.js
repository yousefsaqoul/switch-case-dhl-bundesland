

function check()
{
    let myText;
    let bundesLand = document.getElementById("bundeslandInfo").value
     switch(bundesLand){
        case "Baden-Württemberg" :
            myText = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
        break ;
        case "Bayern" :
            myText = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
        break ;
        case "Berlin" :
            myText = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
        break ;
        case "Brandenburg" :
            myText = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
        break ;
        case "Bremen" :
            myText = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
        break ;
        case "Hamburg" :
            myText = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
        break ;
        case "Hessen" :
            myText = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
        break ;
        case "Mecklenburg-Vorpommern" :
            myText = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
        break ;
        case "Niedersachsen" :
            myText = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
        break ;
        case "Nordrhein-Westfalen" :
            myText = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
        break ;
        case "Rheinland-Pfalz" :
            myText = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
        break ;
        case "Saarland" :
            myText = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
        break ;
        case "Sachsen" :
            myText = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
        break ;
        case "Sachsen-Anhalt" :
            myText = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
        break ;
        case "Schleswig-Holstein" :
            myText = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
        break ;
        case "Thüringen" :
            myText = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
        break ;
        default :
        myText = "Ein solches Bundesland gibt es in Deutschland nicht." 

     }
        document.getElementById('bundeslandInfoErgebnis').innerHTML = myText


}
// ------------------------Bundesland end ------------------------


function showtxt(){
    let mylist = document.getElementById('mylist').value

    let baketInfo ;
   
    switch (mylist) {
        case "0" :
            baketInfo = " <b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm ";
        break;
        case "1" :
            baketInfo = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
        break;
        case "2" :
            baketInfo = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
        break;
        case "3" :
            baketInfo = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";
        break;
        default: 
            baketInfo = "<b>Extra große Größe</b>"

         


    }


        document.getElementById('masse').innerHTML = baketInfo;


}




// JS Assets
	


// <b>DHL Paket 2 kg</b> <br>
//       bis 60 x 30 x 15 cm

 

// <b>DHL Paket 10 kg</b> <br>
//       bis 120 x 60 x 60 cm

// "<b>Extra große Größe</b>
