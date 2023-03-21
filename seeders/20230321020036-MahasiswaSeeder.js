"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Mahasiswas", [
      {
        NIM: "180823453",
        nama: "Mahasiswa 1",
        alamat: "Jl. Soekarno Hatta No. 9 Malang",
        hp: "081802023249",
        angkatan: 2018,
        status: "aktif",

        jurusan: "Teknik Informatika",
      },
      {
        NIM: "140823453",
        nama: "Mahasiswa X",
        alamat: "Jl. Menur No. 9 Surabaya",
        hp: "081802023523",
        angkatan: 2014,
        status: "lulus",

        jurusan: "Teknik Informatika",
      },
      {
        NIM: "2041720052",
        nama: "Ahmad Dani Maulana",
        alamat: "Pasuruan",
        hp: "081515349857",
        angkatan: "2020",
        status: "aktif",
        jurusan: "Teknik Informatika",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Mahasiswas", null, {});
  },
};
