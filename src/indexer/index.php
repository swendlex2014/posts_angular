<!DOCTYPE html>
<html dir="ltr" lang="fr" ng-app="wsapp">
<head>
  <base href="/ws_blog_ang/www/">
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <script type="text/javascript" src="js/jquery.js"></script>
  <script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <?php require_once('seo.php') ?>
  <link rel="stylesheet" type="text/css" href="css/arrows.css" />
  <link rel="stylesheet" type="text/css" href="css/normalize.css" />
  <link rel="stylesheet" type="text/css" href="css/highlight.css" />
  <link rel="stylesheet" type="text/css" href="css/component.css" />
  <link rel="stylesheet" type="text/css" href="css/blog.css" />
</head>
<body class="blog-entry">
  <div class="svg-wrap">
    <svg width="64" height="64" viewBox="0 0 64 64">
      <path id="arrow-left-5" d="M48 10.667q1.104 0 1.885 0.781t0.781 1.885-0.792 1.896l-16.771 16.771 16.771 16.771q0.792 0.792 0.792 1.896t-0.781 1.885-1.885 0.781q-1.125 0-1.896-0.771l-18.667-18.667q-0.771-0.771-0.771-1.896t0.771-1.896l18.667-18.667q0.771-0.771 1.896-0.771zM32 10.667q1.104 0 1.885 0.781t0.781 1.885-0.792 1.896l-16.771 16.771 16.771 16.771q0.792 0.792 0.792 1.896t-0.781 1.885-1.885 0.781q-1.125 0-1.896-0.771l-18.667-18.667q-0.771-0.771-0.771-1.896t0.771-1.896l18.667-18.667q0.771-0.771 1.896-0.771z" />
    </svg>
    <svg width="64" height="64" viewBox="0 0 64 64">
      <path id="arrow-right-5" d="M29.333 10.667q1.104 0 1.875 0.771l18.667 18.667q0.792 0.792 0.792 1.896t-0.792 1.896l-18.667 18.667q-0.771 0.771-1.875 0.771t-1.885-0.781-0.781-1.885q0-1.125 0.771-1.896l16.771-16.771-16.771-16.771q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76zM13.333 10.667q1.104 0 1.875 0.771l18.667 18.667q0.792 0.792 0.792 1.896t-0.792 1.896l-18.667 18.667q-0.771 0.771-1.875 0.771t-1.885-0.781-0.781-1.885q0-1.125 0.771-1.896l16.771-16.771-16.771-16.771q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76z" />
    </svg>
  </div>

  <div id="container" class="container intro-effect-side" ng-controller="landingCtrl">
    <nav class="nav-growpop">
      <a class="prev">
        <span class="icon-wrap"><svg class="icon" width="24" height="24" viewBox="0 0 64 64"><use xlink:href="#arrow-left-5"></svg></span>
        <div ng-click="update(post.prev.ID)">
          <span>Previous Post</span>
          <h3>{{post.prev.t}}</h3>
          <p>{{post.prev.s}}</p>
          <img ng-src="{{post.prev.i}}" alt="Next thumb"/>
        </div>
      </a>
      <a class="next">
        <span class="icon-wrap"><svg class="icon" width="24" height="24" viewBox="0 0 64 64"><use xlink:href="#arrow-right-5"></svg></span>
        <div ng-click="update(post.next.ID)">
          <span>Next Post</span>
          <h3>{{post.next.t}}</h3>
          <p>{{post.next.s}}</p>
          <img ng-src="{{post.next.i}}" alt="Next thumb"/>
        </div>
      </a>
    </nav>
    <header class="header">
      <div class="bg-img"><img ng-src="{{post.entry.i}}" alt="Background Image" /></div>
      <div class="title">
        <h1>{{post.entry.t}}</h1>
        <p class="subline">{{post.entry.s}}</p>
        <p>by <strong>{{post.author.n}}</strong> &#8212; Posted in <strong>{{post.entry.c}}</strong> on <strong>{{post.entry.d}}</strong></p>
      </div>
    </header>
    <div ng-view></div>
    <button class="trigger" data-info="Read More..."><span>Trigger</span></button>
    <article class="content">
      <div>
      <span ng-bind-html="post.entry.p | sanitize"></span>
      </div>
    </article>
  </div>

  <script type="text/javascript" src="js/highlight.min.js"></script>
  <script type="text/javascript" src="js/dependencies/showdown.min.js"></script>
  <script type="text/javascript" src="js/angular/angular.min.js"></script>
  <script type="text/javascript" src="js/angular/angular-route.min.js"></script>
  <script type="text/javascript" src="js/angular/angular-sanitize.min.js"></script>
  <script type="text/javascript" src="js/angular/angularjs-viewhead.js"></script>
  <script type="text/javascript" src="js/angular/patternRestrict.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
  <script src="js/classie.js"></script>
</body>
</html>