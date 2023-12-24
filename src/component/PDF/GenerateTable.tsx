import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface User {
  startDate: string;
  endDate: string;
  rent: string;
  name: string;
  address: string;
  owner: string;
  pan: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    maxHeight: '35%'
  }
});

function isValidUser(obj: any): obj is User {
  return typeof obj === 'object' && obj !== null && obj.name !== null;
}

const GenerateTable: React.FC = () => {
  const table = localStorage.getItem('userData');
  let tableProps: User | undefined;

  try {
    if (table) {
      const parsedTable = JSON.parse(table);
      if (isValidUser(parsedTable)) {
        tableProps = parsedTable;
      } else {
        throw new Error('Invalid User data in localStorage');
      }
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    // Handle the error accordingly
  }

  console.log("data from table", tableProps);

  if (!tableProps) {
    // Handle the case when tableProps is undefined
    return null; // or some default component or message
  }

  var dateStart = new Date(tableProps.startDate);
  var dateEnd = new Date(tableProps.endDate);
  var daysOfYear: string[] = [];

  var loop = new Date(dateStart);
  while (loop <= dateEnd) {
    daysOfYear.push(loop.toLocaleString('default', { month: 'short' }) + " " + loop.getFullYear());
    var newDate = loop.setMonth(loop.getMonth() + 1);
    loop = new Date(newDate);
  }

  const returnTables = daysOfYear.map((days, index) => (
    tableProps && 
      <View style={styles.section} key={(index + 1).toString()} wrap={false}>
      <Text style={{ fontSize: 12 }}>RENT RECEIPT</Text>
      <Text style={{ fontSize: 11, paddingTop: 5 }}>{days}</Text>
      <Text style={{ fontSize: 11, textAlign: 'right', paddingRight: '7%' }}> Receipt {(index + 1).toString()}</Text>
      <Text style={{ fontSize: 11, paddingTop: '7%', paddingRight: '3%' }}>Received sum of INR {tableProps.rent} from {tableProps.name} towards the rent of property located at {tableProps.address} for the period {days}</Text>
      <Text style={{ fontSize: 11, paddingTop: '10%' }} >Signature</Text>
      <Text style={{ fontSize: 11, paddingTop: 8 }}>{tableProps.owner} (Landlord)</Text>
      <Text style={{ fontSize: 11, paddingTop: 8 }}>{tableProps.pan} (PAN Number)</Text>
    </View>
  ));

  return <>{returnTables}</>;
}

export default GenerateTable;
