import React, {Component} from 'react';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
export const Header = ({upload}) => {
    return (
      <div>
        <div style={{ float: "left" , cursor : "pointer"}}>IDE</div>

        <div
          style={{cursor : "pointer"}}
          onClick={upload}
          style={{ float: "right" }}
        >
          upload
        </div>
      </div>
    );
}
