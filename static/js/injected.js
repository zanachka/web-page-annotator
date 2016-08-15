document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('contextmenu', function (event) {
        console.log('contextmenu', event);
        var eventToParent = document.createEvent('Event');
        eventToParent.initEvent('label-element', true, true);
        eventToParent.data = {
            screenX: event.screenX,
            screenY: event.screenY,
            pageX: event.pageX,
            pageY: event.pageY
        };
        window.parent.document.body.dispatchEvent(eventToParent);
        event.preventDefault();
    });
});