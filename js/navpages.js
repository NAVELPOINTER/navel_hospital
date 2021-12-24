function draw_about_as_band(){
    let canvas = document.getElementById('about-us-band');
    let context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(0, 0);
    context.bezierCurveTo(0, 20, 70, 50, 900, 30 );
    context.strokeStyle = "#019b1a";
    context.lineWidth = 2;
    context.fillStyle = "#019b1a";
    context.fill();
    context.stroke();

    
    context.beginPath();
    context.moveTo(0, 100);
    context.bezierCurveTo(0, 80, 70, 50, 900, 70 );
    context.strokeStyle = "#019b1a";
    context.lineWidth = 2;
    context.fillStyle = "#019b1a";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(920, 50, 45, 0, 2 * Math.PI, true);
    context.strokeStyle = "#019b1a";
    context.fillStyle = "#019b1a";
    context.fill();
    context.stroke();


    context.beginPath();
    context.moveTo(1870, 0);
    context.bezierCurveTo(1870, 20, 930, 50, 960, 30 );
    context.strokeStyle = "#019b1a";
    context.lineWidth = 2;
    context.fillStyle = "#019b1a";
    context.fill();
    context.stroke();

    
    context.beginPath();
    context.moveTo(1870, 100);
    context.bezierCurveTo(1870, 80, 930, 50, 960, 70 );
    context.strokeStyle = "#019b1a";
    context.lineWidth = 2;
    context.fillStyle = "#019b1a";
    context.fill();
    context.stroke();
}

async function med_buildings_slider(){
    let image_holder = document.getElementById('medical_buildings');
    let display_counter = document.getElementById('display-counter-listing');
    let display_indicator = '<i class="fa fa-star" aria-hidden="true"></i>';
    let hospital_images = new Array();

    let image_counter = 0;
    
    let src_text = ['../images/admin.jpeg', '../images/beds.jpeg', '../images/beds2.jpeg', '../images/counselling.jpeg',
                    '../images/laboratory.jpeg', '../images/mat1.jpeg', '../images/mat2.jpeg', '../images/mat3.jpeg',
                    '../images/offices.jpeg', '../images/operationroom1.jpeg', '../images/oproom2.jpeg', '../images/oproom3.jpeg',
                    '../images/oproom5.jpeg', '../images/reception.jpeg',
                    '../images/research_fields.jpeg'];

    while(image_counter < 17){
        hospital_images[image_counter] = new Image();
        hospital_images[image_counter].src = src_text[image_counter];
        image_counter += 1;
    }

    let text_display = ['Administration Block', 'Modern Hospital beds Available', 'Comfortable beds for patients', 'Counselling Services are offered', 'Modern Medical laboratories',
                        'Maternity Services offered', 'Maternity services offered', 'Maternity Services offered', 'offices in our possession', 'Highly advanced operation rooms',
                        'Highly advanced operation rooms', 'Highly advanced operation rooms', 'Highly advanced operation rooms', 'Reception Area', 'Research Field'];

    let text_holder = document.getElementById('text-directive-real');

    image_counter = 0;

    //function to sleep
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    while(1){
        //creating our <li> tag
        let li = document.createElement("li");
        li.innerHTML = display_indicator;
        display_counter.appendChild(li);
        if(image_counter === 15){
            image_counter = 0;

            //removing our display indicators
            let inner_counter = 15;
            while(inner_counter != 0){
                display_counter.removeChild(display_counter.childNodes[inner_counter]);
                inner_counter -= 1;
            }
            inner_counter = 15;
        }
        image_holder.src = hospital_images[image_counter].src;
        text_holder.innerHTML = text_display[image_counter];

        //browser dozing off
        await sleep(2000);
        image_counter += 1;
    }
    
}

function display_medical_data_center_login(){
    let fm = document.getElementsByClassName('medical-center-login-form');
    fm[0].style.display = 'block';
    
    let url = location.pathname.split('/').pop();

    if(url === 'about-us.html'){
        document.getElementsByClassName('main-about-us-div')[0].style.opacity = '0.1';
    }else if(url === 'contact-us.html'){
        document.getElementsByClassName('main-contact-us-div')[0].style.opacity = '0.1';
    }else if(url === 'home.html'){
        document.getElementsByClassName('main-home-div')[0].style.opacity = '0.1';
    }
    
}

