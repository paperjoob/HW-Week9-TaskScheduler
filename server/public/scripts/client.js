$(document).ready(onReady);

// onReady 
function onReady() {
    console.log('JQ');
    // call getTasks to show on the DOM
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
                    <button class="completeButton">Complete</button>
                </tr>`
            )}
        })
    })
}


