import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import React, { useEffect, useState } from "react";
import GenerateTable from './GenerateTable';

// Create styles
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
    borderWidth: 1
  }
});

const GeneratePDF = () => {
  return(
  <Document>
    <Page size="A4" style={styles.page} >
      <GenerateTable/>
    </Page>
  </Document>
  )};

export default GeneratePDF;