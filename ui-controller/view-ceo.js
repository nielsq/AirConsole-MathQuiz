
function paramsUI(){


    

    var div = document.getElementById("content");

    // title level selection
    var title = document.createElement('h1');
    title.innerHTML = "Select your Level!";
    title.setAttribute('style','text-align: center; color: #8A2BE2')

    // div level selection
    var selection_options = document.createElement('div');
    selection_options.setAttribute('id','selection');
    selection_options.setAttribute('style','display: flex; flex-direction: column; justify-content: center; align-items: center;');
    
    var b1 = document.createElement('button');
    b1.addEventListener('click',() => {
        CEO_selection_lvl = 'Level1'
    });
    b1.innerText = "Level 1"
    selection_options.append(b1);
    var b2 = document.createElement('button');
    b2.addEventListener('click',() => {
        CEO_selection_lvl = 'Level1'
    });
    b2.innerText = "Level 2"
    selection_options.append(b2);

    // Submit Button
    var submit = document.createElement('button');
    submit.addEventListener('click',() => {
        airconsole.message(AirConsole.SCREEN, ["newGame", CEO_selection_lvl, CEO_selection_rounds , CEO_selection_timer]);
    });
    submit.innerText = "Next"

    div.appendChild(title);
    div.appendChild(selection_options);
    div.appendChild(submit);


}


