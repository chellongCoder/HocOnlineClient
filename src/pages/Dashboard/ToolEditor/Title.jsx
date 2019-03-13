
import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from "reactstrap";
export const Title = ({ onChangeTitle }) => {
    return (
        <InputGroup style={{
            paddingBottom : 10
        }}>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>
            <Input onChange={onChangeTitle}/>
        </InputGroup>
    )
}