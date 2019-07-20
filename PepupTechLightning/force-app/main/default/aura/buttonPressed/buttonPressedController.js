({
    nameThatButton : function(component, event, helper) {
        if(component.get('v.version') === 1){
            var whichOne = event.getSource().getLocalId();
            console.log(whichOne);
            component.set("v.whichButton", whichOne);
        }else{
            var whichOne = event.getSource().get("v.name");
            console.log(event.getSource().getLocalId());
            console.log(whichOne);
            component.set("v.whichButton", whichOne);
        }
    },
})
