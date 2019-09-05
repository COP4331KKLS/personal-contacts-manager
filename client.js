const Http = new XMLHttpRequest();
const url = 'https://personal-contacts-manager.herokuapp.com';

Http.open("GET", url);
Http.send;

Http.onreadystatechange = (e) =>
{
	console.log(Http.responseText)
}
