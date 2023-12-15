function showWork(clientName) {
    // Get the modal element
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Display the modal with the client's work
    modal.style.display = "block";

    // Display the client name in the modal
    document.getElementById("clientName").innerText = clientName;

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
