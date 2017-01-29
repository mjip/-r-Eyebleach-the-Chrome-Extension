function save_options() {
    var theValue = document.getElementById('filters').value;
    chrome.storage.local.set({'filters': theValue}, function(){
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
    });
}

document.getElementById('submit').addEventListener('click', save_options);