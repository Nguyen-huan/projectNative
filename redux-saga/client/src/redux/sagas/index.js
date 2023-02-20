import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'
function* fetchPostSaga() {
  try {
    const posts = yield call(api.fetchPosts);
    console.log(posts)
    yield put(actions.getPosts.getPostSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
}

export default mySaga;
