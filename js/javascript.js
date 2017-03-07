 (function(){




  const config = {
    apiKey: "AIzaSyCnZSc-csOHIxyd4C0QJeiNaKghB-7g04w",
    authDomain: "projektor-5f3a4.firebaseapp.com",
    databaseURL: "https://projektor-5f3a4.firebaseio.com",
    storageBucket: "projektor-5f3a4.appspot.com",
    messagingSenderId: "405876172335"
  };
  firebase.initializeApp(config);

  // Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtLogin = document.getElementById('txtLogin');
const txtSignUp = document.getElementById('txtSignUp');
const txtLogout = document.getElementById('txtLogout');

// Add Login Event
btnLogin.addEventListener('click', e => {
	// Get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	// Sign in
	const promise = auth.signInWithEmailAndPassword(email, pass);

	promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener('click', e => {
		// Get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	// Sign in
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
	firebase.auth().signOut();
});

logoutText.addEventListener('click', e => {
	firebase.auth().signOut();
}) 




	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			window.location.href = 'home.html';
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}

	});



}());

  function logoutz(){
	firebase.auth().signOut();
	window.location.href = 'index.html';
	console.log('not logged in');
};
   









