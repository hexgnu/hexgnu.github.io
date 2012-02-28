function emailCallBack() {
		var email = new Array("m","a","t","t","@","m","a","t","t","h","e","w","k","i","r","k",".","c","o","m");
		
		var emailString = "";
		for (part in email)
		{
			emailString += email[part];
		}
		window.location = "mailto:" + emailString;
}

$(document).ready(function(){
	$("#e_mail").html("matt@matthewkirk.com");
	$(".justify").characterJustify();
});

