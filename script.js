document.getElementById('myForm').addEventListener('submit', function(e) {
 e.preventDefault();

 var name = document.getElementById('name').value || 'Unknown';
 var email = document.getElementById('email').value || 'Unknown';
 var message = document.getElementById('message').value || 'Unknown';

 var data = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;

 var blob = new Blob([data], { type: 'text/plain' });
 var url = URL.createObjectURL(blob);

 var link = document.createElement('a');
 link.download = name+'.txt';
 link.href = url;
 link.click();
});