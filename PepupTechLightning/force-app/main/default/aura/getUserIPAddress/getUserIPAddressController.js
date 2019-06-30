({
    myAction : function(component, event, helper) {
        var vfOrigin = "https://" + window.location.host;

        window.addEventListener('message', $A.getCallback(function(){
            if(component.isValid()){
                if(event.origin !== vfOrigin){
                    return;
                }

                var msgStr = 'Forwarded-For: ';
                if(event.data.indexOf(msgStr) === 0){
                    component.set('v.ipAddress', event.data.substring(msgStr.length));
                }
            }
        }), false);
    }
})
