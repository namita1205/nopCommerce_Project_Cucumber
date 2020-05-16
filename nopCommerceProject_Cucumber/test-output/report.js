$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Customer.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "below are common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user clicks on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_on_customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clicks_on_customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Add new button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clicks_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Add new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer info",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_enters_customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "below are common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by Email Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_on_customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clicks_on_customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters customer Email",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enters_customer_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.clicks_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should find Email in the Search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_find_Email_in_the_Search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "below are common steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Customer by First and Last Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_on_customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clicks_on_customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters  Customers First name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enters_Customers_First_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters Customers Last name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enters_Customers_Last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.clicks_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should find Name in the Search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_find_Name_in_the_Search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify page title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on logout",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify page title \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters Email \"\u003cemail\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "verify page title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on logout",
  "keyword": "When "
});
formatter.step({
  "name": "verify page title \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin1@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify page title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on logout",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify page title \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_page_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Email \"admin1@yourstore.com\" and Password \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify page title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_page_title(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administratio]n\u003e but was:\u003c[Your store. Logi]n\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.Steps.verify_page_title(Steps.java:82)\r\n\tat ✽.verify page title \"Dashboard / nopCommerce administration\"(file:Features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on logout",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_on_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify page title \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.verify_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});