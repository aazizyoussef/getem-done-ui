import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TodoForm = ({todo, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Todo</h1>
      <TextInput
        name="Description"
        label="Description"
        value={todo.Description}
        onChange={onChange}
        error={errors.Description}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TodoForm.propTypes = {
  todo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default TodoForm;
