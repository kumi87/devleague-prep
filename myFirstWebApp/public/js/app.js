function addLastName(){

    var lastNameElement = document.createElement('span');
    
    lastNameElement.id = 'myLastName';

    var lastNameText = document.createTextNode('Hewitt');
    
    lastNameElement.appendChild(lastNameText);
  
    
    var myNameElm = document.getElementById('myName');

    myNameElm.appendChild(lastNameElement);
  }



