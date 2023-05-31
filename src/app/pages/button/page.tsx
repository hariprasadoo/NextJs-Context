'use client';
import React from 'react';
import Button from '../../components/Button';
import { GoAlert, GoCloudDownload, GoDatabase } from "react-icons/go";

export default function ButtonPage() {
  return (
    <>
      <div>
        <Button primary rounded onClick={()=>{console.log('You Clicked')}}>Click me!</Button>
      </div>
      <div>
        <Button secondary>Buy Now</Button>
      </div>
      <div>
        <Button success>See Deal</Button>
      </div>
      <div>
        <Button warning>Hide Add</Button>
      </div>
      <div>
        <Button danger rounded>Somethings</Button>
      </div>
    </>
  );
}
