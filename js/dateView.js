$(function(){

    var Views = { }; 

    // вид даты рождения в профайле
    var profileBrithDayView = Backbone.View.extend({
        el: $(".form-row"),
        events: {
            "change #general-edit-birthday-month" : "birthMonth"    
        },
        initialize: function(){
            this.birthYear();
            this.birthMonth();
        },  
        // обработка дней   
        birthDay: function (n) {
            var month = new Array(-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
            var listDay= "";
            for (var i = 1; i <= month[n]; i++) {
                listDay += "<option value="+i+">"+i+"</option>";  
            }
            $("#general-edit-birthday-day").html(listDay);
            return false;
        },
        // нажали на месяц  
        birthMonth: function () {
            this.birthDay($("#general-edit-birthday-month option:selected").val());
            return false;
        },  
        // обработка лет  
        birthYear: function() {
            var listYear= "";
            for (var i = 2001; i > 1950; i--) {
                listYear += "<option value="+i+">"+i+"</option>";  
            }
            $("#general-edit-birthday-year").html(listYear);
            return false;
        }    
    });


    // запускаем
    Views = { 
        birthday: new profileBrithDayView() 
    };
});
