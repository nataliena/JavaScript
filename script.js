

    $(".nav-item").click(function(){
      $(".nav-item").removeClass('active');
         $(this).addClass('active');
 
     }) 
     let block=$(".block")
     console.log(block)

     console.log( $(".nav-link"))

     $(".nav-link").click(function(){
       debugger;
       $(".block").removeClass('active');
       $(".block[data-blockname="+$(this).attr('data-linkname')+"]").addClass('active');

      //var $item=$(this);
       //var $listofclass=$item.attr('class').split(/\s+/);
       //var $block= $listofclass[1];
       //$item.attr('href');
     // var $linkname=$item.attr('data-linkname');
      //$(".block[data-blockname="+$linkname+"]").addClass('active');


      //$(".block").removeClass('active');
      //$(".block."+$block).addClass('active');
      
    }) 


  

    /* Loan caculate */
    function showpay() {
        if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
            (document.calc.months.value == null || document.calc.months.value.length == 0)
       ||
            (document.calc.rate.value == null || document.calc.rate.value.length == 0))
        { document.calc.pay.value = "";
        }
        else
        {
        var princ = document.calc.loan.value;
        var term  = document.calc.months.value;
        var intr   = document.calc.rate.value / 1200;
        document.calc.pay.value = princ * intr / (1 - (Math.pow(1/(1 + intr), term)));
        }
       
       // payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))
       
       }
       /* Deposit calculate */
       function calculate()
       {
           p = document.getElementById("p").value;//Amount
          /*  n = document.getElementById("n").value; // no. of compoundings per year */
           t = document.getElementById("t").value; // no. of years
           r = document.getElementById("r").value;//Rate
         
           result = document.getElementById("result");
           

           // The equation is A = p * [[1 + (r/n)] ^ nt]
           A = (p* Math.pow((1 + (r/(1*100))), (1*t)));//1 is n if n=1 compoundings per year
           B=(A.toFixed(2) - p).toFixed(2);

           // toFixed is used for rounding the amount with two decimal places.
           result.innerHTML = "The total amount is " + A.toFixed(2);

           result.innerHTML += "<br> The interest is " + B /* (A.toFixed(2) - p).toFixed(2) */;
           $("#reset").click(function(){
            A=0;
            B=0;
            result.innerHTML = "The total amount is " + A.toFixed(2);

            result.innerHTML += "<br> The interest is " + B;
           })
           
       }
    
      
    let deposits=[];
  
   
       /*Deposits JSON api*/ 
       
       async function getDepositData(){
       const depositUrl="https://raw.githubusercontent.com/nataliena/JavaScript/master/server/deposits.json";
        const response = await fetch(depositUrl);
        const result = await response.json();
         
        const data=result.map(deposits=>({
           id:deposits.id,
          name:deposits.name,
          minimumAmountOfDepositing:deposits.minimumAmountOfDepositing,
          paymentOfTheInterest:deposits.paymentOfTheInterest,
          typeOfInterestRate:deposits.typeOfInterestRate,
          tenor:deposits.tenor,
          methodOfCalculationOfTheInterest:deposits.methodOfCalculationOfTheInterest,
          redepositing:deposits.redepositing,
          additionalInvestment:deposits.additionalInvestment,
          partialWithdrawal:deposits.partialWithdrawal,
          earlyTermination:deposits.earlyTermination,
          requiredDocuments:deposits.requiredDocuments

           
        }));  
        deposits.push(...data);

   
        
         

}; 


 async function showDepositDetails(deposits){
    let p1 =document.getElementById("depDetails1Text");
     let p2 =document.getElementById("depDetails2Text");
    let p3 =document.getElementById("depDetails3Text");
    let p4 =document.getElementById("depDetails4Text"); 
    
   
    
for (let item of deposits){
    
    switch (item.id){
      
    case "01":      
        
    p1.innerText=`       
          Minimum Amount Of Depositing: ${item.minimumAmountOfDepositing},
          Payment Of The Interest: ${item.paymentOfTheInterest},
          Type Of Interest Rate:${item.typeOfInterestRate},
          Tenor: ${item.tenor},
          Method Of Calculation Of TheInterest: ${item.methodOfCalculationOfTheInterest},
          Redepositing: ${item.redepositing},
          Additional Investment: ${item.additionalInvestment},
          Partial Withdrawal: ${item.partialWithdrawal},
          Early Termination: ${item.earlyTermination},
          Required Documents: ${item.requiredDocuments}`
          break;

    case "02":
            
                p2.innerText=`       
                Minimum Amount Of Depositing: ${item.minimumAmountOfDepositing},
                Payment Of The Interest: ${item.paymentOfTheInterest},
                Type Of Interest Rate:${item.typeOfInterestRate},
                Tenor: ${item.tenor},
                Method Of Calculation Of TheInterest: ${item.methodOfCalculationOfTheInterest},
                Redepositing: ${item.redepositing},
                Additional Investment: ${item.additionalInvestment},
                Partial Withdrawal: ${item.partialWithdrawal},
                Early Termination: ${item.earlyTermination},
                Required Documents: ${item.requiredDocuments}`
                break;

          
         case "03":
                        p3.innerText=`       
                        Minimum Amount Of Depositing: ${item.minimumAmountOfDepositing},
                        Payment Of The Interest: ${item.paymentOfTheInterest},
                        Type Of Interest Rate:${item.typeOfInterestRate},
                        Tenor: ${item.tenor},
                        Method Of Calculation Of TheInterest: ${item.methodOfCalculationOfTheInterest},
                        Redepositing: ${item.redepositing},
                        Additional Investment: ${item.additionalInvestment},
                        Partial Withdrawal: ${item.partialWithdrawal},
                        Early Termination: ${item.earlyTermination},
                        Required Documents: ${item.requiredDocuments}`
                        break;             
          
          case "04":
            p4.innerText=`       
            Minimum Amount Of Depositing: ${item.minimumAmountOfDepositing},
            Payment Of The Interest: ${item.paymentOfTheInterest},
            Type Of Interest Rate:${item.typeOfInterestRate},<br>
            Tenor: ${item.tenor},
            Method Of Calculation Of TheInterest: ${item.methodOfCalculationOfTheInterest},
            Redepositing: ${item.redepositing},
            Additional Investment: ${item.additionalInvestment},
            Partial Withdrawal: ${item.partialWithdrawal},
            Early Termination: ${item.earlyTermination},
            Required Documents: ${item.requiredDocuments}`
            break;
          
            default:
                `There is no data`;
                

          }
        }
 
    } 
    $("#depDetails1").click( async function(){
       await getDepositData();
        showDepositDetails(deposits)
  })
  
  $("#depDetails2").click(async function (){
    await getDepositData();
      showDepositDetails(deposits);
  })
  
  $("#depDetails3").click(async function(){
    await getDepositData();
      showDepositDetails(deposits);
  })
  
  $("#depDetails4").click(async function(){
    await getDepositData();
      showDepositDetails(deposits);
  })


    /*Exchange Rates api*/ 
    let rates=[];
    async function getNbrmData(){
      let today = new Date();
     let dd = today.getDate();
     let mm = today.getMonth()+1; 
     let yyyy = today.getFullYear();
     if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
console.log(today)
        const urlNbrm=`https://api.php.mk/nbrm/v1.0/${today}?token=2e417dc67f7e1c4a2853a5d513ca2557`;
        const response = await fetch(urlNbrm);
        const result = await response.json();
         
       /*  const resultData=result.data; */
        const result1=result.data.map(rates=>({
            currency:rates.oznaka,
            buying:rates.kupoven,
           selling:rates.prodazen,
           middle:rates.sreden,
           date:rates.datum

           
        }));  
        rates.push(...result1);
       /*   console.log(rates) */
           
        showNbrmData (rates); 
        
        showNbrmDate (rates); 

    
       

    }  
 
    

