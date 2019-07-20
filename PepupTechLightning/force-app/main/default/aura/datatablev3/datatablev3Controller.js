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
        //get contact Id from clicked Row
        var whichOne = event.currentTarget.dataset.record;
        var contacts = component.get('v.Contacts');

        component.set('v.Contacts', helper.updateActiveContact(whichOne, contacts));
    },
})