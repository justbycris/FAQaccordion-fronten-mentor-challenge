
//Variables
var iconBtns = document.querySelectorAll(".item");
var currentOpenAnswer = null;

// Close the currently open answer
function closeCurrentAnswer() {
    if (currentOpenAnswer) {
        currentOpenAnswer.style.display = "none";
        var btnImg = currentOpenAnswer.parentNode.querySelector("img");
        btnImg.src = "assets/images/icon-plus.svg";
        currentOpenAnswer = null;
    }
}

 //Show answer and change icon
    iconBtns.forEach(function(iconBtn) {
        iconBtn.addEventListener("click", function() {
            var answer = this.querySelector('span');
            var btnImg = this.querySelector("img");
            
            if (answer) {
                
                // Close the currently open answer if the same button is clicked again
            if (currentOpenAnswer === answer) {
                closeCurrentAnswer();
                return;
            }
                closeCurrentAnswer();

                // Toggle the display property of the associated span & src img attribute 
                if (answer.style.display === "none" || answer.style.display === "") {
                    answer.style.display = "block";
                    btnImg.src = "assets/images/icon-minus.svg";

                     //Update the currently open answer
                    currentOpenAnswer = answer;
                } else if(answer.style.display === "block"){
                    answer.style.display = "none";
                    btnImg.src = "assets/images/icon-plus.svg";
                }

            } else {
                console.error("Associated span not found for the clicked button.");
            }
        });
        
    });