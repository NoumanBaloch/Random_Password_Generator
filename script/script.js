let keylist = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'
var tmp = ''
let generatepass = function(plength) {
	tmp = ''
	for (let i = 0; i < plength; i++) {
		tmp += keylist.charAt(Math.floor(Math.random()*keylist.length))
	}
	return tmp
}

let populateform = function(enterlength) {
	document.passGen.output.value = generatepass(enterlength)
}








