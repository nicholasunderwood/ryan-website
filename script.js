let textContent = $('#text-content');
let textHeader = $('#text-header h1');
let textDate = $('#text-header span');

function showCard(card){
    textContent.html(card.find(".project-blog").html());
    textHeader.text(card.find(".card-header h2").text());
    textDate.text(card.find(".card-header p").text())
}


$('.card').click(function() {
    showCard($(this));
});

$(document).ready(() => {
    $('.card:last-of-type').trigger("mouseover");

    showCard($('.card:first-of-type'));
})
