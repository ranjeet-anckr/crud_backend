import axios from "axios";

const url =
  "https://crudcrud.com/api/c13a2907f7a8480d8c41987d32180ffe/unicorns";

const AddData = async (req, res) => {
  try {
    const response = await axios.post(url, req.body);
    console.log(response.data);
    res.status(200).json({ message: "Data successfully added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const products = await axios.get(url);
    res.status(200).json(products.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await axios.get(`${url}/${id}`);
    res.status(200).json(products.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editData = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.put(`${url}/${id}`, req.body);
    res.status(200).json({ message: "Data updated successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${url}/${id}`);
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { AddData, getData, getDataById, deleteData, editData };
