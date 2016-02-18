$(document).ready(function(){
  $("form#question").submit(function(event){
    var coffee = $("select#coffee").val();
    var pets = $("select#pets").val();
    var spare = $('select#spare').val();

    if (coffee ==='yes'&& pets ==='dog' && spare ==='cook')
      $("#anne").show();
    if (coffee ==='no' && pets ==='dog' && spare ==='cook')
        $("#emma").show();

    if (coffee ==='yes' && pets ==='cat' && spare ==='cook')
        $("#miley").show();
    if (coffee ==='no' && pets ==='cat' && spare ==='cook')
            $("#adele").show();

    if (coffee ==='yes' && pets ==='cat' && spare ==='shop')
        $("#beyonce").show();
    if (coffee ==='no' && pets ==='cat' && spare ==='shop')
            $("#taylor").show();

    if (coffee ==='yes' && pets ==='dog' && spare ==='shop')
                $("#beyonce").show();
    if (coffee ==='no' && pets ==='dog' && spare ==='shop')
                    $("#taylor").show();



        event.preventDefault();








  });
});
