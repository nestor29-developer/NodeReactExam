import { showDialog, hideDialog, editDialog } from '../editMenuForm.Action';
import { SHOW_DIALOG, HIDE_DIALOG, EDIT_POST } from '../types';

const MOCK_POST_ITEM = {
  id: 5,
  title: 'sample title',
  body: 'sample post',
};
describe('Edit Menu Form Actions', () => {
  it('showDialog should dispatch HIDE_DIALOG action', () => {
    expect(hideDialog()).toEqual({
      type: HIDE_DIALOG,
    });
  });
  it('showDialog should dispatch SHOW_DIALOG action', () => {
    expect(showDialog()).toEqual({
      type: SHOW_DIALOG,
    });
  });
  it('editDialog should update dialog form values', () => {
    expect(editDialog(MOCK_POST_ITEM)).toEqual({
      type: EDIT_POST,
      payload: MOCK_POST_ITEM,
    });
  });
});
