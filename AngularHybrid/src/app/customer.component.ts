'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('customerModule').
  component('customerList', {
    templateUrl: 'customer.template.html',
    controller: ['customerController',
      function customerController() {
        this.customers = [
        { Name: "John", City: "HCM" },
        { Name: "Peter", City: "DN" },
        { Name: "Jane", City: "HN" }];
      }
    ]
  });
