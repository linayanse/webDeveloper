$.fn.todoify = function(options) {
    var settings = $.extend({
        data: [],
        to: 'body'
    }, options);

    var render = function(item) {
        var todo = $('<span></span>').addClass('todo');
        todo.text(item);
        $(settings.to).append(todo);
    };

    var eventHandler = function(event) {
        if(event.keyCode === 13) {
            var item = $(this).val();

            render(item);
            $(this).val('').focus();
        }
    };

    settings.data.forEach(render);

    $(this).keypress(eventHandler);

    return this;
};