function() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('referral-code') || 'undefined';
}
