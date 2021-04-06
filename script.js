function sendMail(params){

    
    let tempParams = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email:document.getElementById("email").value
    };
    
    
    if (tempParams.name && tempParams.phone && tempParams.email) {
      
        emailjs.send('service_n34417o', 'template_rlabkwn', tempParams)
        .then(function(res) {
            document.getElementById("popup").style.visibility = "visible";
            document.getElementById("popup").style.opacity = 1;
            console.log('SUCCESS!', res.status);
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("popup").style.visibility = "hidden";

        });
      }
     
  }