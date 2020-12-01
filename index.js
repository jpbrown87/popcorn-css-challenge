document.getElementById('jump-in').addEventListener('click', jumpInFn)
function jumpInFn(){
    alert ("Splash! We\'re all in!!")
}

document.getElementById('learn-more').addEventListener('click', learnMoreFn)
function learnMoreFn() {
    //alert ("Splash! We\'re all in!!")
    document.getElementById('learn-more').style.display = "none";
    var alertM = "My Partner and I are good pair."
    alert(alertM)
}



document.getElementById('buttonGroupRate').addEventListener('click', showRates)
function showRates(){
    //document.getElementById('groupRate').style.display = "none";
    let groupRateCard = document.getElementById('groupRate');
    if(groupRateCard.style.display == "block"){
        groupRateCard.style.display = "none"
    }else{
        groupRateCard.style.display = "block"
    }
}

document.getElementById('letgo').addEventListener('click', letgoForm)
function letgoForm(){
    let displayForm = document.getElementById('letsgoForm');
    if(displayForm.style.display == "block"){
        displayForm.style.display = "none";
    }else{
        displayForm.style.display = "block";
    }
}



document.getElementById('submit').addEventListener('click', submitForm);
function submitForm(){
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var city;
    if(document.getElementById('cities').value == "San Juan"){
        city = 'San Juan';
    }else if(document.getElementById('cities').value == "Bayamon"){
        city = 'Bayamon';
    }else if(document.getElementById('cities').value == "Carolina"){
        city = 'Carolina';
    }else if(document.getElementById('cities').value == "Ponce"){
        city = 'Ponce';
    }else if(document.getElementById('cities').value == "Caguas"){
        city = 'Caguas';
    }

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nCity: ${city}`);
    
}





// 1) When you click Jump In - 
//     * Have an alert pop up saying "Splash! We're all in!!"

// 2) When you click "Learn more" - 
//     * Hide the "Learn More" button
//     * Display an interesting fact about you and your partner 
//         Note - do not remove the other information

// 3) When you click Group Rates
//     * A box should appear above the about us box and it should display a list of group Rates
//     * Clicking the group rates button again will hide the group rates list.
//         it should be styled like the other boxes

// 4) When you click lets go 
//     * Display an input form that takes in the user's 
//         * first and last name
//         * dropdown with the cities:
//             San Juan, Bayamon, Carolina, Ponce, Caguas
//         * Another button that says "Book it"
//             when clicking this button - 
//             the information input from the form should be displayed in an alert