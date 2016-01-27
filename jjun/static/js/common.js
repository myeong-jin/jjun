console.log("Hi JJun");
$().ready(function(){
	$('#file').on("change", parseImage);
});

function parseImage(){

	$('#ajaxUploadForm')[0].action = "/parseImage";
	$('#ajaxUploadForm')[0].method = "post";

	var form = $('#ajaxUploadForm').ajaxSubmit({

		beforeSubmit: function(arr, $form, options) {
			console.log("beforeSubmit");
		}

	});

	var xhr = form.data('jqxhr');

	xhr.done(function() {
		
	});

	xhr.success(function(data){

		console.dir(data);

		if(data.result) {
		}

	})

	xhr.fail(function(){
		console.log("fail");
	})
}

