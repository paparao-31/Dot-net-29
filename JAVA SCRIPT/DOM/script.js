var mainDiv = document.getElementById('main')
var c = 0;
var mname = document.getElementById('mname');
var murl = document.getElementById('url');
var getMovie = function ()
{
    var mdiv = document.createElement('div');
    var mimg = document.createElement('img');
    mimg.src = murl.value;
    mimg.alt = mname.value;
    var mtitle = document.createElement('h2')
    mtitle.textContent = mname.value;
    mdiv.append(mimg, mtitle)
    mainDiv.appendChild(mdiv)
}