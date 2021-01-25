

var title = document.querySelectorAll(".gig-card-layout div .gig-wrapper .text-display-7");
var rating = document.querySelectorAll(".gig-rating span");
var count_rating = rating.length
var count_title = title.length
var count_value = 0;

//This Download function 
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
var all_titles = [];

for (let i = 0; i < count_rating; i++) {
    if (rating[i].innerText == "(1k+)") {
        all_titles.push("\n" + title[i].innerText)
        count_value++
    }

}
download("Gig_Title.txt", all_titles);
