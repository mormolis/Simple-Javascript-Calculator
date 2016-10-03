var result = 0;
var praxis = new Array();
var counter = 0;
var secoma = true;


function onMouseClick(){
   
    switch (document.activeElement.value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":  
            if( document.calc.panel.value == "0"){
                 document.calc.panel.value ="";
            }
            document.calc.panel.value += document.activeElement.value; 
            
            break;
        case "coma":
            if(secoma){
             document.calc.panel.value += ".";
                secoma = false;
            }
            break;
        case "+":
           inPlace("+");
            break;
        case "-":
            inPlace("-");
            break;
        case "X":
            inPlace("*");
            break;
        case "/":
            inPlace("/");
            break;
        
            
        case "=":
            secoma = true;
            praxis[counter] = document.calc.panel.value;
           // alert(counter);
           for(let i=0; i<counter; i++){
               if(!isNaN(praxis[i])){
                   result = result + Number(praxis[i]);
               }else{
                   
                       while(isNaN(praxis[i+1])){
                           i++;
                       }
                   if(praxis[i]=="+"){
                       result = result+ Number(praxis[i+1]);
                       i++;
                       
                   }else if(praxis[i]=="-"){
                       result = result - Number(praxis[i+1]);
                       i++;
                   }else if(praxis[i]=="*"){
                       result = result * Number(praxis[i+1]);
                       i++;
                   } else if (praxis[i]=="/"){
                       if(praxis[i+1]!="0"){
                       result = result / Number(praxis[i+1]);
                       i++;} else {
                           result = "error";
                       }
                   }
               }
           }
            document.calc.panel.value = result;
            counter =0;
            result =0;
            break;
        case "C":
            secoma = true;
            document.calc.panel.value = "0";
            result = 0;
            counter = 0;
    	    break;
            
            }
    
    }

function inPlace(tipraxi){
     secoma = true;
	    if(document.calc.panel.value!=""){
            praxis[counter] = document.calc.panel.value;
            counter++;}
            praxis[counter] = tipraxi;
            counter++;
            document.calc.panel.value = "";

}

    
