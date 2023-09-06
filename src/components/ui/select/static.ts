const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '10px',
    border: state.isFocused ? '1px solid grey' : '1px solid transparent',
    boxShadow: 'none',
    ':hover': {
      border: '1px solid transparent'
    }
  }),
};

export { customStyles };
