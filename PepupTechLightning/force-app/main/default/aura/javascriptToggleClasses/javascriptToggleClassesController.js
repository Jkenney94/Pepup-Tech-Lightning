({
    applyCSS : function(component, event, helper) {
        var cmpTarget = component.find('changeIt'); //remember, if aura:id is not unique, this will return an array of components you can iterate through and apply changes to
        $A.util.addClass(cmpTarget, 'changeMe');
    },

    removeCSS : function(component, event, helper) {
        var cmpTarget = component.find('changeIt');
        $A.util.removeClass(cmpTarget, 'changeMe');
    },

    toggleCSS : function(component, event, helper) {
        var cmpTarget = component.find('changeIt');
        $A.util.toggleClass(cmpTarget, 'changeMe');
    },
})
