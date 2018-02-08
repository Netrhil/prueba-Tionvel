<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Test Unitario</title>
  <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-2.5.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="https://code.jquery.com/qunit/qunit-2.5.0.js"></script>
  <script src="{{asset('js/blanket.min.js')}}"></script>
  <script src="{{asset('js/tests.js')}}" data-cover></script>
</body>
</html>