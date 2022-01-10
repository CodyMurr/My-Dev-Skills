$('.fa-bars').on('click', showMenu);

$('#new').on('click', showInput);
$('#add').on('click', appendSkill);
$('#check').on('click', closeInput);
$('#delete').on('click', editList);
$('#save').on('click', saveList);

function showMenu() {
    
        $('#menu').css("height", '200px').slideDown('slow');
        $('#options').css("visibility", "visible");
    
}

function showInput() {
    $('#new-skills').css("display", "inline-block");
}

function appendSkill() {
    const skill = $('input').val();
    $('#skill-list').append(`<li><i id="trash" class="fas fa-trash-alt"></i>  ${skill}</li>`);
}

function closeInput() {
    $('#new-skills').css("display", "none");
}

function editList() {
    $('#trash').css("visibility", "visible");
    $('#trash').on("click", function() {
        $('#skill-list > li').remove();
        $('#skill-list > .fa-trash-alt').remove();
    })
}