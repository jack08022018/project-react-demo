import { 
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import * as Common from '../../app/CommonUtils';
import axios from 'axios';
import { ExecException } from 'child_process';

const initialState = {
  isLoginSuccess: false
};

// export const checkAuthority = new Promise(async (resolve: any, reject: any) => {
//   try {
//     let accessToken = localStorage.getItem('accessToken');
//     if(!accessToken) {
//       throw new Error('401');
//     }
//     const json = await axios({
//       method: 'post',
//       url: '/dancing/api/checkAuthority',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
//       },
//     });
//     resolve(json);
//   } catch (e: any) {
//     console.log(e);
//     reject(e.message);
//   }
// });
export const checkAuthorityAsync = async () => {
  try {
    let accessToken = localStorage.getItem('accessToken');
    if(!accessToken) {
      throw new Error('401');
    }
    const json = await axios({
      method: 'post',
      url: '/jpa/api/checkAuthority',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return json;
  } catch (e: any) {
    console.log(e);
    return e.message;
  }
};

// export const checkAuthorityAsync = createAsyncThunk('student/checkAuthority',
//   async (params, thunkAPI) => {
//     try {
//       let accessToken = localStorage.getItem('accessToken');
//       if(!accessToken) {
//         throw new Error('401');
//       }
//       const json = await axios({
//         method: 'post',
//         url: '/dancing/api/checkAuthority',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       return '200';
//     } catch (e: any) {
//       console.log(e);
//       return e.message;
//     }
//   }
// );

export const Slice = createSlice({
  name: 'LoginPage',
  initialState,
  reducers: {
  },
});

// export const { onCollapse, selectPage } = Slice.actions;

export default Slice.reducer;
