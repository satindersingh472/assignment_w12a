// success function will create a div and put html into a box id with quote,series and author name
function success_function(response){
    let i =0;
    while(i< response[`data`].length){
        box[`innerHTML`] = ` <div id=quote_box>
        <h2><q>${response[`data`][i][`quote`]}</q></h2>
        <p class="author_info"><cite class="series"> ${response[`data`][i][`series`]}</cite>    by ${response[`data`][i][`author`]}</p>
        </div>` + box[`innerHTML`];
        i++;
    }
}
// failure function will show error if api not working
function failure_function(error){
    box[`innerHTML`] = `<h2>Error!!!</h2>`;
}
// start axios will run axios request when executed
function start_axios(){
   axios.request({
    url: 'https://web-series-quotes-api.deta.dev/quote/'
   }).then(success_function).catch(failure_function);
}
// button store value of id button to add event listener
let button = document.getElementById(`button`);
button.addEventListener(`click`,start_axios);
// box will help to store html in success function
let box = document.getElementById(`box`);