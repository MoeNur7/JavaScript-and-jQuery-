$(document).ready(function(){
  $(".coding").click(function(){
    event.preventDefault(); 
    const selectedCoding =$(this).attr("href");
    console.log(selectedCoding);
    if (selectedCoding === "Ruby")
    {
        $("div.JavaScripts").hide();
        $("div.Python").hide();
        $("div.Ruby").show();
    }
    else if (selectedCoding === "Javascripts")
    {
        $("div.Ruby").hide();
        $("div.Python").hide();
        $("div.JavaScripts").show();
    }
    else{
        
        $("div.Ruby").hide();
        $("div.JavaScripts").hide();
        $("div.Python").show();
    }
  });
});