//$('[data-toggle="popover"]').popover(); 


    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        html : true,
        title : 'Employee More Info <a href="#" class="close" data-dismiss="alert">&times;</a> <a href="#" data-toggle="collapse" data-target=".popover-content" class="pull-right" id="ttack"><i class="fa fa-thumb-tack"></i></a>',
        content : 
		'<div class="form-group"><div class="col-sm-12 col-md-12 col-xs-12 text-center m-b-10"><img src="images/profile-pic.jpg" width="60"/></div><div class="col-sm-12 col-md-12 col-xs-12"><h4 class="media-heading">Address</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p></div></div>'
    });
	
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
	
	
	
