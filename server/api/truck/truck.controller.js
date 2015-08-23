'use strict';

var _ = require('lodash');
var Truck = require('../thing/thing.model');

// Get list of trucks
exports.index = function(req, res) {
  Truck.find(function (err, trucks) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(trucks);
  });
};

// Get a single truck
exports.show = function(req, res) {
  Truck.find({'owner': req.params.id}, function (err, truck) {
    if(err) { return handleError(res, err); }
    if(!truck) { return res.status(404).send('Not Found'); }
    return res.json(truck);
  });
};

// Creates a new truck in the DB.
exports.create = function(req, res) {
  Truck.create(req.body, function(err, truck) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(truck);
  });
};

// Updates an existing truck in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Truck.findById(req.params.id, function (err, truck) {
    if (err) { return handleError(res, err); }
    if(!truck) { return res.status(404).send('Not Found'); }
    var updated = _.merge(truck, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(truck);
    });
  });
};

// Deletes a truck from the DB.
exports.destroy = function(req, res) {
  Truck.findById(req.params.id, function (err, truck) {
    if(err) { return handleError(res, err); }
    if(!truck) { return res.status(404).send('Not Found'); }
    truck.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
