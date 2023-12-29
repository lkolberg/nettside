 import Quill from 'quill/dist/quill.js'


 var toolbarOptions = [
	['bold', 'italic', 'underline', 'strike'],        // toggled buttons
	[{ 'list': 'ordered'}, { 'list': 'bullet' }],
	[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  
	[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
	[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
	[{ 'font': [] }],
	[{ 'align': [] }],
	['clean']                                         // remove formatting button
  ];

var element; 
var editor;

 function init() {
	
	var editBtn = document.getElementById("edit");

	

	editBtn.addEventListener("click", () => {
		editor = new Quill('#editor', {
			modules: { toolbar: toolbarOptions },
			theme: 'snow',
			});
			editor.enable(true);
		 });
	var savetBtn = document.getElementById("save");
			
		savetBtn.addEventListener("click", () => {
			
			editor.enable(false);
			// call with instances of quill and your element
			element = document.getElementById("editor")
			
			destroy_quill(editor, element);
			
	});
   }
   window.onload = init;

   function destroy_quill(quill, el) {

    // remove toolbox
    quill.theme.modules.toolbar.container.remove();
    // remove clipboard
    quill.theme.modules.clipboard.container.remove();
    // remove tooltip
    quill.theme.tooltip.root.remove();
	requestAnimationFrame(() => {
		el.classList.remove("ql-container")
	  });
	
	  // set inner html
	  //el.innerHTML = quill.root.innerHTML


}


