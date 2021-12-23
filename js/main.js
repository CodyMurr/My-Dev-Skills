const $skills = $('#skills > ul');

const stored = [];

$('#edit').on('click', editList);
$('#add').on('click', appendSkill);

function appendSkill() {
    let skill = $('input').val();
    $skills.append(`<li class="item" style="font-size: 1.5rem; color: #f1f0ea"><span class="delete">x</span>${skill}</li>`);
    stored.push(skill);
}

function editList(e) {
    $('.delete').css('visibility', 'visible');

    $('body').on('click', $('edit').off('click', editList));
}
