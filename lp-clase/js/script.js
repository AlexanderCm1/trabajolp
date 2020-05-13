    class Operaciones{



        constructor(n1,n2){
            this.numero1 = parseFloat(n1);
            this.numero2 = parseFloat(n2);
            
        }
        suma(){
            return (this.numero1+this.numero2);
        }
        resta (){
            return (this.numero1-this.numero2);
        }
        muti(){
            return (this.numero1*this.numero2);
        }
        division(){
            return (this.numero1/this.numero2);
        }
        
    }

    function calcular(){
 
        var res = document.getElementById("resultado");
        var oper = new Operaciones(document.getElementById("n1").value,
        document.getElementById("n2").value );
        
        if(document.getElementById("op1").checked == true ){
            
           res.value = oper.suma();
        }
        else if(document.getElementById("op2").checked == true){
            res.value = oper.resta();
        }
        else if(document.getElementById("op3").checked == true){
            res.value = oper.muti();
        }
        else if(document.getElementById("op4").checked == true){
            res.value = oper.division();
        }

    }
    
