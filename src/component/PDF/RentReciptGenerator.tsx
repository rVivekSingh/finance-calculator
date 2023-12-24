import Button from "../Button";
import FormInput from "../FormInput";

import React, { useState } from "react";
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import GeneratePDF from './GeneratePDF'
import User from "./User";
import Section from "../Section";
import { Card, CardBody, CardForm } from "../Card";

const RentReceiptGenerator = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [rent, setRent] = useState<number | string>("");
  const [pan, setPan] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const validateObj = (simpleObject: User) => {
    return (
      simpleObject.name !== undefined &&
      simpleObject.address !== undefined &&
      simpleObject.owner !== undefined &&
      simpleObject.rent !== undefined &&
      simpleObject.pan !== undefined &&
      simpleObject.startDate !== undefined &&
      simpleObject.endDate !== undefined
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const simpleObject: User = {
      name,
      address,
      owner,
      rent: parseFloat(rent as string), // Assuming rent is a number
      pan,
      startDate: new Date(startDate).toISOString().split('T')[0],
      endDate: new Date(endDate).toISOString().split('T')[0],
    };

    if (validateObj(simpleObject)) {
      console.log(simpleObject);
      localStorage.setItem('userData', JSON.stringify(simpleObject));

      const doc = <GeneratePDF />;
      const asPdf = pdf();
      asPdf.updateContainer(doc);
      const blob = await asPdf.toBlob();
      saveAs(blob, (simpleObject.name.replace(" ", "_").toLowerCase() + '.pdf'));

      // Clear fields after submission
      clearFields();
    }

    console.log("simpleObject", simpleObject);
  }

  const clearFields = () => {
    setName("");
    setAddress("");
    setOwner("");
    setRent("");
    setPan("");
    setStartDate("");
    setEndDate("");
  }
  const resetStatus = !name || !address || !owner || !rent || !pan || !startDate || !endDate;

  return (
    <Section title="Rent Recipt Generator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Enter your name"
                  type="text"
                  labelProps={{ htmlFor: "name" }}
                  value={name}
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <FormInput
                  label="Enter your address"
                  type="text"
                  labelProps={{ htmlFor: "address" }}
                  value={address}
                  id="address"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />

                <FormInput
                  label="Enter owner's name"
                  type="text"
                  labelProps={{ htmlFor: "owner" }}
                  value={owner}
                  id="owner"
                  placeholder="Enter owner's name"
                  onChange={(e) => setOwner(e.target.value)}
                  required
                />

                <FormInput
                  label="Enter rent amount"
                  type="number"
                  labelProps={{ htmlFor: "rent" }}
                  value={rent as string}
                  id="rent"
                  placeholder="Enter rent amount"
                  onChange={(e) => setRent(e.target.value)}
                  required
                />

                <FormInput
                  label="Enter PAN number"
                  type="text"
                  labelProps={{ htmlFor: "pan" }}
                  value={pan}
                  id="pan"
                  placeholder="Enter PAN number"
                  onChange={(e) => setPan(e.target.value)}
                />

                <FormInput
                  label="Enter start date"
                  type="date"
                  labelProps={{ htmlFor: "startDate" }}
                  value={startDate}
                  id="startDate"
                  placeholder="Enter start date"
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />

                <FormInput
                  label="Enter end date"
                  type="date"
                  labelProps={{ htmlFor: "endDate" }}
                  value={endDate}
                  id="endDate"
                  placeholder="Enter end date"
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />

                <div className="grid grid-cols-2 gap-8">
                  <Button
                    className="w-full mt-3 lg:mt-6"
                    onClick={handleSubmit}
                  >
                    Generate Recipt
                  </Button>

                  <Button
                    className="w-full mt-3 lg:mt-6"
                    variant="secondary"
                    type="button"
                    onClick={clearFields}
                    disabled={resetStatus}
                  >
                    Clear Fields
                  </Button>
                </div>
              </div>
            </form>
          </CardForm>
        </CardBody>
      </Card>
    </Section>
  );
}

export default RentReceiptGenerator;