function hide_mdc_login(){
    let fm = document.getElementsByClassName('medical-center-login-form');
    fm[0].style.display = 'none';
    
    let url = location.pathname.split('/').pop();

    if(url === 'about-us.html'){
        document.getElementsByClassName('main-about-us-div')[0].style.opacity = '1';
    }else if(url === 'contact-us.html'){
        document.getElementsByClassName('main-contact-us-div')[0].style.opacity = '1';
    }else if(url === 'home.html'){
        document.getElementsByClassName('main-home-div')[0].style.opacity = '1';
    }
}

function set_url(){

    document.getElementById('hidden').value = location.pathname.split('/').pop();

}

function draw_home_canvas(){
    let canvas = document.getElementById('h-canvas');

    let context = canvas.getContext('2d');

    //drawing the small circles
    context.beginPath();
    context.arc(20, 75, 15, 0, 2 * Math.PI);
    context.fillStyle = '#059105';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(20, 75, 10, 0, 2 * Math.PI);
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    context.rect(35, 70, 368, 10);
    context.strokeStyle = '#059105';
    context.fillStyle = '#059105';
    context.fillRect(35, 70, 368, 10);
    context.stroke();

    context.beginPath();
    context.moveTo(410, 75);
    context.lineTo(580, 0);
    context.lineTo(735, 75);
    context.lineTo(580, 150);
    context.lineTo(410, 75);
    context.fillStyle = "#059105";
    context.fill();
    context.closePath();
// other square
    context.beginPath();
    context.moveTo(1070, 75);
    context.lineTo(1220, 0);
    context.lineTo(1380, 75);
    context.lineTo(1220, 150);
    context.lineTo(1070, 75);
    context.fillStyle = '#059105';
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(415, 75, 15, 0, 2 * Math.PI);
    context.fillStyle = '#059105';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(415, 75, 10, 0, 2 * Math.PI);
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    //drawing the small circles
    context.beginPath();
    context.arc(750, 75, 15, 0, 2 * Math.PI);
    context.fillStyle = '#059105';
    context.fill();
    context.strokeStyle = '#059105';
    context.stroke();

    context.beginPath();
    context.arc(750, 75, 10, 0, 2 * Math.PI);
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    context.rect(765, 70, 275, 10);
    context.strokeStyle = '#059105';
    context.fillStyle = '#059105';
    context.fillRect(765, 70, 275, 10);
    context.stroke();

    context.beginPath();
    context.arc(1055, 75, 15, 0, 2 * Math.PI);
    context.fillStyle = '#059105';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(1055, 75, 10, 0, 2 * Math.PI);
    context.fillStyle = '#ffffff';
    context.fill();
    context.strokeStyle = '#059105';
    context.stroke();    

    //drawing the small circles
    context.beginPath();
    context.arc(1390, 75, 15, 0, 2 * Math.PI);
    context.fillStyle = '#059105';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(1390, 75, 10, 0, 2 * Math.PI);
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();

    context.rect(1405, 70, 430, 10);
    context.strokeStyle = '#059105';
    context.fillStyle = '#059105';
    context.fillRect(1405, 70, 430, 10);
    context.stroke();

    context.beginPath();
    context.arc(1850, 75, 15, 0, 2 * Math.PI);
    context.fillStyle = '#059105';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(1850, 75, 10, 0, 2 * Math.PI);
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#059105';
    context.fill();
    context.stroke();
}

function draw_disc(){
    let canvas = document.getElementById('home-lower-canvas');

    let context = canvas.getContext('2d');

    let counter = 0;

    let x = 0;

    while(counter < 100){
        
        
        context.beginPath();
        context.moveTo(x, 20);

        context.bezierCurveTo((x + 10), 0, (x + 15), 10, (x + 20), 20);
        context.fillStyle = "#059105";
        context.strokeStyle = "#059105";
        context.fill();
        context.stroke();
        
        x += 20;
        
        counter += 1;
    }
}