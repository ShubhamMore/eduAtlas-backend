const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const OnlineClassLink = require('../model/onlineClassLink.model');
const mongoose = require('mongoose');

exports.getAllMeetingLinks = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteMeetingLink = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateMeetingLink = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createMeetingLink = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOneMeetingLink = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMeetingLinks = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addRecording = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteRecording = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
