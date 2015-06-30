System.register('ng-cordova/calendar', [], function (_export) {
  // install  :     cordova plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git
  // link     :     https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.calendar', []).factory('$cordovaCalendar', ['$q', '$window', function ($q, $window) {
        return {
          createCalendar: function createCalendar(options) {
            var d = $q.defer(),
                createCalOptions = $window.plugins.calendar.getCreateCalendarOptions();

            if (typeof options === 'string') {
              createCalOptions.calendarName = options;
            } else {
              createCalOptions = angular.extend(createCalOptions, options);
            }

            $window.plugins.calendar.createCalendar(createCalOptions, function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          deleteCalendar: function deleteCalendar(calendarName) {
            var d = $q.defer();

            $window.plugins.calendar.deleteCalendar(calendarName, function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          createEvent: function createEvent(options) {
            var d = $q.defer(),
                defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

            defaultOptions = angular.extend(defaultOptions, options);

            $window.plugins.calendar.createEvent(defaultOptions.title, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          createEventWithOptions: function createEventWithOptions(options) {
            var d = $q.defer(),
                defaultOptionKeys = [],
                calOptions = window.plugins.calendar.getCalendarOptions(),
                defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

            defaultOptionKeys = Object.keys(defaultOptions);

            for (var key in options) {
              if (defaultOptionKeys.indexOf(key) === -1) {
                calOptions[key] = options[key];
              } else {
                defaultOptions[key] = options[key];
              }
            }

            $window.plugins.calendar.createEventWithOptions(defaultOptions.title, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), calOptions, function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          createEventInteractively: function createEventInteractively(options) {
            var d = $q.defer(),
                defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

            defaultOptions = angular.extend(defaultOptions, options);

            $window.plugins.calendar.createEventInteractively(defaultOptions.title, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          createEventInNamedCalendar: function createEventInNamedCalendar(options) {
            var d = $q.defer(),
                defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null,
              calendarName: null
            };

            defaultOptions = angular.extend(defaultOptions, options);

            $window.plugins.calendar.createEventInNamedCalendar(defaultOptions.title, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), defaultOptions.calendarName, function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          findEvent: function findEvent(options) {
            var d = $q.defer(),
                defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

            defaultOptions = angular.extend(defaultOptions, options);

            $window.plugins.calendar.findEvent(defaultOptions.title, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), function (foundEvent) {
              d.resolve(foundEvent);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          listEventsInRange: function listEventsInRange(startDate, endDate) {
            var d = $q.defer();

            $window.plugins.calendar.listEventsInRange(startDate, endDate, function (events) {
              d.resolve(events);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          listCalendars: function listCalendars() {
            var d = $q.defer();

            $window.plugins.calendar.listCalendars(function (calendars) {
              d.resolve(calendars);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          findAllEventsInNamedCalendar: function findAllEventsInNamedCalendar(calendarName) {
            var d = $q.defer();

            $window.plugins.calendar.findAllEventsInNamedCalendar(calendarName, function (events) {
              d.resolve(events);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          modifyEvent: function modifyEvent(options) {
            var d = $q.defer(),
                defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null,
              newTitle: null,
              newLocation: null,
              newNotes: null,
              newStartDate: null,
              newEndDate: null
            };

            defaultOptions = angular.extend(defaultOptions, options);

            $window.plugins.calendar.modifyEvent(defaultOptions.title, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), defaultOptions.newTitle, defaultOptions.newLocation, defaultOptions.newNotes, new Date(defaultOptions.newStartDate), new Date(defaultOptions.newEndDate), function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          },

          deleteEvent: function deleteEvent(options) {
            var d = $q.defer(),
                defaultOptions = {
              newTitle: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

            defaultOptions = angular.extend(defaultOptions, options);

            $window.plugins.calendar.deleteEvent(defaultOptions.newTitle, defaultOptions.location, defaultOptions.notes, new Date(defaultOptions.startDate), new Date(defaultOptions.endDate), function (message) {
              d.resolve(message);
            }, function (error) {
              d.reject(error);
            });

            return d.promise;
          }
        };
      }]);
    }
  };
});