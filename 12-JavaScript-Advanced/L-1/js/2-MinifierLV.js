var u_name=document.myForm.u_name,message=document.getElementById("message");function runMe(){u_name.value.length<3?(message.innerHTML="Need more Characters",message.style.color="red",u_name.style.backgroundColor="red",u_name.style.color="white"):5==u_name.value.length?(message.innerHTML="Nice, OK",message.style.color="green",u_name.style.backgroundColor="green",u_name.style.color="white"):u_name.value.length>8&&(message.innerHTML="Limit has been reached",message.style.color="orange",u_name.style.backgroundColor="orange",u_name.style.color="white")}