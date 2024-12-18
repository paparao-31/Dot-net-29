var val=0;
var c = document.getElementById("count")
var eo=document.getElementById("evenOdd")
function inc()
{
    
    alert(c.textContent);
    alert(innerText);
    val++;
    if(val<=20)
        c.textContent=val;
    else
    alert("value should not be more than 20")
    if(val%2==0)
    {
        eo.textContent="EVEN"
    }
    else{
        eo.textContent="ODD"
    }

}
function dec()
{
    
}