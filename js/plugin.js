$.postJSON = function(url, data={}, callback) {
    if(typeof url === 'undefined') url = '/'
    if(typeof url === 'object') data = url || {}, url = url.url || '/', callback = arguments[0].success || arguments[1]
    let dataJSON = Object.assign({},data)
    delete dataJSON.success
    return jQuery.ajax({
        'type': 'POST',
        'url':  url,
        'contentType': 'application/json',
        'data': JSON.stringify(dataJSON),
        'dataType': 'json',
        'success': callback
    });
};
$.fn.insert2Editable = function(content = '') {
    
    var sel, range, contentNode;
    sel = window.getSelection();
    if (!sel.focusNode) return console.log('%c%s', 'color: #aa00ff', 'Tidak ada fokus')

    range = sel.getRangeAt(0);
    range.deleteContents();
    contentNode = document.createTextNode(content);

    range.insertNode(contentNode);
    range.setStartAfter(contentNode);

    sel.removeAllRanges();
    sel.addRange(range);
}
$.fn.Gulir = function(){
    if(!this.length) return this
    this[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    })
    return this
}
$.fn.unChecked = function(){
    return $(this).each(function(){
        $(this).Checked(false)
    })
}
$.fn.Checked = function(on=true){
    return $(this).each(function(){
        this.checked = on
        $(this).change()
    })
}
$.fn.loading = function(){
    return $(this).each(function(){
        $(this).attr('disabled','').append('<span class="spinner-border spinner-border-sm ml-1"></span>')
    })
}
$.fn.finished = function(){
    return $(this).each(function(){
        $(this).removeAttr('disabled').find('span').remove()
    })
}
$.fn.enabled = function(){
    return $(this).each(function(){
        $(this).removeAttr('disabled')
    })
}
$.fn.disabled = function(){
    return $(this).each(function(){
        $(this).attr('disabled',!0)
    })
}