function showNbrmData (rates){
    let table =document.getElementById("tableRates");
       
       for (let item of rates) {
       
       table.innerHTML += `<tr>   
       <td>${item.currency}</td>
       <td>${item.buying}</td>
       <td>${item.middle}</td>
       <td>${item.selling}</td>
    <tr>`;
    
          } 
          return table;
      
        }
    function showNbrmDate (rates){
     let p=document.getElementById("dateRates")
               
     for (let item of rates) {
         p.innerText=`Date: ${item.date}`;
               
            
          } 
      return p;
          
      
     }   

     getNbrmData();
  
        
           

        /* Exchange Rates */

        
        
        let curr=document.getElementById("currency1")
        console.log(curr.value)
        currValue=curr.value;
        let currAmount=document.getElementById("currValue")
        console.log(currAmount.value)



        $("#submit").click(function(){
          console.log($('#currency1').val());
          console.log($("#currValue").val());
        });

        var tableOriginalState = $("#tableConverter").html();
        
     
        function resetTable(){      

        $("#tableConverter").html(tableOriginalState);
        $("#currency1").val("");
        $("#currValue").val("");  
       
      
        }

    
      let fillConverter=document.getElementById("tableConverter")
            /* console.log(fillConverter)  */
            let table =fillConverter;    
            
            
             
       
           function fillConverterFunction(rates){
            
                    
            for(let item of rates){
            
            switch (curr.value){
            case `MKD`:
              let resultMkd =((currAmount.value)/(item.middle)).toFixed(2);
       
              table.innerHTML+=
            `<tr>   
            <td id="1"> <b>${item.currency}</b>:  ${resultMkd} </td>                
            </tr>` 
         
                 
          
             break;  
            
            case `EUR`:
              let tempValueEur=rates.filter(x=>x.currency==="EUR");
              for (let item1 of tempValueEur){
            /*   console.log(tempValueEur) */
              let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>                
            </tr>` 
           if(item.currency===item1.currency){
              table.deleteRow(-1);
            } 
                   
            }
            break;

            case `USD`:
              let tempValueUsd=rates.filter(x=>x.currency==="USD");
              for (let item1 of tempValueUsd){
             /*  console.log(tempValueUsd) */
              let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
             <td> <b>${item.currency}</b>:  ${result} </td>               
             </tr>` 
            if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;
            case `GBP`:
              let tempValueGbp=rates.filter(x=>x.currency==="GBP");
              for (let item1 of tempValueGbp){
          
              let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>              
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `CHF`:
              let tempValueChf=rates.filter(x=>x.currency==="CHF");
              for (let item1 of tempValueChf){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>            
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `SEK`:
              let tempValueSek=rates.filter(x=>x.currency==="SEK");
              for (let item1 of tempValueSek){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>                
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `NOK`:
              let tempValueNok=rates.filter(x=>x.currency==="NOK");
              for (let item1 of tempValueNok){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>              
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `JPY`:
              let tempValueJpy=rates.filter(x=>x.currency==="JPY");
              for (let item1 of tempValueJpy){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>             
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `DKK`:
              let tempValueDkk=rates.filter(x=>x.currency==="DKK");
              for (let item1 of tempValueDkk){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>                 
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `CAD`:
              let tempValueCad=rates.filter(x=>x.currency==="CAD");
              for (let item1 of tempValueCad){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>                
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            case `AUD`:
              let tempValueAud=rates.filter(x=>x.currency==="AUD");
              for (let item1 of tempValueAud){
             let result =(((currAmount.value)*(item1.middle))/(item.middle)).toFixed(2);
              table.innerHTML+=
            `<tr>   
            <td> <b>${item.currency}</b>:  ${result} </td>                 
            </tr>` 
         if(item.currency===item1.currency){
              table.deleteRow(-1);
            }   
                   
            }
            break;

            default:
              `There is no data`;
            
            
          }
          }
         
        } 
           
        $("#submit").click(function(){
        
          fillConverterFunction(rates);
        })

      
       

       
       /*  $('#resetConverter').click( function(e){
          e.preventDefault();
          $("#converter1")[0].reset.click();
      }) */
      
    
      
  
/*Loans API*/ 

let loans=[];
  
   
             
       async function getLoansData(){
       const loansUrl="https://raw.githubusercontent.com/nataliena/JavaScript/master/server/loans.json";
        const response = await fetch(loansUrl);
        const result = await response.json();
         
        const data=result.map(loans=>({
            id:loans.id,
          name:loans.name,
          loanPurpose:loans.loanPurpose,
          amount:loans.amount,
          currency:loans.currency,
          tenor:loans.tenor,
          interestRate:loans.interestRate,
          upfrontFee:loans.upfrontFee,
          feeForPrepayment:loans.feeForPrepayment,
          minimumIncome:loans.minimumIncome,
          theAge:loans.theAge,
          creditworthiness:loans.creditworthiness,
          requiredDocuments:loans.requiredDocuments

           
        }));  
        loans.push(...data);
        

              

}; 

console.log(loans)

function showLoansDetails(loans){
    
    let p1 =document.getElementById("loansDetails1Text");
     let p2 =document.getElementById("loansDetails2Text");
    let p3 =document.getElementById("loansDetails3Text");
    let p4 =document.getElementById("loansDetails4Text"); 
    let p5 =document.getElementById("loansDetails5Text"); 
    let p6=document.getElementById("loansDetails6Text"); 
    
for (let item of loans){
    
    switch (item.id){
      
    case "01":
       
        
    p1.innerText=`       
          Loan Purpose: ${item.loanPurpose},
          Amount: ${item.amount},
          Currency:${item.currency},
          Tenor: ${item.tenor},
          Interest Rate: ${item.interestRate},
          Up front fee: ${item.upfrontFee},
          Fee for prepayment: ${item.feeForPrepayment},
          Minimum Income: ${item.minimumIncome},
          Age: ${item.theAge},
          CreditWorthiness:${item.creditworthiness},
          Required Documents: ${item.requiredDocuments}`
          break;    

    case "02":
            
          p2.innerText=`       
          Loan Purpose: ${item.loanPurpose},
          Amount: ${item.amount},
          Currency:${item.currency},
          Tenor: ${item.tenor},
          Interest Rate: ${item.interestRate},
          Up front fee: ${item.upfrontFee},
          Fee for prepayment: ${item.feeForPrepayment},
          Minimum Income: ${item.minimumIncome},
          Age: ${item.theAge},
          CreditWorthiness:${item.creditworthiness},
          Required Documents: ${item.requiredDocuments}`
          break;    

          
         case "03":
            p3.innerText=`       
            Loan Purpose: ${item.loanPurpose},
            Amount: ${item.amount},
            Currency:${item.currency},
            Tenor: ${item.tenor},
            Interest Rate: ${item.interestRate},
            Up front fee: ${item.upfrontFee},
            Fee for prepayment: ${item.feeForPrepayment},
            Minimum Income: ${item.minimumIncome},
            Age: ${item.theAge},
            CreditWorthiness:${item.creditworthiness},
            Required Documents: ${item.requiredDocuments}`
            break;    
                       
                  
                        
          
          case "04":
            p4.innerHTML=`       
            Loan Purpose: ${item.loanPurpose},<br>
          Amount: ${item.amount},<br>
          Currency:${item.currency},<br>
          Tenor: ${item.tenor},<br>
          Interest Rate: ${item.interestRate},<br>
          Up front fee: ${item.upfrontFee},<br>
          Fee for prepayment: ${item.feeForPrepayment},<br>
          Minimum Income: ${item.minimumIncome},<br>
          Age: ${item.theAge},<br>
          CreditWorthiness:${item.creditworthiness},<br>
          Required Documents: ${item.requiredDocuments}<br>`
          break;    

           case "05":
            p5.innerHTML=`       
            Loan Purpose: ${item.loanPurpose},<br>
          Amount: ${item.amount},<br>
          Currency:${item.currency},<br>
          Tenor: ${item.tenor},<br>
          Interest Rate: ${item.interestRate},<br>
          Up front fee: ${item.upfrontFee},<br>
          Fee for prepayment: ${item.feeForPrepayment},<br>
          Minimum Income: ${item.minimumIncome},<br>
          Age: ${item.theAge},<br>
          CreditWorthiness:${item.creditworthiness},<br>
          Required Documents: ${item.requiredDocuments}<br>`
          break;    

           case "06":
            p6.innerHTML=`       
            Loan Purpose: ${item.loanPurpose},<br>
          Amount: ${item.amount},<br>
          Currency:${item.currency},<br>
          Tenor: ${item.tenor},<br>
          Interest Rate: ${item.interestRate},<br>
          Up front fee: ${item.upfrontFee},<br>
          Fee for prepayment: ${item.feeForPrepayment},<br>
          Minimum Income: ${item.minimumIncome},<br>
          Age: ${item.theAge},<br>
          CreditWorthiness:${item.creditworthiness},<br>
          Required Documents: ${item.requiredDocuments}<br>`
          break;    

       
            default:
                `There is no data`;
                

          }
        }
 
    } 

    
    $("#loansDetails1").click( async function(){
       await getLoansData();
       
        showLoansDetails(loans);
  })
  
  $("#loansDetails2").click(async function (){
    await getLoansData();
       
        showLoansDetails(loans);
  })
  
  $("#loansDetails3").click(async function(){
    await getLoansData();
       
        showLoansDetails(loans);
  })
  
  $("#loansDetails4").click(async function(){
    await getLoansData();
       
    showLoansDetails(loans);
  })

  $("#loansDetails5").click(async function(){
    await getLoansData();
       
        showLoansDetails(loans);
  })

  $("#loansDetails6").click(async function(){
    await getLoansData();
       
        showLoansDetails(loans);
  })



  /* online Application */
 /*  $("#onlineApplicationButton").click(function(){
     $("#onlineApplication").css("display","none"); 
    $("#loansMenu").css("display","none");
    $("#onlineApplicationInfo").css("display","block")
  })
 */


 /* Clear first option in Closest Branch */

 $(document).ready(function() {
  $("#closestBranch").find("option").eq(0).remove();
});
 

 
  /* Online App */

 


 $("#calculateAmount").click(function(){
    
    let monthlySalary=parseInt($("#monthlySalary").val());
    let periodOfTheLoan=parseInt($("#repayment_period").val());
    let maxMonthlyPayment=monthlySalary/3;
   let InterestRatePercentage=5.5;
   let termInMonths = periodOfTheLoan;
   let monthlyInterestRate = InterestRatePercentage / 1200;
   let maxLoanAmount = maxMonthlyPayment * ((1 + monthlyInterestRate) ^ termInMonths) - 1 / monthlyInterestRate * ((1 + monthlyInterestRate) ^ termInMonths);
   let result= document.getElementById("maxAm").innerHTML+=`  ${maxLoanAmount.toFixed(0)} MKD`;
  result;
 
  });  

  $("#continue").click(function(){
    $("#continueOnlineApp").css("display","block")
  })

 
 $("#confirmApp").click(function(){
  let fullName=$("#full_name").val();
  $("#confirmAppMessage").html(`Thank You  Ms/Mrs <span><font color="red" size="6">${fullName}</font></span> for your application. We will contact you shortly.`);
 });

  