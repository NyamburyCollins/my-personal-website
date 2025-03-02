
    var tablinks= document.getElementsByClassName("tab-links");
    var tabcontent= document.getElementsByClassName("tab-contents");

    function Opentab(tabname){
      for(tablink of tablinks){
        tablink.classlist.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
      }
      event.currentTarget.classlist.add ("active");
      document.getElementById(tabname).classList.add("active-tab");
    }