({
    handleAppEvt : function(component, event, helper) {
        console.log('evt received');
        var message = event.getParam("message");

        component.set('v.messageFromEvent', message);
        var numEvtsHandled = parseInt(component.get('v.numEvents')) + 1;
        component.set('v.numEvents', numEvtsHandled);
    },
})
