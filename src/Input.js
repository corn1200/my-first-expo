import { useState } from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput.attrs({
    placeholder: "Enter a text...",
    placeholderTextColor: "#111"
})`
    padding: 20px;
    font-size: 20px;
    border: 1px solid ${({ text }) => (text ? '#00f' : '#111')};
`;

const Input = () => {
    const [text, setText] = useState('');
    return (
        <StyledInput onChangeText={text => setText(text)} text={text} />
    );
}

export default Input;