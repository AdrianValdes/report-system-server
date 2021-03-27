const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { handleError } = require('../helpers/handleError');

const adapterReports = new FileSync('data/reportsDB.json');
const adapterBlackList = new FileSync('data/blackList.json');

const db = low(adapterReports);
const blackListDB = low(adapterBlackList);

const getAllReports = (req, res) => {
  const reports = db.get('elements').filter({ state: 'OPEN' });
  res.json(reports);
};

const resolveReport = (req, res, next) => {
  const { reportId } = req.params;
  const { ticketState } = req.body;
  const reportClosed = db
    .get('elements')
    .find({
      payload: {
        reportId,
      },
    })
    .assign({ state: ticketState })
    .write();
  if (!reportClosed.id) {
    return next(handleError(`Report with ID ${reportId} does not exist`));
  }

  res.json(reportClosed);
};

const blockReport = (req, res, next) => {
  const { id } = req.params;
  let idBlocked = blackListDB.get('blockedIds').find({ id }).value();
  if (!idBlocked) {
    idBlocked = blackListDB.get('blockedIds').push({ id }).write();
  }
  res.json(idBlocked);
};

module.exports = { getAllReports, resolveReport, blockReport };
