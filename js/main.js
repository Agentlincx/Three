    
var bn = JSON.parse('{"x" : [["HOME", ""],["SKILLS", ""],["SOCIALS", ""],["CONTACT", ""], ["ABOUT", ""]]}');

(function() {
  var a = document.querySelectorAll(".navl");

  for (var i of a) {

    for (var y of bn.x) {
      var c = document.createElement("a");
      c.innerText = y[0];
      i.appendChild(c);
    }
  }
})();


function nav(a) {
  var b = document.querySelector("#nav>div:nth-child(2)");
  var d = document.querySelector("#navc");
  var e = document.querySelectorAll("#navc a");
  b.classList.toggle("nava");
  d.classList.toggle("navc");
  for (var i = 0; i < e.length; i++) {
    e[i].classList.toggle("anav");
  }
}

(function() {

  var b = document.querySelector("#navc>div");
  for (var i = 0; i < bn.x.length; i++) {
    var c = document.createElement("a");
    c.href = bn.x[i][1];
    c.innerText = bn.x[i][0];
    c.style.transition = "transform 1s ease "+i/4+"s, color 2s ease 0s";
    c.onclick = function () {
      nav(this);
    }
    b.appendChild(c);
  }
/*
  var ba = document.querySelector("#lnav>div:nth-child(2)");
  for (var j = 0; j < bn.x.length; j++) {
    var ca = document.createElement("a");
    ca.href = bn.x[j][1];
    ca.innerText = bn.x[j][0];
    ca.style.transition = "opacity .5s";
    ba.appendChild(ca);
  }
  */
})();


(function(){
  var b = ["Developer", "Freelancer", "Programmer", "Manager", "Creator", "Builder", "Mentor"];
  
  var a = document.querySelector("#lst");
  var pos = 0;
  
  (function arr(){
    if(pos>=b.length){
      pos = 0;
    }
    a.innerText = b[pos];
    pos++
    setTimeout(arr, 6000);
  })();
  
})();



(function(){
  var skl = JSON.parse('{"sk":[["fas", "globe", "Web Development", "We specialize in building, designing and managing website either static or dynamic for large, medium or small scale organizations or personal."], ["fab", "android", "App Development", "Android and IOS application designing, maintenance and implementation are managed by the team with regular updates for users."], ["fas", "database", "Database Programming", "Database management be it MySQL, SQLite, PostgreSQL, MariaDB, Oracle, etc for different projects is managed by team. Regular backup is ensured to avoid loss of data."], ["fab", "hornbill", "Project Management", "Projects of different kinds can be managed and continued by our team. The project are usually optimized where necessary to ensure a better user experience."], ["fab", "java", "Java Programming", "Java programs or apis can be implemented in projects where necessary. Native C++ or #C can also be implemented in various projects including Android via NDK."], ["fab", "jira", "UI/UX", "Need a project where users get the best experience and a responsive and well-formed presentation, our team covers all the that with necessary frameworks for such operations."], ["fas", "atom", "Fullstack Development", "Our team is equipped with various skilled and creative programmers ready to jump into action and get your project started."], ["fas", "edit", "Content Writing", "Need writers for your blog or project, our writers got you covered whether poems, short stories, creative templates, blog contents, etc."]]}');
  
  var a = document.querySelector("#k2>div:nth-child(3)");
  
  for (var i of skl.sk) {
    var b = document.createElement("div");
    var c = document.createElement("i");
    c.classList.add(i[0]);
    c.classList.add("fa-"+i[1]);
    c.classList.add("fa-2x");
    var d = document.createElement("div");
    d.innerText = i[2];
    var e = document.createElement("div");
    e.innerText = i[3];
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    a.appendChild(b);
  }
})();




(function(){
  var a = document.querySelector("#k7>div:nth-child(2)>div:nth-child(3)>div:nth-child(2)");
  var b = [["fab", "whatsapp", "https://wa.me/+2348123413704"], ["fas", "envelope", "mailto:acedev@gmail.com"], ["fas", "paper-plane", ""], ["fab", "linkedin-in", ""]];
  
  for (var i of b) {
    var c = document.createElement("a");
    c.href = i[2];
    
    var d = document.createElement("i");
    d.classList.add(i[0]);
    d.classList.add("fa-" + i[1]);
    
    c.appendChild(d);
    a.appendChild(c);
  }
})();



