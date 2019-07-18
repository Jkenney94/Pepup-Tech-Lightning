({
    callAuraMethod : function(component, event, helper) {
        var childCmp = component.find("child");
        // call the aura:method in the child component
        var auraMethodResult = childCmp.logParam("message sent by parent component");
        console.log('auraMethodResult: ' + auraMethodResult);
    },

    callAuraMethodServerTrip : function(component, event, helper) {
        var childCmp = component.find("child");
        childCmp.echo(function(result) {
            console.log("callback for aura:method was executed");
            console.log("result: " + result);
        });
    },
})
