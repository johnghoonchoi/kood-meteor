Template.koodMain.helpers({
    list : function() {
        var i, j, k=0;
        var check;
        var temp = new Array();
        for(i=0; i<sidebarArray.length; i++)
            if(sidebarArray[i] != "") check = 1;
        if(check == 1) {
            for (i = 0; i < sidebarArray.length; i++) {
                for (j = 0; j < this.recipeList.length; j++) {
                    if (sidebarArray[i] == this.recipeList[j].division) {
                        temp[k] = this.recipeList[i];
                        k++;
                    }
                }
            };
            check=0;
            sidebarArray=["",];
            return temp;
        }else{
            return this.recipeList;
        }

    }
});