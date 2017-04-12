"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiKey = process.env.CANNABIS_REPORTS_API_KEY;
var setCannabisReportsKey = function setCannabisReportsKey(key) {
  exports.apiKey = apiKey = key;
  return null;
};

exports.apiKey = apiKey;
exports.setCannabisReportsKey = setCannabisReportsKey;