import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const letterToNum = (letter) => {
    switch (letter) {
      case "A":
        return 1;
        break;
      case "B":
        return 2;
        break;
      case "C":
        return 3;
        break;
      case "D":
        return 4;
        break;
      case "E":
        return 5;
        break;
      case "F":
        return 6;
        break;
      case "G":
        return 7;
        break;
      case "H":
        return 8;
        break;
      case "I":
        return 9;
        break;
      case "J":
        return 10;
        break;
      case "K":
        return 11;
        break;
      case "L":
        return 12;
        break;
      case "M":
        return 13;
        break;
      case "N":
        return 14;
        break;
      case "O":
        return 15;
        break;
      case "P":
        return 16;
        break;
      case "Q":
        return 17;
        break;
      case "R":
        return 18;
        break;
      case "S":
        return 19;
        break;
      case "T":
        return 20;
        break;
      case "U":
        return 21;
        break;
      case "V":
        return 22;
        break;
      case "W":
        return 23;
        break;
      case "X":
        return 24;
        break;
      case "Y":
        return 25;
        break;
      case "Z":
        return 26;
        break;
      case " ":
        return 0;
        break;
    }
  };

  const numToLetter = (num) => {
    switch (num) {
      case 1:
        return "A";
        break;
      case 2:
        return "B";
        break;
      case 3:
        return "C";
        break;
      case 4:
        return "D";
        break;
      case 5:
        return "E";
        break;
      case 6:
        return "F";
        break;
      case 7:
        return "G";
        break;
      case 8:
        return "H";
        break;
      case 9:
        return "I";
        break;
      case 10:
        return "J";
        break;
      case 11:
        return "K";
        break;
      case 12:
        return "L";
        break;
      case 13:
        return "M";
        break;
      case 14:
        return "N";
        break;
      case 15:
        return "O";
        break;
      case 16:
        return "P";
        break;
      case 17:
        return "Q";
        break;
      case 18:
        return "R";
        break;
      case 19:
        return "S";
        break;
      case 20:
        return "T";
        break;
      case 21:
        return "U";
        break;
      case 22:
        return "V";
        break;
      case 23:
        return "W";
        break;
      case 24:
        return "X";
        break;
      case 25:
        return "Y";
        break;
      case 26:
        return "Z";
        break;
      case 0:
        return " ";
        break;
    }
  };

  let table = [
    ["A", 1, -26],
    ["B", 2, -25],
    ["C", 3, -24],
    ["D", 4, -23],
    ["E", 5, -22],
    ["F", 6, -21],
    ["G", 7, -20],
    ["H", 8, -19],
    ["I", 9, -18],
    ["J", 10, -17],
    ["K", 11, -16],
    ["L", 12, -15],
    ["M", 13, -14],
    ["N", 14, -13],
    ["O", 15, -12],
    ["P", 16, -11],
    ["Q", 17, -10],
    ["R", 18, -9],
    ["S", 19, -8],
    ["T", 20, -7],
    ["U", 21, -6],
    ["V", 22, -5],
    ["W", 23, -4],
    ["X", 24, -3],
    ["Y", 25, -2],
    ["Z", 26, -1],
    [" ", 27, 0],
  ];

  let encryptionTable = [
    [2, 14],
    [4, 7],
    [5, 11],
    [7, 4],
    [8, 17],
    [10, 19],
    [11, 5],
    [13, 25],
    [14, 2],
    [16, 22],
    [17, 8],
    [19, 10],
    [20, 23],
    [22, 16],
    [23, 20],
    [25, 13],
    [26, 26],
  ];

  const returnInverse = (determinate) => {
    let mod27Num = determinate % 27;
    switch (mod27Num) {
      case 2:
        return 14;
        break;
      case 4:
        return 7;
        break;
      case 5:
        return 11;
        break;
      case 7:
        return 4;
        break;
      case 8:
        return 17;
        break;
      case 10:
        return 19;
        break;
    }
  };

  let encryptionMatrix = [
    [6, 5, 1, 3],
    [4, 3, 1, 2],
    [1, 6, 0, 3],
    [0, 5, 1, 2],
  ];

  let text = "PLEASE USE THE OTHER DOOR";

  const RenderTable = () => {
    return table.map((alphabat) => (
      <div>{alphabat[0] + " " + " " + alphabat[1] + alphabat[2]}</div>
    ));
  };

  const RenderEnncryptionTable = () => {
    return encryptionTable.map((pair) => <div>{pair[0] + " " + pair[1]}</div>);
  };

  const RenderMatrixEncryption = () => {
    return encryptionMatrix.map((num) => <div>{num}</div>);
  };

  const CalculateDeterminate = () => {
    let lwr_matrix_aa =
      (encryptionMatrix[3][3] * encryptionMatrix[2][2] -
        encryptionMatrix[2][3] * encryptionMatrix[3][2]) *
      encryptionMatrix[1][1];
    let lwr_matrix_ab =
      (encryptionMatrix[3][3] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][2];
    let lwr_matrix_ac =
      (encryptionMatrix[3][2] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][3];

    let matrix1 =
      (lwr_matrix_aa - lwr_matrix_ab + lwr_matrix_ac) * encryptionMatrix[0][0];

    let lwr_matrix_ba =
      (encryptionMatrix[3][3] * encryptionMatrix[2][2] -
        encryptionMatrix[3][2] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][0];

    let lwr_matrix_bb =
      (encryptionMatrix[3][3] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][2];

    let lwr_matrix_bc =
      (encryptionMatrix[3][2] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][3];

    let matrix2 =
      (lwr_matrix_ba - lwr_matrix_bb + lwr_matrix_bc) * encryptionMatrix[0][1];

    let lwr_matrix_ca =
      (encryptionMatrix[3][3] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][0];

    let lwr_matrix_cb =
      (encryptionMatrix[3][3] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][1];

    let lwr_matrix_cc =
      (encryptionMatrix[3][1] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][1]) *
      encryptionMatrix[1][3];

    let matrix3 =
      (lwr_matrix_ca - lwr_matrix_cb + lwr_matrix_cc) * encryptionMatrix[0][2];

    let lwr_matrix_da =
      (encryptionMatrix[3][2] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][0];

    let lwr_matrix_db =
      (encryptionMatrix[3][2] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][1];

    let lwr_matrix_dc =
      (encryptionMatrix[3][1] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][1]) *
      encryptionMatrix[1][2];

    let matrix4 =
      (lwr_matrix_da - lwr_matrix_db + lwr_matrix_dc) * encryptionMatrix[0][3];

    let determinate = matrix1 - matrix2 + matrix3 - matrix4;

    return <div>{determinate}</div>;
  };

  // let digraphArr = [];

  // const [setDiagraphArr, diagraphArr] = useState([]);
  let inputTextArr = [];

  const EncryptText = () => {
    inputTextArr = [];
    let tempText = "PLEASE USE THE OTHER DOOR";

    while (tempText.length % 4 != 0) {
      tempText = tempText + " ";
    }
    for (let i = 0; i < tempText.length; i += 4) {
      inputTextArr.push(tempText.substring(i, i + 4));
    }

    return inputTextArr.map((arr) => <div>{arr}</div>);
  };

  let encryptedArr = [];

  const EncryptToNumber = () => {
    encryptedArr = [];
    let tempArr = [];
    inputTextArr.map((str) => {
      tempArr = [];
      for (let i = 0; i < 4; i += 1) {
        tempArr.push(letterToNum(str.substring(i, i + 1)));
      }
      // console.log(tempArr);
      encryptedArr.push(tempArr);
    });

    return <div></div>;
  };

  let allColumnMod27Arr = [];
  const EncryptNumberWithMatrix = () => {
    let mod27ColumnArr = [];
    let columnArr = [];
    let allColumnArr = [];
    allColumnMod27Arr = [];
    let a = 0;
    for (let i = 0; i < encryptedArr.length; i += 1) {
      columnArr = [];
      mod27ColumnArr = [];
      for (let j = 0; j < encryptionMatrix.length; j += 1) {
        a = 0;
        for (let k = 0; k < 4; k += 1) {
          a += encryptionMatrix[j][k] * encryptedArr[i][k];
        }
        columnArr.push(a);
        mod27ColumnArr.push(a % 27);
      }
      allColumnArr.push(columnArr);
      allColumnMod27Arr.push(mod27ColumnArr);
    }

    return allColumnArr.map((col) => (
      <div className="test">
        <div>{col[0]}</div>
        <div>{col[1]}</div>
        <div>{col[2]}</div>
        <div>{col[3]}</div>
      </div>
    ));
  };

  const EncryptNumberMod27 = () => {
    return allColumnMod27Arr.map((col) => (
      <div className="test">
        <div>{col[0]}</div>
        <div>{col[1]}</div>
        <div>{col[2]}</div>
        <div>{col[3]}</div>
      </div>
    ));
  };

  const ModNumToLetter = () => {
    let tempArray = [];
    allColumnMod27Arr.map((arr) => {
      arr.map((num) => {
        tempArray.push(numToLetter(num));
      });
    });
    // console.log("inside tempArr", tempArray);

    return tempArray.map((letter) => <div>{letter}</div>);
  };

  let cofactorMatrix = [];
  const CofactorMatrix = () => {
    cofactorMatrix = [];

    let m00_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][2] -
        encryptionMatrix[3][2] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][1];

    let m00_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][2];

    let m00_3 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][3];

    let m00 = 1 * (m00_1 - m00_2 + m00_3);

    let m01_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][2] -
        encryptionMatrix[3][2] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][0];

    let m01_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][2];

    let m01_3 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][3];

    let m01 = -1 * (m01_1 - m01_2 + m01_3);

    let m02_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][0];

    let m02_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[1][1];

    let m02_3 =
      (encryptionMatrix[3][1] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][1]) *
      encryptionMatrix[1][3];

    let m02 = 1 * (m02_1 - m02_2 + m02_3);

    let m03_1 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][0];

    let m03_2 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][2]) *
      encryptionMatrix[1][1];

    let m03_3 =
      (encryptionMatrix[3][1] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][1]) *
      encryptionMatrix[1][2];

    let m03 = -1 * (m03_1 - m03_2 + m03_3);

    let row1 = [m00, m01, m02, m03];
    cofactorMatrix.push(row1);

    let m10_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][2] -
        encryptionMatrix[3][2] * encryptionMatrix[2][3]) *
      encryptionMatrix[0][1];

    let m10_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][3]) *
      encryptionMatrix[0][2];

    let m10_3 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][2]) *
      encryptionMatrix[0][3];

    let m10 = -1 * (m10_1 - m10_2 + m10_3);

    let m11_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][2] -
        encryptionMatrix[3][2] * encryptionMatrix[2][3]) *
      encryptionMatrix[0][0];

    let m11_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[0][2];

    let m11_3 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][2]) *
      encryptionMatrix[0][3];

    let m11 = 1 * (m11_1 - m11_2 + m11_3);

    let m12_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][3]) *
      encryptionMatrix[0][0];

    let m12_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][3]) *
      encryptionMatrix[0][1];

    let m12_3 =
      (encryptionMatrix[3][1] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][1]) *
      encryptionMatrix[0][3];

    let m12 = -1 * (m12_1 - m12_2 + m12_3);

    let m13_1 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][1] -
        encryptionMatrix[3][1] * encryptionMatrix[2][2]) *
      encryptionMatrix[0][0];

    let m13_2 =
      (encryptionMatrix[3][2] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][2]) *
      encryptionMatrix[0][1];

    let m13_3 =
      (encryptionMatrix[3][1] * encryptionMatrix[2][0] -
        encryptionMatrix[3][0] * encryptionMatrix[2][1]) *
      encryptionMatrix[0][2];

    let m13 = 1 * (m13_1 - m13_2 + m13_3);
    let row2 = [m10, m11, m12, m13];
    cofactorMatrix.push(row2);

    let m20_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[1][2] -
        encryptionMatrix[3][2] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][1];

    let m20_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[1][1] -
        encryptionMatrix[3][1] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][2];

    let m20_3 =
      (encryptionMatrix[3][2] * encryptionMatrix[1][1] -
        encryptionMatrix[3][1] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][3];

    let m20 = 1 * (m20_1 - m20_2 + m20_3);

    let m21_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[1][2] -
        encryptionMatrix[3][2] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][0];

    let m21_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[1][0] -
        encryptionMatrix[3][0] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][2];

    let m21_3 =
      (encryptionMatrix[3][2] * encryptionMatrix[1][0] -
        encryptionMatrix[3][0] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][3];

    let m21 = -1 * (m21_1 - m21_2 + m21_3);

    let m22_1 =
      (encryptionMatrix[3][3] * encryptionMatrix[1][1] -
        encryptionMatrix[3][1] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][0];

    let m22_2 =
      (encryptionMatrix[3][3] * encryptionMatrix[1][0] -
        encryptionMatrix[3][0] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][1];

    let m22_3 =
      (encryptionMatrix[3][1] * encryptionMatrix[1][0] -
        encryptionMatrix[3][0] * encryptionMatrix[1][1]) *
      encryptionMatrix[0][3];

    let m22 = 1 * (m22_1 - m22_2 + m22_3);

    let m23_1 =
      (encryptionMatrix[3][2] * encryptionMatrix[1][1] -
        encryptionMatrix[3][1] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][0];

    let m23_2 =
      (encryptionMatrix[3][2] * encryptionMatrix[1][0] -
        encryptionMatrix[3][0] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][1];

    let m23_3 =
      (encryptionMatrix[3][1] * encryptionMatrix[1][0] -
        encryptionMatrix[3][0] * encryptionMatrix[1][1]) *
      encryptionMatrix[0][2];

    let m23 = -1 * (m23_1 - m23_2 + m23_3);

    let row3 = [m20, m21, m22, m23];
    cofactorMatrix.push(row3);

    let m30_1 =
      (encryptionMatrix[2][3] * encryptionMatrix[1][2] -
        encryptionMatrix[2][2] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][1];

    let m30_2 =
      (encryptionMatrix[2][3] * encryptionMatrix[1][1] -
        encryptionMatrix[2][1] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][2];

    let m30_3 =
      (encryptionMatrix[2][2] * encryptionMatrix[1][1] -
        encryptionMatrix[2][1] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][3];

    let m30 = -1 * (m30_1 - m30_2 + m30_3);

    let m31_1 =
      (encryptionMatrix[2][3] * encryptionMatrix[1][2] -
        encryptionMatrix[2][2] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][0];

    let m31_2 =
      (encryptionMatrix[2][3] * encryptionMatrix[1][0] -
        encryptionMatrix[2][0] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][2];

    let m31_3 =
      (encryptionMatrix[2][2] * encryptionMatrix[1][0] -
        encryptionMatrix[2][0] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][3];

    let m31 = 1 * (m31_1 - m31_2 + m31_3);

    let m32_1 =
      (encryptionMatrix[2][3] * encryptionMatrix[1][1] -
        encryptionMatrix[2][1] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][0];

    let m32_2 =
      (encryptionMatrix[2][3] * encryptionMatrix[1][0] -
        encryptionMatrix[2][0] * encryptionMatrix[1][3]) *
      encryptionMatrix[0][1];

    let m32_3 =
      (encryptionMatrix[2][1] * encryptionMatrix[1][0] -
        encryptionMatrix[2][0] * encryptionMatrix[1][1]) *
      encryptionMatrix[0][3];

    let m32 = -1 * (m32_1 - m32_2 + m32_3);

    let m33_1 =
      (encryptionMatrix[2][2] * encryptionMatrix[1][1] -
        encryptionMatrix[2][1] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][0];

    let m33_2 =
      (encryptionMatrix[2][2] * encryptionMatrix[1][0] -
        encryptionMatrix[2][0] * encryptionMatrix[1][2]) *
      encryptionMatrix[0][1];

    let m33_3 =
      (encryptionMatrix[2][1] * encryptionMatrix[1][0] -
        encryptionMatrix[2][0] * encryptionMatrix[1][1]) *
      encryptionMatrix[0][2];

    let m33 = 1 * (m33_1 - m33_2 + m33_3);
    let row4 = [m30, m31, m32, m33];
    cofactorMatrix.push(row4);

    console.log(cofactorMatrix);

    return cofactorMatrix.map((arr) => (
      <div className="cofactor_container">
        <div className="cofactor_num">{arr[0]}</div>
        <div className="cofactor_num">{arr[1]}</div>
        <div className="cofactor_num">{arr[2]}</div>
        <div className="cofactor_num">{arr[3]}</div>
      </div>
    ));
  };

  const CofactorMatrixTranspose = () => {
    return cofactorMatrix.map((arr) => (
      <div>
        <div className="cofactor_num">{arr[0]}</div>
        <div className="cofactor_num">{arr[1]}</div>
        <div className="cofactor_num">{arr[2]}</div>
        <div className="cofactor_num">{arr[3]}</div>
      </div>
    ));
  };

  const InverseMatrix = () => {

    return cofactorMatrix.map((arr) => (
      <div>
        <div className="cofactor_num">{(((arr[0] * 19) % 27) + 27) % 27}</div>
        <div className="cofactor_num">{(((arr[1] * 19) % 27) + 27) % 27}</div>
        <div className="cofactor_num">{(((arr[2] * 19) % 27) + 27) % 27}</div>
        <div className="cofactor_num">{(((arr[3] * 19) % 27) + 27) % 27}</div>
      </div>
    ));
  };

  let decryptNumArr = [];
  const DecodedMatrix = () => {
    decryptNumArr = [];

    let inverseMatrix = [];
    let col = [];

    for (let i = 0; i < 4; i += 1) {
      col = [];
      for (let j = 0; j < 4; j += 1) {
        col.push((((cofactorMatrix[j][i] * 19) % 27) + 27) % 27);
      }
      inverseMatrix.push(col);
    }

    let a = 0;
    let aArr = [];

    for (let i = 0; i < 7; i += 1) {
      aArr = [];
      for (let j = 0; j < 4; j += 1) {
        a = 0;
        for (let k = 0; k < 4; k += 1) {
          a += inverseMatrix[j][k] * allColumnMod27Arr[i][k];
        }
        aArr.push(a % 27);
      }
      decryptNumArr.push(aArr);
    }

    return decryptNumArr.map((arr) => (
      <div className="decodeMatrix_innerContainer">
        <div>{arr[0]}</div>
        <div>{arr[1]}</div>
        <div>{arr[2]}</div>
        <div>{arr[3]}</div>
      </div>
    ));
  };

  const NumberToLetter = () => {
    let str = "";

    decryptNumArr.map((numArr) =>
      numArr.map((num) => {
        str += numToLetter(num);
      })
    );

    console.log(str);
    return <div>{str}</div>;
  };

  return (
    <div>
      {/* <RenderTable /> */}
      <br />
      {/* <div>Inverse Table</div> */}
      {/* <RenderEnncryptionTable /> */}
      <br />
      <div>4x4 Encryption Table</div>
      <RenderMatrixEncryption />
      <br />
      <div>Determinate</div>
      <CalculateDeterminate />
      <br />
      <div>Text to Encrypt</div>
      <EncryptText />
      <br />
      <EncryptToNumber />
      <br />
      <div className="encrytion_container">
        <EncryptNumberWithMatrix />
      </div>
      <div>Encrypted to Mod 27</div>
      <div className="encrytion_container">
        <br />
        <EncryptNumberMod27 />
      </div>
      <div>Encrypted Message</div>
      <div className="encrytion_container">
        <ModNumToLetter />
      </div>
      <div>Cofactor Matrix</div>
      <CofactorMatrix />
      <br />
      <div>Cofactor Matrix Transpose</div>
      <div className="cofactor_transpose_container">
        <CofactorMatrixTranspose />
      </div>
      <br />
      <div>Inverse Matrix</div>
      <div className="cofactor_transpose_container">
        <InverseMatrix />
      </div>
      <br />
      <div>Back to Mod 27</div>
      <div className="decodeMatrix_container">
        <DecodedMatrix />
      </div>
      <div>Number to Letter</div>
      <NumberToLetter />
    </div>
  );
}

export default App;
