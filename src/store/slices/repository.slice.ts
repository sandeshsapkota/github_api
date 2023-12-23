import { createSlice } from '@reduxjs/toolkit';

interface RepositoriesTypes {
  repositories: any[];
}

const initialState: RepositoriesTypes = {
  repositories: [],
};

const repositorySlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setRepositoryList(state, action) {
      state.repositories = action.payload;
    },
  },
});

export const { setRepositoryList } = repositorySlice.actions;

export default repositorySlice;
