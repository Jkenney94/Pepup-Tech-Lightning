({
    fireEvent : function(component, event, helper) {
        var evt = $A.get("e.c:exampleAppEvt");
        evt.setParams({"message": 'App Evt Message'});
        console.log('evt fired!');
        evt.fire();
    },
})
