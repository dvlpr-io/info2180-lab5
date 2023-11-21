window.addEventListener('DOMContentLoaded', () => {
    const lookup = document.querySelectorAll("#lookup")
    const country = document.getElementById("country")
    const result = document.getElementById("result")
    const lookupC = document.getElementById("lookup-cities")

    lookup.forEach(function (button){
        button.addEventListener('click', function (e){

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    result.innerHTML=this.responseText;
                }
            };
            
            xmlhttp.open("GET", "world.php?country=" + country.value, true);
            xmlhttp.send();
        })
    })

    lookupC.addEventListener(
        'click', function (e){

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    result.innerHTML=this.responseText;
                }
            };
            
            xmlhttp.open("GET", "world.php?country=" + country.value, true);
            xmlhttp.send();
        }
    )


    
})