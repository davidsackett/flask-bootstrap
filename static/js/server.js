function server_do(server_id, action) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '/server');
    form.style.display = 'hidden';
    document.body.appendChild(form)

    function add_hidden_field(name, value) {
        var input = document.createElement("input");
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', name);
        input.setAttribute('value', value);
        form.appendChild(input);
    };

    // add server_id hidden field
    add_hidden_field('server_id', server_id);
    // add action hidden field
    add_hidden_field('action', action);

    // submit the form
    form.submit();
}
