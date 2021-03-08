function checkName() {
    var name = document.getElementById('firstName')
    console.log(name)
}
$(function() {
    $('body').on('click', '.signup', function() {
        checkName()
    })
})
