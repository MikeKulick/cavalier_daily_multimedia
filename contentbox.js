function tabSwitch(new_tab, new_content) {

	document.getElementById('popular').style.display = 'none';
	document.getElementById('comments').style.display = 'none';
	document.getElementById('blog').style.display = 'none';
	document.getElementById(new_content).style.display = 'block';	

	document.getElementById('populartab').className = '';
	document.getElementById('commentstab').className = '';
	document.getElementById('blogtab').className = '';
	document.getElementById(new_tab).className = 'active';		

}