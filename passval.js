const passing = () => {
    var fullnames = document.getElementById("fullname").value;
    var emails = document.getElementById("email").value;
    var phones = document.getElementById("phone").value;
    var nationalitys = document.getElementById("nasionality").value;
    var messages = document.getElementById("message").value;
    localStorage.setItem("vnama", fullnames);
    localStorage.setItem("vemail", emails);
    localStorage.setItem("vphone", phones);
    localStorage.setItem("vnationality", nationalitys);
    localStorage.setItem("vmessage", messages);

    console.log("testt passing");

    return false;
  
    
  };

  console.log("testt diluar passing");