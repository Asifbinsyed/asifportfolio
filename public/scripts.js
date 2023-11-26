function showdropinfo(key)
{
    if (document.getElementById(key).classList.contains("abstractcollapsed")) {
    document.getElementById(key).classList.remove("abstractcollapsed");
    document.getElementById(key).classList.add("abstractexpanded");
  }
  else{
    document.getElementById(key).classList.add("abstractcollapsed");
    document.getElementById(key).classList.remove("abstractexpanded");
  }
}

function coloryear(key, year, curyear)
{
  var yearElem = document.getElementById(key + "year")
  if (yearElem){
    yearElem.style.color = "WHITESMOKE";
    // var curyear = {{ site.time | date: '%Y' }};
    yearElem.style.backgroundColor = "hsl(" + ((year - 2000.0)/(curyear - 2000)*40 + 200) + ", 0%,"  + ((curyear - year)/(curyear - 2015.0)*50 + 10) + "%)";
  }
}
