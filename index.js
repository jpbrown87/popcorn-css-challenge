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
    let groupRateCard = document.getElementById('groupRate');
    if(groupRateCard.style.display = "block"){
        groupRateCard.style.display = "none"
    }else if(roupRateCard.style.display = "none"){
        groupRateCard.style.display = "block"
    }
}
// do you see what i am talking about

// this should work but i am going to push it in github so you can have the file





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