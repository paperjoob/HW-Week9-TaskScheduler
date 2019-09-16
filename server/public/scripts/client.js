$(document).ready(onReady);

// onReady 
function onReady() {
    // call getTasks to show on the DOM
    $('#taskList').on('click', '.completeButton', completeTask);
    getTasks();
} // end onReady

function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then( function (response) {
        console.log(response);
        $('#taskList').empty();
        response.forEach(function (task) { // for each of the things in the array, append to the DOM
            if (task.is_complete) {
                $('#taskList').append(`
                <tr>
                    <td>${task.id}</td>
                    <td>${task.description}</td>
                    <td>${task.is_complete}</td>
                    <td>Done!</td>
                </tr>
            `)
            } else {
                $('#taskList').append(`
                <tr>
                    <td>${task.id}</td>
                    <td>${task.description}</td>
                    <td>${task.is_complete}</td>
                    <td><button class="completeButton" data-taskid="${task.id}">Complete</button></td>
                </tr>`
            )}
        })
    })
}

function completeTask() {

    $.ajax({
        type: 'PUT',
        url: `/tasks/${$(this).data().taskid}`
    }).then( function(response) {
        getTasks();
    })
} // end completeTask



