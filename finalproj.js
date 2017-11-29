/*** Object Constructors ***/
  
  /* Recipe object */
  function FavRecipe(favid, favname, favimage, favpros, favcons, favdescription, favresourcelink, favresourcetitle) {
    this.favid = favid;
    this.favname = favname;
    this.favimage = favimage;
    this.favpros = favpros;
    this.favcons = favcons;
    this.favdesc = favdescription;
    this.favresourcelink = favresourcelink;
    this.favresourcetitle = favresourcetitle;
}

 /* Ingredients object */
  function Ingredient(stage, time, involvement, data) {
    this.stage = stage;
    this.time = time;
    this.involvement = involvement;
    this.data = data;
  }


 /* Object array of research methods related data */
var products = {
    "recipes": [   
    	{
            "name": "A/B Testing",
            "stage": "Late Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Quantitative Data",
            "desc": "A/B tesing is an optimizaton technique that allows you to compare two different versions of a design to see which one gets you closer to a business objective.",
            "pros": "Helps you measure which design generates better results at generalizable scale",
            "cons": "Won't tell you why one design is preferred over the alternate",
            "resource-link": "https://www.nngroup.com/articles/putting-ab-testing-in-its-place",
            "resource-title": "Putting A/B Testing In Its Place",
            "img": "images/chicken-magnet.png",
            "id":0
        },  

		 {
            "name": "Artifact Analysis",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "No Involvement",
            "data": "Qualitative Data",
            "desc": "A systematic examination of the material, aesthetic and interactive qualities of objects - an attempt to understad the substance of an object and what it says through its material, aesthetic and interactive qualities.",
            "pros": "Can be very helpful for understanding physical and digital objects. Also a good tool for competitor analysis.",
            "cons": "Results can be misleading if objects are not observed in context",
            "resource-link": "http://www.paulos.net/teaching/2011/AO/readings/00DjajDISInte.pdf",
            "resource-title": "Methods for Exploring Aesthetic Interactions",
            "img": "images/bananas-magnet.png",
            "id":1      
        },  

		 {
            "name": "Automated Remote Research",
            "stage": "All",
            "time": "Low Time Investment",
            "involvement": "Passive Involvement",
            "data": "Quantitative Data",
            "desc": "Leveraging web-based tools to collect statistically significant information about what people are doing on your web site or application.",
            "pros": "Helps you measure user behavior at generalizable scale.",
            "cons": "Can not tell you why certain user behaviors occur or choices are made",
            "resource-link": "http://remoteresear.ch/",
            "resource-title": "http://remoteresear.ch/",
            "img": "images/burger-magnet.png",
            "id":2      
        },

     {
            "name": "Bodystorming",
            "stage": "Mid Stage",
            "time": "Low Time Investment",
            "involvement": "No Involvement",
            "data": "Qualitative Data",
            "desc": "In bodystorming you immerse yourself in user situations by conducting physical brainstorming, combining active role-play with simple prototypes.",
            "pros": "Can inspire the creations of additional new concepts. If well executed the process is seamlessly empathic.",
            "cons": "If not well-executed can lead to stereotyping and unusable solutions.",
            "resource-link": "https://designforservice.files.wordpress.com/2010/02/actors-hairdos-videotape.pdf",
            "resource-title": "Actors, Hairdos & Videotape -- Informance Design",
            "img": "images/cake-magnet.png",
            "id":3    
        },


  {
            "name": "Card Sorting",
            "stage": "Mid Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "All",
            "desc": "A participatory design technique that unveils how participants group items into categories and relate concepts to each other. Participants receive cards with printed concepts/items and are asked to group them.",
            "pros": "Great for evaluating/creating content architecture and identifying the mental model of your users.",
            "cons": "Need to find participants who care about the information, otherwise exercise can be done randomly.",
            "resource-link": "http://www.tandfonline.com/doi/abs/10.1080/00221309.1948.9918159?journalCode=vgen20",
            "resource-title": "A Simple Objective Technique for Measuring Flexibility in Thinking",
            "img": "images/cheese-magnet.png",
            "id":4    
        },

          {
            "name": "Competitive Testing",
            "stage": "All",
            "time": "Medium Time Investment",
            "involvement": "No Involvement",
            "data": "Qualitative Data",
            "desc": "The process of conducting research to evalute the usability and learnability of your competitors' products.",
            "pros": "Likely that you can reuse your own usability scripts, scenarios and tasks for competitor products.",
            "cons": "Potential for bias if participants understand your company is conducting the test. Third party consultants may be expensive.",
            "resource-link": "https://www.nngroup.com/articles/website-usability-differences/",
            "resource-title": "How Big is the Difference Between Websites?",
            "img": "images/cherries-magnet.png",
            "id":5   
        },

          {
            "name": "Contextual Inquiry",
            "stage": "Early Stage",
            "time": "High Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "An immersive, contextual method of observing and interviewing that reveals underlying work structure.",
            "pros": "Allows you to see actual user behavior in context and build a relationship with users via the master/apprentice relationship.",
            "cons": "If you do not pay significant attention to the interpretation phase after contextual interviews are completed then results will lack power.",
            "resource-link": "http://www.incontextdesign.com/",
            "resource-title": "http://www.incontextdesign.com/",
            "img": "images/hotdog-magnet.png",
            "id":6   
        },

                  {
            "name": "Critical Incident Technique",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "All",
            "desc": "Asking a user to restrospectively describe a situation about your product that ended well or poorly.",
            "pros": "Helps you generate representative scenarios that cover both positive and negative critical incidents as well as explanations.",
            "cons": "Need to be able to summarize the data in such a way that findings can be implements and inferences can be made to expain both types of incidents.",
            "resource-link": "https://books.apa.org/pubs/databases/psycinfo/cit-article.pdf",
            "resource-title": "The Critical Incident Technique",
            "img": "images/donut-magnet.png",
            "id":7   
        },

                  {
            "name": "Cultural Probes",
            "stage": "Early Stage",
            "time": "High Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Providing any numbers of materials designed to inspire people to contribute personal context and circumstance (past studies have included postcards, maps and cameras).",
            "pros": "Can give you insight into culture and deep personal attitudes/values. If done correctly can also build trust between researchers and participants.",
            "cons": "Needs to be highly personalized and contextualized to the group you are studying.",
            "resource-link": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.184.3859&rep=rep1&type=pdf",
            "resource-title": "Cultural Probes and the Value of Uncertainty",
            "img": "images/egg-magnet.png",
            "id":8   
        },

                  {
            "name": "Design Workshops",
            "stage": "Mid Stage",
            "time": "Large Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Engaging participants in projective techniques like mapping or collage to understand the user's world.",
            "pros": "Can help you build trust and get interesting insights for participants.",
            "cons": "Requires significant time investment in planning - timing and logistics of the session are key.",
            "resource-link": "https://blog.intercom.com/running-design-workshops/",
            "resource-title": "Designing workshops that work",
            "img": "images/fries-magnet.png",
            "id":9   
        },

                  {
            "name": "Desirability Testing",
            "stage": "Mid Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Showing participants design options and specifically asking them about the emotions and feelings that these design options evoke.",
            "pros": "Can be used on any level-fidelity of prototype and can help resolve arguments on which direction a product should go.",
            "cons": "Requires the team to think critically about and be bought into the emotional connection of the product as a value add for users.",
            "resource-link": "http://dmrussell.net/CHI2010/docs/p4703.pdf",
            "resource-title": "Understanding the Desirability Factor in User Experience",
            "img": "images/icecream-magnet.png",
            "id":10   
        },

                  {
            "name": "Diary Studies",
            "stage": "Early Stage",
            "time": "High Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Sampling information from participants at key moments throughout a day, week or month, usually by providing some kind of journal or blank template for completion.",
            "pros": "Allows you to see behavior changes over time and collect event-based information.",
            "cons": "Due to length of study may need higher incentives and/or specific plan in place for participant retention.",
            "resource-link": "https://www.nngroup.com/articles/diary-studies/",
            "resource-title": "Diary Studies: Understanding Long-Term User Behavior and Experiences",
            "img": "images/steak-magnet.png",
            "id":11  
        },

                  {
            "name": "Directed Storytelling",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Directed storytelling sessions involve prompting users to document their experiences via the personal stories they tell.",
            "pros": "Allows researchers to gather rich stories of lived experiences including environment, setting and characters.",
            "cons": "Requires some planning of thoughtful prompts and questions in order to get full context of story.",
            "resource-link": "http://www.paulos.net/teaching/2010/BID/assignments/a3/soiree/research2.html",
            "resource-title": "Directed Storytelling",
            "img": "images/noodles-magnet.png",
            "id":12 
        },

                  {
            "name": "Experience Prototyping",
            "stage": "Mid Stage",
            "time": "Low Time Investment",
            "involvement": "No Involvement",
            "data": "Qualitative Data",
            "desc": "Completing role-playing, simulation-type exercises to foster a vivid sense of a user's potential experience.",
            "pros": "Excellent tool for exploring and testing the touch points of a system across time and space.",
            "cons": "Exercises must be based on some research, otherwise this type of activity can encourage researchers' own biases.",
            "resource-link": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.93.9307&rep=rep1&type=pdf",
            "resource-title": "Experience Protoyping",
            "img": "images/pear-magnet.png",
            "id":13  
        },

                  {
            "name": "Experience Sampling",
            "stage": "Early Stage",
            "time": "High Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Requires participants to record or document something specific when signaled (typically by a device alarm).",
            "pros": "Provides a strategic sample of behaviors, thoughts, interactions, etc into a more comprehensive picture across time.",
            "cons": "Can be overwhelming or misleading if the team has not previously identified specific behavior they are interested in understanding.",
            "resource-link": "https://www.google.com/url?url=http://scholar.google.com/scholar_url%3Furl%3Dhttp://www.springer.com/cda/content/document/cda_downloaddocument/9789401790871-c2.pdf%26hl%3Den%26sa%3DX%26scisig%3DAAGBfm0nB7iglmqziQCIQRgjwX2wRdobSQ%26nossl%3D1%26oi%3Dscholarr&rct=j&q=&esrc=s&sa=X&ved=0ahUKEwi1-4Pl49LXAhUMRN8KHTezDyQQgAMIKCgBMAA&usg=AOvVaw2K1f0NV6r45kRkSs2MAOa7",
            "resource-title": "The Experience Sampling Method",
            "img": "images/bread-magnet.png",
            "id":14  
        },


                  {
            "name": "Experiments",
            "stage": "Late Stage",
            "time": "Medium Time Investment",
            "involvement": "Passive Involvement",
            "data": "Quantitative Data",
            "desc": "Experiments can determine cause and effect be creating conditions with a manipulated independent variable and measured dependent variable.",
            "pros": "In some cases allows the researcher to dermine that one thing is the result of another.",
            "cons": "In some cases researchers may confuse the results of their findings as causation when it is in fact, correlation. Requires a rigorous approach to method and analysis.",
            "resource-link": "http://www.mitpressjournals.org/doi/abs/10.1162/DESI_a_00026?journalCode=desi",
            "resource-title": "Relevant and Rigorous: Human-Centered Research and Design Education",
            "img": "images/pineapple-magnet.png",
            "id":15  
        },

                  {
            "name": "Eyetracking",
            "stage": "Late Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Quantitative Data",
            "desc": "Eyetracking gathers detailed technical information on exactly where and for how long participations are looking and not-looking when using an interface.",
            "pros": "Generates heatmaps which can isolate which features are attended to or not.",
            "cons": "Depending on the task being observed may require specialized equipment and setup.",
            "resource-link": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.294.4262&rep=rep1&type=pdf",
            "resource-title": "Eye Movements in Reading and Information Processing",
            "img": "images/shrimp-magnet.png",
            "id":16
        },


                  {
            "name": "Fly on the Wall Observation",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Passive Involvement",
            "data": "Qualitative Data",
            "desc": "Fly-on-the-wall observation allows researches to unobstrusively gather information by looking and listening without direct participation or interference iwth the people or behaviors being observed.",
            "pros": "Any time you believe people may edit speech, behaviors or actions, fly on the wall may be a great choice of method.",
            "cons": "May not work as well if you do not have pre-defined set of behaviors or actions you are trying to observe.",
            "resource-link": "https://www.ibm.com/developerworks/library/us-fly/index.html",
            "resource-title": "Fly on the Wall",
            "img": "images/spinach-magnet.png",
            "id":17  
        },

                  {
            "name": "Focus Groups",
            "stage": "Early Stage",
            "time": "High Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Gauging the opinions, feelings and attitudes from a group of carefully recruited participants about a product, service or brand.",
            "pros": "If a judgment-free setting is cultivated, participants may be more likely to share fantasies, wants and needs.",
            "cons": "Focus groups may be dominated or influenced by specific participants.",
            "resource-link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2550365/pdf/bmj00603-0031.pdf",
            "resource-title": "Introducing Focus Groups",
            "img": "images/strawberry-magnet.png",
            "id":18  
        },


                  {
            "name": "Graffiti Walls",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Graffiti walls provide an open canvas on which participants can offer comments on an environment or system within the context of use.",
            "pros": "Particularly useful in environments in which it may be challenging to collect information through traditional methods.",
            "cons": "Needs to be triangulated with other methods if you want to use insights for more than simple design inspiration.",
            "resource-link": "https://www.slideshare.net/peterroessler/g-wall-presentation",
            "resource-title": "The Graffiti Wall: An Emerging Method for Gathering Qualitative Feedback in a Public Setting",
            "img": "images/sushi-magnet.png",
            "id":19  
        },


                  {
            "name": "Heuristic Evaluation",
            "stage": "All",
            "time": "Low Time Investment",
            "involvement": "No Involvement",
            "data": "All",
            "desc": "Asking evaluators to asses an interface against a set of agreed-upon best practices or usability 'rules of thumb'.",
            "pros": "Heuristic evaluations can identify baseline usability problems that can be fixed before users are brought in.",
            "cons": "This method can occassionally raise false flags, that would not be an issue for actual users. Heuristics may also need to be adjusted depending on culture, audience, etc.",
            "resource-link": "http://www.planoriginal.net/books/Finding%20usability%20problems%20through%20heuristic%20evaluations.pdf",
            "resource-title": "Finding Usability Problems Through Heuristic Evaluations",
            "img": "images/tomato-magnet.png",
            "id":20  
        },


                  {
            "name": "Interviews",
            "stage": "All",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Collecting firsthand personal accounts of experience, opinions, attitudes and perceptions from participants.",
            "pros": "Can be adapated based on your research stage - from broad explanatory discussion to specific, task-based queries.",
            "cons": "Interviews should be conducted within a reasonable timeframe, otherwise participants may have trouble remembering specific events, attitudes, etc.",
            "resource-link": "https://www.interaction-design.org/literature/article/how-to-conduct-user-interviews",
            "resource-title": "How to Conduct User Interviews",
            "img": "images/watermelon-magnet.png",
            "id":21 
        },


                  {
            "name": "Literature Reviews",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "No Involvement",
            "data": "Qualitative Data",
            "desc": "Distilling information from published sources to capture the essence of previous research or projects to inform a current project.",
            "pros": "Allows you to contextualize the work you are doing and learn from previous efforts.",
            "cons": "Requires scoping else your literature review can sprawl into unrelated areas.",
            "resource-link": "http://writingcenter.unc.edu/tips-and-tools/literature-reviews/",
            "resource-title": "Literature Reviews",
            "img": "images/chickenleg-magnet.png",
            "id":22  
        },

                          {
            "name": "Love Letter + Breakup Letter",
            "stage": "Late Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Asking participants to write a love letter and a breakup letter to a particular product or service.",
            "pros": "Can illuminate deep and revealing relationships that people have with products and services.",
            "cons": "Can be misleading unless you also listen to participants reading their letters (written text can be misinterpreted when missing verbal cues).",
            "resource-link": "https://vimeo.com/11854531",
            "resource-title": "Smart Design: The Breakup Letter",
            "img": "images/lemon-magnet.png",
            "id":23  
        },

                          {
            "name": "Participant Observation",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Passive Involvement",
            "data": "Qualitative Data",
            "desc": "Immersive, ethnographic method for understanding situations and behaviors through the experience of membership participation in an activity or culture.",
            "pros": "Researchers can earn trust from participants by indicating they want to get involved in the culture/community.",
            "cons": "There are ethical considerations around how a researcher should express their membership to participants, and the data they should collect this way.",
            "resource-link": "http://psc.dss.ucdavis.edu/sommerb/sommerdemo/observation/partic.htm",
            "resource-title": "Participant Observation",
            "img": "images/croissant-magnet.png",
            "id":24  
        },

                          {
            "name": "Photo Studies",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Participants are given cameras and asked to photo-document aspects of hteir life and interactions.",
            "pros": "Provides the researcher with visual, self-reported insights into user behaviors and priorities.",
            "cons": "May need to combine this method with others (such as interviews) to get full context behind certain images and behaviors.",
            "resource-link": "http://dlrtoolkit.com/photo-studies/",
            "resource-title": "Photo Studies",
            "img": "images/sushi-magnet.png",
            "id":25  
        },

                          {
            "name": "Questionnaires",
            "stage": "All",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "All",
            "desc": "Survey instruments designed for collecting self-report information from people about their characteristics, thoughts, feeling, attitudes and behaviors, typically in written form.",
            "pros": "Simple to produce and administer, and results can be generalizable to a population depending on sample size and sampling strategy.",
            "cons": "Question phrasing and order can influence the type of responses you receive. Also easy to introduce bias depending on your sampling frame.",
            "resource-link": "http://libweb.surrey.ac.uk/library/skills/Introduction%20to%20Research%20and%20Managing%20Information%20Leicester/page_48.htm",
            "resource-title": "Questionnaires",
            "img": "images/pretzel-magnet.png",
            "id":26  
        },

                          {
            "name": "Remote Moderated Research",
            "stage": "Late Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "Qualitative Data",
            "desc": "Remotely observing users completing tasks on their own electronic devices.",
            "pros": "Can reveal rich insights into context of use outside a controlled lab environment. Also enables you to do research in other contexts (e.g. international research).",
            "cons": "May be most costly, and harder to control setup and task interpretation.",
            "resource-link": "https://pdfs.semanticscholar.org/31b8/779ba5a888e84cbf2024fb1885d877a3ba2a.pdf",
            "resource-title": "In the Lab and Out in the Wild",
            "img": "images/breadslice-magnet.png",
            "id":27  
        },
                          {
            "name": "Unobtrusive Measures",
            "stage": "Early Stage",
            "time": "Medium Time Investment",
            "involvement": "Passive Involvement",
            "data": "Qualitative Data",
            "desc": "Used to acquire information without direct contact with participants, through nonreactive physical traces, archives and observations.",
            "pros": "Digial media has created a plethora of useful digital footprints (E.g. wrieless network locations, tweets, etc).",
            "cons": "Need to be cognizant of ethical boundaries, since the method involves sleuthing for clues without participant knowledge.",
            "resource-link": "http://onlinelibrary.wiley.com/store/10.1525/aa.1968.70.1.02a00950/asset/aa.1968.70.1.02a00950.pdf;jsessionid=DD524E9CBD778CDAC97231FCC3608E20.f03t03?v=1&t=jabgr27o&s=9c59589370319441f0a9e40d92f752d49a95c0c2&systemMessage=Wiley+Online+Library+usage+report+download+page+will+be+unavailable+on+Friday+24th+November+2017+at+21%3A00+EST+%2F+02.00+GMT+%2F+10%3A00+SGT+%28Saturday+25th+Nov+for+SGT+",
            "resource-title": "Unobtrusive Measures: Nonreactive Research in the Social Sciences.",
            "img": "images/pretzel-magnet.png",
            "id":28  
        },

                          {
            "name": "Usability Testing",
            "stage": "Late Stage",
            "time": "Medium Time Investment",
            "involvement": "Active Involvement",
            "data": "All",
            "desc": "Observing an individual's experience with a digital application as they walk through the steps of a given task or set of tasks.",
            "pros": "Helps teams identify the parts of an interface that most regularly frustrate and confuse people. Can be a useful tool for exposing other stakeholders to research and user issues.",
            "cons": "Requires skilled facilitator, and targeted recruiting. If the wrong participants are recruited, usability testing can be a waste of time.",
            "resource-link": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.84.8860&rep=rep1&type=pdf",
            "resource-title": "Designing for Usability:Key Principles and What Designers Think",
            "img": "images/apple-magnet.png",
            "id":29  
        },
  ]
}

