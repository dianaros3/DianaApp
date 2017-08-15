/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  Create Account */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#Create_account"); 
         return false;
    });
    
        /* button  .uib_w_17 */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_26"));  
         return false;
    });
    
        /* button  Information */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#Information"); 
         return false;
    });
    
        /* button  Feedback Form */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#FeedbackForm"); 
         return false;
    });
    
        /* button  Location Maps */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#LocationMaps"); 
         return false;
    });
    
        /* button  Videos */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#Videos"); 
         return false;
    });
    
        /* button  Charts */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#Charts"); 
         return false;
    });
    
        /* button  Others */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#Others"); 
         return false;
    });
    
        /* button  .uib_w_32 */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  .uib_w_35 */
    $(document).on("click", ".uib_w_35", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  .uib_w_38 */
    $(document).on("click", ".uib_w_38", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  .uib_w_41 */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  .uib_w_44 */
    $(document).on("click", ".uib_w_44", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  .uib_w_47 */
    $(document).on("click", ".uib_w_47", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
        /* button  Close */
    $(document).on("click", ".uib_w_49", function(evt)
    {
         /*global activate_page */
         activate_page("#Dashboard"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
