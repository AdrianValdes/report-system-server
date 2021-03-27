const {
  getAllReports,
  resolveReport,
  blockReport,
} = require('../controllers/reportsController');

const routes = (app) => {
  app.route('/reports').get(getAllReports);

  app.route('/reports/:reportId').put(resolveReport);

  app.route('/blacklist/:id').put(blockReport);
};
module.exports = { routes };
