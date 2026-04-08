document.getElementById('tampil').onclick = function(){
	var nama=document.getElementById('name').value.trim();
	if (nama===""){
		nama="('Nama harus diisi')";
	}
	
	var kelas=document.getElementById('class').value.trim();
	if (kelas===""){
		kelas="('Kelas harus diisi')";
	}
	
	
	var age ="";
	var radios = document.getElementsByName('age');
	for( var i=0; i<radios.length; i++){
		if (radios[i].checked){
			age=radios[i].value;
			break;
		}
}
		if (age===""){
			age="(umur belum diisi)";
		}
	var gender ="";
	var radios = document.getElementsByName('gender');
	for( var i=0; i<radios.length; i++){
		if (radios[i].checked){
			gender=radios[i].value;
			break;
		}
}
		if (gender===""){
			gender="(Jenis kelamin belum diisi)";
		}
		var tingkatan ="";
	var radios = document.getElementsByName('tingkatan');
	for( var i=0; i<radios.length; i++){
		if (radios[i].checked){
			tingkatan=radios[i].value;
			break;
		}
}
		if (tingkatan===""){
			tingkatan="(tingkatan belum diisi)";
		}
		var setuju=document.getElementById('setuju').checked ? "ya":"tidak";
		var show = "Nama:" + nama + "Kelas:" + kelas +"\nAge:" + age +"\nGender:" + gender+"\nTingkatan:" + tingkatan + "\nSetuju:" + setuju;
		document.getElementById('hasil').innerText = show;
}