import { Box } from 'components/Box';
import { Formik } from 'formik';
import { FormSearch, ButtonForm, InputSearch } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <>
      <Box pt="15px" pb="15px" className="searchbar">
        <Formik initialValues={{ querySearch: '' }} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <FormSearch className="form" autoComplete="off">
              <InputSearch
                name="querySearch"
                type="text"
                placeholder="Search movies ..."
              />
              <ButtonForm
                type="submit"
                className="button"
                disabled={isSubmitting}
              >
                Search
              </ButtonForm>
            </FormSearch>
          )}
        </Formik>
      </Box>
    </>
  );
};
