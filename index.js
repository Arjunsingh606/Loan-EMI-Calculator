const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", ()=>{
    amount = loanAmount.value;
    tenure =loanTenure.value*12;
    rate = loanRate.value/12/100;

    emi = (amount*rate*(1+rate)**tenure)/((1+rate)**tenure-1);
    total = emi*tenure;
    interest = total-amount;

    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanTotal.innerHTML = Math.floor(total);
    loanInterest.innerHTML = Math.floor(interest);

    //loan chart
    let xValues = ["principle","interest"];
    let yValues = [amount, Math.floor(interest)];  //amount, math.floor(interest)

    let barColors = ["#961251", "#000000"];

    new Chart ("loanChart",{
        type:"pie",
        data:{
            labels: xValues,
            datasets:[{
                backgroundColor:barColors,
                data:yValues
            }]

        },
        options:{
            title:{
                display:false
            }
        }
    });

});



