
// Execute script after page loads
window.onload = function digital_fn(){
    // toggle btn
    let toggle = document.querySelector('#nav .toggle-btn')
    let collapse = document.querySelector('#nav .collapse')

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
        // console.log(toggle)
    });
}