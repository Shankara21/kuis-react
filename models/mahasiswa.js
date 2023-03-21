module.exports = (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define(
    "Mahasiswa",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nim: {
        type: DataTypes.STRING,
      },
      nama: {
        type: DataTypes.STRING,
      },
      alamat: {
        type: DataTypes.TEXT,
      },
      hp: {
        type: DataTypes.STRING,
      },
      angkatan: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      jurusan: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "mahasiswas",
    }
  );
  return Mahasiswa;
};
