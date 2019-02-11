$(document).ready(function()
{
   $('#wb_Text1').addClass('visibility-hidden');
   $('#wb_Text9').addClass('visibility-hidden');
   $('#wb_Team1').addClass('visibility-hidden');
   $('#wb_Team2').addClass('visibility-hidden');
   $('#wb_Team3').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   $('#wb_Name2').addClass('visibility-hidden');
   $('#wb_Name3').addClass('visibility-hidden');
   $('#wb_Text14').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[href*='#intro']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#intro').offset().top-50 }, 600, 'easeInQuad');
   });
   $("a[href*='#about']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#about').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text1Scroll()
   {
      var $obj = $("#wb_Text1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text1', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text1').inViewPort(true))
   {
      $('#wb_Text1').addClass("in-viewport");
   }
   Text1Scroll();
   $(window).scroll(function(event)
   {
      Text1Scroll();
   });
   $("a[href*='#team']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#team').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text9Scroll()
   {
      var $obj = $("#wb_Text9");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text9', 'transform-bounce-in-down', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text9', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text9').inViewPort(true))
   {
      $('#wb_Text9').addClass("in-viewport");
   }
   Text9Scroll();
   $(window).scroll(function(event)
   {
      Text9Scroll();
   });
   function Team1Scroll()
   {
      var $obj = $("#wb_Team1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team1', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team1').inViewPort(true))
   {
      $('#wb_Team1').addClass("in-viewport");
   }
   Team1Scroll();
   $(window).scroll(function(event)
   {
      Team1Scroll();
   });
   function Team2Scroll()
   {
      var $obj = $("#wb_Team2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team2', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team2').inViewPort(true))
   {
      $('#wb_Team2').addClass("in-viewport");
   }
   Team2Scroll();
   $(window).scroll(function(event)
   {
      Team2Scroll();
   });
   function Team3Scroll()
   {
      var $obj = $("#wb_Team3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team3', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team3').inViewPort(true))
   {
      $('#wb_Team3').addClass("in-viewport");
   }
   Team3Scroll();
   $(window).scroll(function(event)
   {
      Team3Scroll();
   });
   function Name1Scroll()
   {
      var $obj = $("#wb_Name1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name1').inViewPort(true))
   {
      $('#wb_Name1').addClass("in-viewport");
   }
   Name1Scroll();
   $(window).scroll(function(event)
   {
      Name1Scroll();
   });
   function Name2Scroll()
   {
      var $obj = $("#wb_Name2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name2', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name2').inViewPort(true))
   {
      $('#wb_Name2').addClass("in-viewport");
   }
   Name2Scroll();
   $(window).scroll(function(event)
   {
      Name2Scroll();
   });
   function Name3Scroll()
   {
      var $obj = $("#wb_Name3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name3', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name3').inViewPort(true))
   {
      $('#wb_Name3').addClass("in-viewport");
   }
   Name3Scroll();
   $(window).scroll(function(event)
   {
      Name3Scroll();
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text14Scroll()
   {
      var $obj = $("#wb_Text14");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text14', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text14', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text14').inViewPort(true))
   {
      $('#wb_Text14').addClass("in-viewport");
   }
   Text14Scroll();
   $(window).scroll(function(event)
   {
      Text14Scroll();
   });
   function Text5Scroll()
   {
      var $obj = $("#wb_Text5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text5').inViewPort(true))
   {
      $('#wb_Text5').addClass("in-viewport");
   }
   Text5Scroll();
   $(window).scroll(function(event)
   {
      Text5Scroll();
   });
});