/* Function that runs on load */
$(document).ready(function(){

  /* Checks the current page -- and redirects after a few seconds if we are 
  on the loading page*/
  var pathname = window.location.pathname;
    if (pathname.indexOf("loadingpage.html") >= 0){
    $('body').delay(7000).fadeOut(1000).queue(newpage3);
      } else {
    }

  /* Checks local storage for favorited items*/
  var favorites = JSON.parse(localStorage.getItem("favsArray"));
    if (favorites == null) {
    } else {
    /*Updates saved text with current number of items*/
    $("#saved-text").text("Saved (" + favorites.length + ")");
    }

  /* Checks html in favorites page selection template*/
  var source = $("#fav-selection-template").html();
    if (source == null) {
    } else {
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using the saved favorites array data
    var newHTML = template(favorites);
    // add the new HTML to the page
    $("#product-selection-container").append(newHTML);
    }

	/* Checks local storage for chosen criteria from ingredients page*/
  var selectedIngredients = JSON.parse(localStorage.getItem("chosenCriteria"));

    if (selectedIngredients == null) {
        } else {

      /* Sets default value of dropdowns to what was selected*/
    	$("#selected-one").text(selectedIngredients.stage);
    	$("#selected-two").text(selectedIngredients.time);
    	$("#selected-three").text(selectedIngredients.involvement);
    	$("#selected-four").text(selectedIngredients.data);

    /* This section ensures that if the user wants to see all items, they can */
    /* Change all stage values of items to All if All Stages selected */
    if (selectedIngredients.stage == "All Stages") {
        var array = products["recipes"];
        for (i=0; i < array.length; i++) {
        array[i].stage = "All Stages";
        } 
      } else {
      }
      
    /* Change all time values of items to All if All Times selected */   
    if (selectedIngredients.time == "All Time Investments") {
        var array = products["recipes"];
        for (i=0; i < array.length; i++) {
        array[i].time = "All Time Investments";
        } 
      } else {
      }

    /* Change all involvement values of items to All if All Involvements selected */
    if (selectedIngredients.involvement == "All Involvement Types") {
        var array = products["recipes"];
        for (i=0; i < array.length; i++) {
        array[i].involvement = "All Involvement Types";
        }
      } else {
      }

    /* Change all data values of items to All if All Data types selected */
    if (selectedIngredients.data == "All Data Types") {
        var array = products["recipes"];
        for (i=0; i < array.length; i++) {
        array[i].data = "All Data Types";
        } 
      }else {
      }

    /* Filter the recipe array based on the criteria selected by user */
    var filtered = products["recipes"].filter(function(recipe){
                    return (recipe['stage'] === selectedIngredients.stage && 
                      (recipe['time'] === selectedIngredients.time ||
                      recipe['time'] === "All") &&  
                      recipe['involvement'] === selectedIngredients.involvement &&
                      (recipe['data'] === selectedIngredients.data ||
                      recipe['data'] === "All") 
                      )
                   });
    }

    /* Checks that the user will get a result*/
    if (filtered.length == 0) {
        /*If the user doesn't get any results, show them a message */
        $("#product-selection-container").append('<h3 id="no-results"> No results exist for your critera - adjust the dropdowns above to see some options!</h3>');
    } else {
      /* Checks html in results page selection template*/  
      var source = $("#selection-template").html();
        if (source == null) {
        } else {
        // compile the template into a function
        var template = Handlebars.compile(source);
        // create new HTML using our filtered recipe data
        var newHTML = template(filtered);
        // add the new HTML to the page
        $("#product-selection-container").append(newHTML);
      }
    }

  /* Hides specific elements of cards by default*/  
  $(".close-button").hide(); 
  $(".card-text").hide();
  $(".remove-text").hide();


  /* Hide and display relevant card info once title clicked*/  
  $(".product-selection").click(function() {
  /* get id of current selection's parent's parent*/
  var id = $(this).parent().parent().attr("id");
  $("#"+id+" .card-header").css("color", "white"); 
  $("#"+id+" .card-title").hide(); 
  $("#"+id+" .close-button").show(); 
  $("#"+id+" .card-text").show(); 
  $("#"+id+" .card-image").hide(); 
  $("#"+id+" .remove-text").show();
  });

  /* Hide and display relevant card info once close button clicked*/  
  $(".close-button").click(function(){
  /* get relevant id of current selection's parent's parent*/
  var id = $(this).parent().parent().attr("id");
  $("#"+id+" .card-header").css("color", "rgba(0, 0, 0, 0)"); 
  $("#"+id+" .card-title").show(); 
  $("#"+id+" .close-button").hide(); 
  $("#"+id+" .card-text").hide(); 
  $("#"+id+" .card-image").show(); 
  $("#"+id+ " .remove-text").hide();
  });

  /* Fade out page and go to next upon fridge click on home page*/  
  $("#fridge-area").click(function(){
    $('body').fadeOut(1000, newpage1)
  });

  /* Animate home box/spatula icon upon hover*/  
  $("#home-box").mouseenter(function(){
  $("#spatula-icon").animate({right: "-2px"}, "fast")
          .animate({right: "0px"}, "fast")
                 .animate({right: "2px"}, "fast")
                 .animate({right: "0px"}, "fast")
  });

  /* Fade out current page and go to home page after clicking home box*/  
  $("#home-box").click(function(){
    $('body').fadeOut(1000, newpage5)
  })

  /* Animate wishlist box/favorites icon upon hover*/  
  $("#wishlist-box").mouseenter(function(){
  $("#heart-icon").animate({left: "-2px"}, "fast")
          .animate({left: "0px"}, "fast")
                 .animate({left: "2px"}, "fast")
                 .animate({left: "0px"}, "fast")
  });

  /* Fade out current page and go to favorites page after clicking wishlist box*/  
  $("#wishlist-box").click(function(){
    $('body').fadeOut(1000, newpage4)
  });

  /* Animate wishlist box/favorites icon upon hover on the home page*/  
  $("#wishlist-box-2").mouseenter(function(){
  $("#heart-icon").animate({left: "-2px"}, "fast")
          .animate({left: "0px"}, "fast")
                 .animate({left: "2px"}, "fast")
                 .animate({left: "0px"}, "fast")
  });

  /* Fade out current page and go to favorites page after clicking wishlist box from homepage*/  
  $("#wishlist-box-2").click(function(){
    $('body').fadeOut(1000, newpage4)
  });

  /* Trigger on submit criteria button on ingredients page*/  
  $("#submit-criteria").click(function(){

    /* Store current selections as variables*/  
    var selectedStage = $('input[type=radio][name=stages]:checked').val();
    var selectedTime = $('input[type=radio][name=times]:checked').val();
    var selectedInvolvement = $('input[type=radio][name=involvements]:checked').val();
    var selectedData = $('input[type=radio][name=datum]:checked').val();

    /* Store variables in local storage*/
    chosenIngredients = new Ingredient(selectedStage, selectedTime, selectedInvolvement, selectedData);
    localStorage.setItem("chosenCriteria", JSON.stringify(chosenIngredients));

    /* Fade out ingredients page and go to loading page*/
    $('body').fadeOut(1000, newpage2)
  });


  /* Trigger on favorites icon button on results page*/  
  $(".fav-icon").click(function() {

    /* Store card data as variables*/   
   var id = $(this).parent().parent().parent().attr("id");
   var favoriteName = $("#"+id+" #name").text(); 
   var favoriteDesc = $("#"+id+" #desc").text(); 
   var favoritePros = $("#"+id+" #pros").text(); 
   var favoriteCons = $("#"+id+" #cons").text(); 
   var favoriteResourceText = $("#"+id+" #resources").text(); 
   var favoriteImage = $("#"+id+" #image").attr("src"); 
   var favoriteResourceLink = $("#"+id+" #resources").attr("href"); 

   /*Create a new product with the information obtained above*/ 
    var favoritedItem = new FavRecipe(id, favoriteName, favoriteImage, favoritePros,
      favoriteCons, favoriteDesc, favoriteResourceLink, favoriteResourceText);
    var oldFavs = JSON.parse(localStorage.getItem("favsArray")) || [];
         
    /*Add the new information to the favorites array*/ 
    oldFavs.push(favoritedItem);
    localStorage.setItem("favsArray", JSON.stringify(oldFavs));

    /*Update favorites counter in top right corner*/
    $("#saved-text").text("Saved (" + oldFavs.length + ")");
  });    

  /* Trigger on remove favorites text on favorites page*/  
  $(".remove-text").click(function() {
    /* Get current item id and then remove from the array*/
    var itemID = $(this).parent().parent().parent().attr("id");
    favorites.splice(itemID, 1);   
    /* Save new array back to local Storage */
    localStorage.setItem("favsArray", JSON.stringify(favorites));
    /*Reload the page*/
    location.reload();
  });    

  /*The follow code dynamically updates the results page as the user changes the
  dropdown menu options*/

   $("#dropdown-one").change(function(){
   /*Store the newly selected criteria into variables*/
    var newStage = $("#dropdown-one").val();
    var selectedTime = $("#selected-two").text();
    var selectedInvolvement = $("#selected-three").text();
    var selectedData = $("#selected-four").text();

    /*Create a new ingredients object based on these variables,
    save to location storage and reload the page*/
    chosenIngredients = new Ingredient(newStage, selectedTime, selectedInvolvement, selectedData);
    localStorage.setItem("chosenCriteria", JSON.stringify(chosenIngredients));
    location.reload();   
  });


  $("#dropdown-two").change(function(){
    /*Store the newly selected criteria into variables*/
    var selectedStage = $("#selected-one").text();
    var newTime = $("#dropdown-two").val();
    var selectedInvolvement = $("#selected-three").text();
    var selectedData = $("#selected-four").text();

    /*Create a new ingredients object based on these variables,
    save to location storage and reload the page*/
    chosenIngredients = new Ingredient(selectedStage, newTime, selectedInvolvement, selectedData);
    localStorage.setItem("chosenCriteria", JSON.stringify(chosenIngredients));
    location.reload();   
  });


  $("#dropdown-three").change(function(){
    /*Store the newly selected criteria into variables*/
    var selectedStage = $("#selected-one").text();
    var selectedTime = $("#selected-two").text();
    var newInvolvement = $("#dropdown-three").val();
    var selectedData = $("#selected-four").text();

    /*Create a new ingredients object based on these variables,
    save to location storage and reload the page*/
    chosenIngredients = new Ingredient(selectedStage, selectedTime, newInvolvement, selectedData);
    localStorage.setItem("chosenCriteria", JSON.stringify(chosenIngredients));
    location.reload();   
  });


  $("#dropdown-four").change(function(){
    /*Store the newly selected criteria into variables*/
    var selectedStage = $("#selected-one").text();
    var selectedTime = $("#selected-two").text();
    var selectedInvolvement = $("#selected-three").text();
    var newData = $("#dropdown-four").val();

    /*Create a new ingredients object based on these variables,
    save to location storage and reload the page*/
    chosenIngredients = new Ingredient(selectedStage, selectedTime, selectedInvolvement, newData);
    localStorage.setItem("chosenCriteria", JSON.stringify(chosenIngredients));
    location.reload();   
  });

});

  /*Function to go to ingredients page*/
  function newpage1(){
    window.location = "ingredientspage.html";
  };

  /*Function to go to loading page*/
  function newpage2(){
    window.location = "loadingpage.html";
  };

  /*Function to go to card results page*/
  function newpage3(){
    window.location = "cardresults.html";
  }

  /*Function to go to favorites page*/
  function newpage4(){
    window.location = "favcards.html";
  }

  /*Function to go to home page*/
  function newpage5(){
    window.location = "index.html";
  }

