function formvalidate()
{
     var name = document.getElementById("uname").value
     var email = document.getElementById("uemail").value
     var number = document.getElementById("ucont").value
     var feedback = document.getElementById("ufeed").value

         if(name == "")
         {
             document.getElementById("demo1").innerHTML=("Name Cannot Be Empty")
         }
         else if(email == "")
         {
             document.getElementById("demo2").innerHTML=("Emial Cannot Be Empty")
             document.getElementById("demo1").innerHTML=("")
         }
         else if(number == "")
         {
             document.getElementById("demo3").innerHTML=("Number Cannot Be Empty")
             document.getElementById("demo2").innerHTML=("")
         }
         else if(feedback == "")
         {
             document.getElementById("demo4").innerHTML=("Feedback Cannot Be Empty")
             document.getElementById("demo3").innerHTML=("")
         }
         else
         {
             document.getElementById("demo4").innerHTML=("")
             alert("Sumbit Successfully Complete")
         }
 }