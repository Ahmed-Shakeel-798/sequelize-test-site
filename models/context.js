'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Context extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Context.hasMany(models.Task, {
        foreignKey: 'ContextId',
        onDelete: 'CASCADE'
      });
      Context.belongsTo(models.User, {
        foreignKey: 'UserId',
        onDelete: 'CASCADE'
      });
    }
  }
  Context.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Context',
  });
  return Context;
};