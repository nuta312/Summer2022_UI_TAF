$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/smoke/Pages.feature");
formatter.feature({
  "line": 2,
  "name": "Pages",
  "description": "",
  "id": "pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 97800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on \"https://qa.imoving.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qa.imoving.com/",
      "offset": 12
    }
  ],
  "location": "Page_Steps.user_is_on(String)"
});
formatter.result({
  "duration": 9742097701,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Need to check pages activity",
  "description": "",
  "id": "pages;need-to-check-pages-activity",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on main page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User should choose \"My House\" value in What are You moving? field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should choose \"1 Bedroom (500-1000 sq ft)\" value in Move Size field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Compare Quotes button",
  "keyword": "When "
});
formatter.match({
  "location": "Page_Steps.user_is_on_main_page()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My House",
      "offset": 20
    }
  ],
  "location": "Page_Steps.user_should_choose_value_in_What_are_You_moving_field(String)"
});
formatter.result({
  "duration": 1170900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Bedroom (500-1000 sq ft)",
      "offset": 20
    }
  ],
  "location": "Page_Steps.user_should_choose_value_in_Move_Size_field(String)"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "location": "Page_Steps.user_clicks_on_Compare_Quotes_button()"
});
formatter.result({
  "duration": 11001,
  "status": "passed"
});
formatter.after({
  "duration": 16866355300,
  "status": "passed"
});
});