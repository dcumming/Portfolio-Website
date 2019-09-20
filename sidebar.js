// all elements with class="tab"
var tabs = document.getElementsByClassName("tab");

/* remove the class "active" from each tab */
function reset() {
	var i;
	for (i = 0; i < tabs.length; i++) {
    	tabs[i].className = "tab";
  	}
}

/* updates the side bar by activating the clicked on tab and 
   deactivating all other tabs */
function paint(evt) {
  	reset();
  	evt.currentTarget.className += " active";
}

window.onscroll = function() {scroll_paint()};

/* checks to see which div the top of the scroll is currently in and 
   updates the side bar, activating the correct tab */
function scroll_paint() {
    var scroll_top = $(document).scrollTop(),
    	// tops of each section - subtract 10 pixels so clicking and scrolling is smoother
		edu_top = $('#education').position().top - 10,
		exp_top = $('#experience').position().top - 10,
    	proj_top = $('#projects').position().top - 10,
    	blog_top = $('#blog').position().top - 10;

    if (scroll_top < edu_top) {
        // In home div
        reset();
        document.getElementById('home-tab').className += " active";
    } else if (scroll_top >= edu_top && scroll_top < exp_top) {
        // In education div
        reset();
        document.getElementById('education-tab').className += " active";
    } else if (scroll_top >= exp_top && scroll_top < proj_top) {
    	// In experience div
    	reset();
        document.getElementById('experience-tab').className += " active";
    } else if (scroll_top >= proj_top && scroll_top < blog_top) {
    	// In projects div
    	reset();
        document.getElementById('projects-tab').className += " active";
    } else if (scroll_top >= blog_top) {
    	// In blog div
    	reset();
        document.getElementById('blog-tab').className += " active";
    }
}
