function calculateResult() {
    var yearly_investment = 10000
    var time = 15
    var interest = 0.071;
    //F = P [({(1+i) ^n}-1)/i]*(1+i)
    var ans = yearly_investment*( ( ( (1+interest) ** time )-1)/ interest) * (1+interest);
}