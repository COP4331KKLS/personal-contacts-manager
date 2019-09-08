const Http = new XMLHttpRequest();
const url = 'https://personal-contacts-manager.herokuapp.com/contacts';

Http.open("GET", url);
Http.send;

Http.onreadystatechange = (e) =>
{
	console.log(Http.responseText)
}

var xhr = new XMLHttpRequest();

xhr.open("POST", '/user', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystagechange = function()
{
	if (this.readyState === XMLHttpRequest.DONE && this.status === 200)
	{

	}
}

xhr.send("name=Ipseeta&id=1");
