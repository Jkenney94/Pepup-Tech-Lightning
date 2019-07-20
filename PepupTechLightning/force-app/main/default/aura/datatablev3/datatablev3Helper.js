({
    updateActiveContact : function(whichOne, contactsArr){
        contactsArr.forEach(function(cont, index){
            if(cont.Id === whichOne && this[index].isActive !== true){
                this[index].isActive = true;
            }else{
                this[index].isActive = false;
            }
        }, contactsArr);

        return contactsArr;
    },
})