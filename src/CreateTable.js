import React from "react";
import MaterialTable from "material-table";
// import TableBody from "material-ui";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: 600,
  },
  bold: {
    fontWeight: "bolder",
    backgroundColor: "black",
    color: "white",
    paddingTop: "20px",
  },
});

function CreateTable(props) {
  //   console.log(props.data);
  var wordFreqDict = {};
  var rows = [];
  const fillFreqDict = (word) => {
    if (word in wordFreqDict) {
      wordFreqDict[word] += 1;
    } else {
      wordFreqDict[word] = 1;
    }
  };

  //   const wordFreqDict = Object.
  var splittedData = props.data.split(" ");
  splittedData.map(fillFreqDict);
  const wordMap = new Map(Object.entries(wordFreqDict));

  wordMap[Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
  };

  for (let [key, value] of wordMap) {
    console.log(key + " " + value);
  }

  console.log(wordFreqDict);

  for (let [key, value] of wordMap) {
    rows.push({ word: key, freq: value });
  }

  console.log(rows[1]);

  const classes = useStyles();

  //   var items = Object.keys
  rows = rows.slice(0, props.number);

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="center">
              Word
            </TableCell>
            <TableCell className={classes.bold} align="center">
              Frequency
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className="cell" key={row.word}>
              <TableCell align="center">{row.word}</TableCell>
              <TableCell align="center">{row.freq}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CreateTable;
