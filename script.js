const textContent = $('#text-content');
const textHeader = $('#text-header h1');
const textDate = $('#text-header span');
const cardHeaders = $('.card-header');
var lastCard;

function showCard(card){
    textContent.html(card.find(".project-blog").html());
    textHeader.text(card.find(".card-header h2").text());
    textDate.text(card.find(".card-header p").text());


    let h2 = lastCard?.find('h2.grad-text');
    setTimeout(() => {h2?.removeClass('grad-text');}, 10);
    $(card.find('.card-header h2')).addClass('grad-text');
    lastCard = card;
}


$('.card').click(function() {
    showCard($(this));
});

$(document).ready(() => {
    $('.card:last-of-type').trigger("mouseover");

    showCard($('.card:first-of-type'));
})
