import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import {
  POLITICIAN_CHAMBER_COLUMN,
  POLITICIAN_DISTRICT_COLUMN,
  POLITICIAN_NAME_COLUMN,
  POLITICIAN_PARTY_COLUMN
} from 'components/politicians/table/columns';


class PoliticianTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      POLITICIAN_NAME_COLUMN,
      POLITICIAN_PARTY_COLUMN,
      POLITICIAN_CHAMBER_COLUMN,
      POLITICIAN_DISTRICT_COLUMN
    ];
  }

  header() {
    return (
      <TableHead>
        <TableRow>
          {this.columns.map(
            (col, i) =>
              <TableCell key={i}>{col.Head()}</TableCell>
          )}
        </TableRow>
      </TableHead>
    )
  }

  body() {
    const rows = Object.values(this.props.politicians).map((politician) => this.row(politician));
    return (
      <TableBody>
        {rows}
      </TableBody>
    )
  }

  row(politician) {
    return (
      <TableRow key={politician.id}>
        {this.columns.map(
          (col, i) =>
            <TableCell key={i}>{col.Cell({politician})}</TableCell>
        )}
      </TableRow>
    );
  }

  footer() {
    return (
      <TableFooter>
        {/*<TablePagination/>*/}
      </TableFooter>
    );
  }

  render() {
    return (
      <Table>
        {this.header()}
        {this.body()}
        {this.footer()}
      </Table>
    );
  }
}

export default PoliticianTable;