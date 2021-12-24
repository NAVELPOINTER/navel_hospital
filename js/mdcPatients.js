let click_counter = 0;

function display_other_links(){
    let links = document.getElementsByClassName('other-links-div');
    let link_btn = document.getElementById('other-links');

    window.addEventListener('click', function(event){
        if((event.target === link_btn) && ((click_counter % 2) != 0)){
            links[0].style.display = 'inline-block';
        }else{
            links[0].style.display = 'none';
        }
    });
    click_counter += 1;

    if(click_counter == 10){
        click_counter = 0;
    }
}

function toggle_drop_down_menus(){
    let counter;
    let links = document.getElementsByClassName('sub-main-criteria-listing-item');
    let link_btn = document.getElementsByClassName('main-criteria-listing-item');

    window.addEventListener('click', function(event){
        for(counter = 0; counter < 4; counter++){
            if((event.target === link_btn[counter]) && ((click_counter % 2) != 0)){
                links[counter].style.display = 'inline-block';
                break;
            }else if((event.target === link_btn[counter]) && ((click_counter % 2) == 0)){
                links[counter].style.display = 'none';
            }
        }
    });
    click_counter += 1;

    if(click_counter == 10){
        click_counter = 0;
    }
}
let slides = document.getElementsByClassName('slide');
let counting_indicator = document.getElementsByClassName('fa fa-circle-o');
let btn_next = document.getElementById('next');
let btn_previous = document.getElementById('previous');
let btn_submit = document.getElementById('submit');
let counter = 0;

function slide_booking_form(){

    window.addEventListener('click', function(event){
        move_previous(event);
        move_next(event);
    });

}

function move_next(e){
    if(e.target === btn_next){
        slides[counter].style.display = 'none';
        counter += 1;
        btn_submit.style.display = 'none';
        if(counter > 2){
            counter = 2;
            btn_submit.style.display = 'block';
        }
        slides[counter].style.display = 'block';
        counting_indicator[counter].style.color = 'green';
    }
}

function move_previous(e){
    if(e.target === btn_previous){
        slides[counter].style.display = 'none';
        btn_submit.style.display = 'none';
        counter -= 1;
        if(counter < 0){
            counter = 0;
        }
        slides[counter].style.display = 'block';
        counting_indicator[counter].style.color = 'black';
    }
}

function deletion_action(){
    let body = document.getElementsByClassName('main-account-info');
    let del_account_main = document.getElementById('delete-account');
    let ok = document.getElementById('ok');
    let confirm_box = document.getElementsByClassName('confirmation-box');
    let cancel = document.getElementById('cancel');

    window.addEventListener('click', function(event){
        if(event.target === del_account_main){
            confirm_box[0].style.display = 'block';
            body[0].style.opacity = '0.05';
        }
        else if(event.target === cancel){
            confirm_box[0].style.display = 'none';
            body[0].style.opacity = '1';
        }
    })
}

function change_profile(){
    let submit_image = document.getElementById('profile-form');
    $("#change-profile-input").on("input", function(){
        submit_image.submit();
    });
}

$(function() {
    $.ajax({
      url: "../php/draw_graphs_annual.php",
      type: "GET",
      success: function(data) {
        chartData = data;
        var chartProperties = {
          caption: "Navel hospital Data",
          xAxisName: "Gender",
          yAxisName: "disease",
          rotatevalues: "1",
          theme: "zune"
        };
        apiChart = new FusionCharts({
          type: "column2d",
          renderAt: "chart-display",
          width: "550",
          height: "350",
          dataFormat: "json",
          dataSource: {
            chart: chartProperties,
            data: chartData
          }
        });
        apiChart.render();
      }
    });
  });