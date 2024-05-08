function answer() {
    let start_number = (document.querySelector("#start_number").value);
    let end_number = (document.querySelector("#end_number").value);
    let result = "";

    if(start_number === "" && end_number === ""){
        Swal.fire({
            title: "Please fill the input field"
          });
    }
    for(let i =1; i <= end_number; i++) {
        result += `${start_number} x ${i} = ${start_number * i}\n `;
}
    document.querySelector("#result").innerText = result ;
}
