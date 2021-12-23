import styled from "styled-components/native";

const StyledInput = styled.TextInput.attrs({
    placeholder: "Enter a text...",
    placeholderTextColor: "#111" 
})`
    padding: 20px;
    font-size: 20px;
    border: 1px solid #111;
`;

const Input = () => {
    return (
        <StyledInput />
    )
}

export default Input;