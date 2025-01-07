import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: (() => {
    try {
      return JSON.parse(localStorage.getItem('pastes')) || [];
    } catch {
      return [];
    }
  })(),
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste created successfully');
    },
    updateToPastes: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.pastes.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.pastes[index] = { ...state.pastes[index], ...updatedFields };
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste updated successfully');
      } else {
        toast.error('Paste not found');
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
      toast.success('All pastes have been reset');
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item.id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste deleted successfully');
      } else {
        toast.error('Paste not found');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
