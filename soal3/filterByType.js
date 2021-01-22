const filterByType = (data, type, callback) => {
  const filtered = data.filter((item) => item.type === type);
  callback(filtered);
};

module.exports = filterByType
