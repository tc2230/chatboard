module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      user: {
        type: Sequelize.STRING
      },
      msg: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      }
    }, {
      tableName: 'message', 
      timestamps: false, 
      noPrimaryKey: true // not working here
    });
    return Message;
  };