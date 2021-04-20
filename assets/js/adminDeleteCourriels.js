let courrielsToDelete = [];

$(function () {
    $("input[name^='delete_courriel_']").on('click', onStoreCourrielsToDelete);

    $("#confirm_delete").on('click', deleteCourriels);
});


function onStoreCourrielsToDelete() {
    let object = {
        'id': this.dataset.courrielid,
        'token': $(this).siblings("input[type='hidden']").val()
    };
    if (this.checked) {
        courrielsToDelete.push(object);
    } else {
        courrielsToDelete = courrielsToDelete.filter(isItStored, object);
    }
    toogleTrash();
}

function isItStored(el) {
    return (el.id != this.id) || (el.token != this.token);
}

function toogleTrash() {
    if (courrielsToDelete.length == 0) {
        $("#trash").addClass('d-none');
    } else {
        $("#trash").removeClass('d-none');
    }
}

function deleteCourriels() {

    let doneCount = 0;
    for (let courriel of courrielsToDelete) {
        fetch(
            '/admin/api/courriels/' + courriel.id,
            {
                method: 'DELETE',
                mode: 'same-origin',
                headers: {
                    "Authorization": courriel.token,
                    "X-Requested-With": 'XMLHttpRequest'
                }
            }
        ).then((response) => {
            if (response.status == 200) {
                $("#courriel_" + courriel.id).parents("tr").remove();
                $("#message-api").html("Elément(s) supprimés");
                $("#message-api").removeClass("d-none").addClass('alert-success');
            } else {
                $("#message-api").html("Une erreur est survenue: " + response.status + " " + response.statusText);
                $("#message-api").removeClass("d-none").addClass('alert-warning');
            }
            doneCount++;
            if (doneCount == courrielsToDelete.length) {
                tryToRefresh();
            }
        }).catch((error) => {
            $("#message-api").html("Une erreur est survenue: " + error.message);
            $("#message-api").removeClass("d-none").addClass('alert-danger');
        });
    }
}

function tryToRefresh(){
    courrielsToDelete = [];
    try {
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
    setTimeout(function () {
        $("#message-api").addClass("d-none");
    }, 2000);
}