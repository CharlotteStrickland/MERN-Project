import { response } from "express";

export const getAirbnb = async (req, res) => {
  try {
    const allAirbnbs = await airbnb.find();
    res.status(200).json(allAirbnbs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAirbnb = async (req, res) => {
  const airbnb = req.body;

  const newAirbnb = new airbnb(airbnb);

  try {
    await newStudent.save();
    res.status(201).json(newAirbnb);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
