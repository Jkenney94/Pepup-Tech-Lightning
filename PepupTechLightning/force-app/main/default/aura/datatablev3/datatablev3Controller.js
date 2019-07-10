({
    myAction : function(component, event, helper) {
        component.set("v.Columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"}
        ]);
        
        var action = component.get("c.getContacts");
        action.setCallback(this, function(data) {
            component.set('v.Contacts', data.getReturnValue());
        });
        $A.enqueueAction(action);
    },

    clickRow : function(component, event, helper) {
        console.log('click row');
        var whichOne = event.currentTarget.dataset.record;
        console.log(whichOne);
        var contacts = component.get('v.Contacts');

        contacts.forEach(function(entry, index){
            if(entry.Id === whichOne && this[index].isActive !== true){
                this[index].isActive = true;
            }else{
                this[index].isActive = false;
            }
        }, contacts);

        component.set('v.Contacts', contacts);
    },
})