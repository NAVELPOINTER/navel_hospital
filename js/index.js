function draw_wave(){
    let cv_green_1 = document.getElementById("login-canvas-green-1");
    let context_green1 = cv_green_1.getContext('2d');

    let cv_blue_1 = document.getElementById("login-canvas-blue-1");
    let context_blue1 = cv_blue_1.getContext('2d');

    let counter = 0;
    let x = 0;

    while(counter < 200)
    {
        context_green1.bezierCurveTo(x, 70, (x +60), 150, (x + 100), 70);
        context_green1.strokeStyle = "#00cc99";
        context_green1.lineWidth = 10;
        context_green1.stroke();

        x += 90;

        context_green1.bezierCurveTo((x + 10), 70, (x + 60), -10, (x + 100), 70);

        context_green1.strokeStyle = "#00cc99";
        context_green1.lineWidth = 10;
        context_green1.stroke();

        x += 100;

        counter += 1;
    }
    counter = x = 0;
    while(counter < 200)
    {
        context_blue1.bezierCurveTo(x, 90, (x +60), 170, (x + 100), 90);
        context_blue1.strokeStyle = "#0099ff";
        context_blue1.lineWidth = 10;
        context_blue1.stroke();

        x += 90;

        context_blue1.bezierCurveTo((x + 10), 90, (x + 60), 10, (x + 100), 90);

        context_blue1.strokeStyle = "#0099ff";
        context_blue1.lineWidth = 10;
        context_blue1.stroke();

        x += 100;

        counter += 1;
    }
}

function draw_curved_border(){
    let cv_green_1 = document.getElementById("login-canvas-green-1");
    let context_green1 = cv_green_1.getContext('2d');

    let cv_blue_1 = document.getElementById("login-canvas-blue-1");
    let context_blue1 = cv_blue_1.getContext('2d');

    let counter = 0;
    let x = 0;

    while(counter < 200)
    {
        context_green1.bezierCurveTo(x, 70, (x +60), 150, (x + 90), 70);
        context_green1.strokeStyle = "#00cc99";
        context_green1.lineWidth = 10;
        context_green1.stroke();

        x += 60;

        context_green1.bezierCurveTo(x, 70, (x + 60), -10, (x + 90), 70);

        context_green1.strokeStyle = "#00cc99";
        context_green1.lineWidth = 10;
        context_green1.stroke();

        x += 60;

        counter += 1;
    }
    counter = x = 0;
    while(counter < 200)
    {
        context_blue1.bezierCurveTo(x, 90, (x +60), 170, (x + 90), 90);
        context_blue1.strokeStyle = "#0099ff";
        context_blue1.lineWidth = 10;
        context_blue1.stroke();

        x += 60;

        context_blue1.bezierCurveTo(x, 90, (x + 60), 10, (x + 90), 90);

        context_blue1.strokeStyle = "#0099ff";
        context_blue1.lineWidth = 10;
        context_blue1.stroke();

        x += 60;

        counter += 1;
    }
}

//function to display the waves
function waves(){
    let canvas = document.getElementById("waves");

    draw_rec(canvas);


}
function draw_rec(canvas) {
    let context = canvas.getContext("2d");
    let x = 0
    let y_cord = 10;
    let x_cord = 10;

    while( x <= 15){
        context.moveTo(x_cord, y_cord);
        context.bezierCurveTo((x_cord + 190), (-20 + y_cord), (x_cord + 300), (y_cord + 140), (x_cord + 800), (y_cord + 100));
        context.fillStyle = "#264dcc";
        context.fill();
        context.strokeStyle = "#264dcc";
        context.stroke();
        y_cord += 50;
        if(x === 4){
            x_cord = 740;
            y_cord = 10;
        }
        if(x === 9){
            x_cord = 1470;
            y_cord = 10;
        }
        x += 1;
    }
}

/* code to display our sign up form*/
function display_signup_form(){
    document.getElementsByClassName('main-body')[0].style.opacity = '0.1';
    let div_form = document.getElementsByClassName('sign-up-div');
    document.getElementById('hide_sign_up').style.display = 'block';
    div_form[0].style.display = 'block';
}

function hide_signup_form(){
    document.getElementsByClassName('main-body')[0].style.opacity = '1';
    let div_form = document.getElementsByClassName('sign-up-div');
    div_form[0].style.display = 'none';
    document.getElementById('hide_sign_up').style.display = 'none';
}

/* code to display sign in button */
function display_signin_form(){
    document.getElementsByClassName('main-body')[0].style.opacity = '0.1';
    let div_form = document.getElementsByClassName('sign-in-div');
    document.getElementById('hide_sign_in').style.display = 'block';
    div_form[0].style.display = 'block';
}
function hide_signin_form(){
    document.getElementsByClassName('main-body')[0].style.opacity = '1';
    let div_form = document.getElementsByClassName('sign-in-div');
    div_form[0].style.display = 'none';
    document.getElementById('hide_sign_in').style.display = 'none';
    //setTimeout(display_loader, 3);
}
function alert_box(server_reply, new_url){
    let alert_box = document.getElementsByClassName('alert-box');
    let p_message = document.getElementById('message');
    let button = document.getElementById('alert-box-button');
    alert_box[0].style.display = "block";
    p_message.innerText = server_reply;
    button.onclick = function (){
        alert_box[0].style.display = "none";
        window.location.href = new_url;
    }
}

/*function to display our loader*/
function display_loader(){
    let loader = document.getElementsByClassName('loader');
    loader[0].style.display = "block";
}

