import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [values, setValues] = useLocalStorage("Mode", initialValues);


    return ([values, setValues]);
}

export default useDarkMode;